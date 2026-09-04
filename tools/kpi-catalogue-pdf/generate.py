"""Regenerate public/close-kpi-catalogue.pdf from the single source of truth,
app/(site)/close-kpi-catalogue/metrics.ts.

    pip install -r tools/kpi-catalogue-pdf/requirements.txt
    python tools/kpi-catalogue-pdf/generate.py

Content is the same as the original ReportLab export the marketing team shipped
(8 domains, 56 close processes, 204 close-blocker metrics, the "how to read a
line" notes, the dashboard rule, the eight-domains table and the closing note):
nothing is added or reworded here. This script only fixes the presentation of
the old export:

  * embeds Inter 400/500/600/700 so the middot and dashes render everywhere,
    instead of the tofu boxes the old font subset produced
  * every close-process block is KeepTogether, so headings never strand at the
    foot of a page and the eight-domains table never splits across pages
  * brand colour: navy titles, a sky domain rule, real R / O / G legend dots
  * one slim running header + footer instead of the heavy five-line block that
    was stamped at the top of every page

Re-run it whenever metrics.ts changes so the download stays in sync.
"""
import os
import re

from PIL import Image as PILImage
from reportlab.graphics.shapes import Circle, Drawing
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, CondPageBreak, Frame, Image, KeepTogether, NextPageTemplate,
    PageTemplate, Paragraph, Spacer, Table, TableStyle,
)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
FONTS = os.path.join(HERE, "fonts")
METRICS_TS = os.path.join(ROOT, "app", "(site)", "close-kpi-catalogue", "metrics.ts")
LOGO = os.path.join(ROOT, "public", "datatwin-logo.png")
OUT = os.path.join(ROOT, "public", "close-kpi-catalogue.pdf")


# ---- read the source of truth ------------------------------------------
def load_metrics_ts(path):
    src = open(path, encoding="utf-8").read()

    def objs(block):
        out = []
        for m in re.finditer(r"\{([^{}]*)\}", block):
            fields = dict(re.findall(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', m.group(1)))
            nums = dict(re.findall(r"(\w+):\s*(\d+)", m.group(1)))
            for k, v in fields.items():
                fields[k] = v.replace('\\"', '"').replace("\\\\", "\\")
            fields.update({k: int(v) for k, v in nums.items()})
            out.append(fields)
        return out

    dom_block = re.search(r"DOMAINS:\s*Domain\[\]\s*=\s*\[(.*?)\n\];", src, re.S).group(1)
    met_block = re.search(r"METRICS:\s*Metric\[\]\s*=\s*\[(.*?)\n\];", src, re.S).group(1)
    domains_meta = objs(dom_block)
    metrics = objs(met_block)

    domains = []
    for dm in domains_meta:
        rows = [x for x in metrics if x["domain"] == dm["code"]]
        procs = []
        for x in rows:
            if not procs or procs[-1]["name"] != x["process"]:
                procs.append({"name": x["process"], "population": x["against"], "metrics": []})
            procs[-1]["metrics"].append(x["metric"])
        domains.append({**dm, "processes": procs})

    totals = {
        "domains": len(domains),
        "processes": sum(len(d["processes"]) for d in domains),
        "metrics": len(metrics),
    }
    assert totals == {"domains": 8, "processes": 56, "metrics": 204}, totals
    return domains, totals


DOMAINS, TOTALS = load_metrics_ts(METRICS_TS)

# ---- fonts ------------------------------------------------------------
pdfmetrics.registerFont(TTFont("Inter", os.path.join(FONTS, "inter-400.ttf")))
pdfmetrics.registerFont(TTFont("Inter-Med", os.path.join(FONTS, "inter-500.ttf")))
pdfmetrics.registerFont(TTFont("Inter-SB", os.path.join(FONTS, "inter-600.ttf")))
pdfmetrics.registerFont(TTFont("Inter-B", os.path.join(FONTS, "inter-700.ttf")))
pdfmetrics.registerFontFamily("Inter", normal="Inter", bold="Inter-B")

# ---- palette (light-theme tokens from app/globals.css) ---------------
NAVY = colors.HexColor("#0047AD")
SKY = colors.HexColor("#0098C8")
INK = colors.HexColor("#101114")
SOFT = colors.HexColor("#54565F")
FAINT = colors.HexColor("#84868F")
LINE = colors.HexColor("#E2E3E8")
LINESOFT = colors.HexColor("#EDEEF1")
PANEL = colors.HexColor("#F4F4F6")
TINT = colors.HexColor("#F2F6FF")
RED = colors.HexColor("#E5484D")
AMBER = colors.HexColor("#F5A524")
GREEN = colors.HexColor("#0E9F6E")

PAGE_W, PAGE_H = A4
MARGIN = 20 * mm
CONTENT_W = PAGE_W - 2 * MARGIN
MID = "  ·  "


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def ps(name, **kw):
    kw.setdefault("fontName", "Inter")
    kw.setdefault("textColor", INK)
    kw.setdefault("alignment", TA_LEFT)
    return ParagraphStyle(name, **kw)


S = {
    "kicker": ps("kicker", fontName="Inter-SB", fontSize=8.5, leading=12, textColor=SKY, spaceAfter=6),
    "title": ps("title", fontName="Inter-B", fontSize=26, leading=30, textColor=NAVY, spaceAfter=14),
    "intro": ps("intro", fontSize=10.5, leading=16, textColor=SOFT, spaceAfter=18),
    "h2": ps("h2", fontName="Inter-B", fontSize=13, leading=17, spaceBefore=14, spaceAfter=8),
    "body": ps("body", fontSize=9.7, leading=14.5, textColor=SOFT, spaceAfter=7),
    "callBody": ps("callBody", fontSize=9.5, leading=14, textColor=SOFT),
    "issued": ps("issued", fontName="Inter-Med", fontSize=8, leading=11, textColor=FAINT),
    "domProtect": ps("domProtect", fontSize=9.5, leading=13.5, textColor=SOFT),
    "metric": ps("metric", fontSize=9.5, leading=13, textColor=SOFT),
    "metricN": ps("metricN", fontName="Inter-SB", fontSize=9, leading=13, textColor=SKY, alignment=1),
    "th": ps("th", fontName="Inter-SB", fontSize=7, leading=9, textColor=FAINT),
    "thN": ps("thN", fontName="Inter-SB", fontSize=7, leading=9, textColor=FAINT, alignment=1),
    "tdCode": ps("tdCode", fontName="Inter-B", fontSize=9, leading=12, textColor=NAVY),
    "tdName": ps("tdName", fontName="Inter-SB", fontSize=9, leading=12),
    "tdNum": ps("tdNum", fontName="Inter-Med", fontSize=9, leading=12, textColor=SOFT, alignment=1),
    "tdWhat": ps("tdWhat", fontSize=8.7, leading=12, textColor=SOFT),
    "legend": ps("legend", fontName="Inter-Med", fontSize=8.5, leading=11, textColor=FAINT),
}


def dot(color, d=6):
    dr = Drawing(d + 3, d + 1)
    dr.add(Circle(d / 2 + 1, d / 2, d / 2, fillColor=color, strokeColor=None))
    return dr


def legend_flow():
    def cell(c, label):
        return Table(
            [[dot(c), Paragraph(label, S["legend"])]],
            colWidths=[12, 58],
            style=TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]),
        )

    t = Table([[cell(RED, "Red"), cell(AMBER, "Orange"), cell(GREEN, "Green")]],
              colWidths=[90, 90, 90])
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    return t


def process_flow(p):
    pop = p["population"]
    pop = pop[0].lower() + pop[1:]
    rows = [[
        Paragraph("", S["metricN"]),
        Paragraph(
            f'<font name="Inter-B" size="10.5" color="#101114">{esc(p["name"])}</font>'
            f'<font name="Inter-Med" size="8.5" color="#84868F">'
            f'{MID}measured {esc(pop)}</font>',
            S["metric"]),
    ]]
    for i, m in enumerate(p["metrics"], 1):
        rows.append([Paragraph(str(i), S["metricN"]), Paragraph(esc(m), S["metric"])])
    t = Table(rows, colWidths=[20, CONTENT_W - 20])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, 0), 0),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 7),
        ("TOPPADDING", (0, 1), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 1), (-1, -1), 3),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("LINEBELOW", (0, 1), (-1, -2), 0.4, LINESOFT),
    ]))
    return t


def domain_band(d):
    inner = Paragraph(
        f'<font name="Inter-B" size="14" color="#0047AD">{esc(d["name"])}</font>  '
        f'<font name="Inter-SB" size="8" color="#84868F">'
        f'{d["processCount"]} close processes{MID}{d["metricCount"]} metrics</font><br/>'
        f'<font size="9.5" color="#54565F">{esc(d["protects"])}</font>',
        S["domProtect"])
    code = Paragraph(d["code"], ps("code", fontName="Inter-B", fontSize=11,
                                   textColor=colors.white, alignment=1))
    band = Table([[code, inner]], colWidths=[30, CONTENT_W - 30])
    band.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BACKGROUND", (0, 0), (0, 0), NAVY),
        ("LINEBELOW", (0, 0), (-1, -1), 1.5, SKY),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("LEFTPADDING", (1, 0), (1, 0), 12),
    ]))
    return band


def draw_chrome(canvas, doc, cover):
    canvas.saveState()
    canvas.setFont("Inter", 7)
    canvas.setFillColor(FAINT)
    canvas.drawString(MARGIN, 12 * mm,
                      "DataTwin" + MID + "Financial Statement Close Process" + MID + "Close KPI Catalogue")
    canvas.drawRightString(PAGE_W - MARGIN, 12 * mm, str(doc.page))
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 15 * mm, PAGE_W - MARGIN, 15 * mm)
    if not cover:
        canvas.setFont("Inter-SB", 7.5)
        canvas.setFillColor(FAINT)
        canvas.drawString(MARGIN, PAGE_H - MARGIN + 6, "The Close KPI Catalogue")
        canvas.drawRightString(PAGE_W - MARGIN, PAGE_H - MARGIN + 6,
                               f'{TOTALS["domains"]} domains{MID}{TOTALS["processes"]} close processes{MID}{TOTALS["metrics"]} metrics')
        canvas.setStrokeColor(LINESOFT)
        canvas.line(MARGIN, PAGE_H - MARGIN, PAGE_W - MARGIN, PAGE_H - MARGIN)
    canvas.restoreState()


def build():
    doc = BaseDocTemplate(
        OUT, pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN, topMargin=MARGIN, bottomMargin=22 * mm,
        title="DataTwin FSCP Close KPI Catalogue", author="DataTwin.ai",
        subject="8 domains, 56 close processes, 204 close-blocker metrics",
    )
    doc.addPageTemplates([
        PageTemplate(id="cover",
                     frames=[Frame(MARGIN, 22 * mm, CONTENT_W, PAGE_H - MARGIN - 22 * mm, id="c")],
                     onPage=lambda c, d: draw_chrome(c, d, True)),
        PageTemplate(id="content",
                     frames=[Frame(MARGIN, 22 * mm, CONTENT_W, PAGE_H - MARGIN - 22 * mm - 6, id="m")],
                     onPage=lambda c, d: draw_chrome(c, d, False)),
    ])

    story = []
    if os.path.exists(LOGO):
        iw, ih = PILImage.open(LOGO).size
        h = 8 * mm
        story += [Image(LOGO, width=h * iw / ih, height=h), Spacer(1, 14)]

    story.append(Paragraph("FINANCIAL STATEMENT CLOSE PROCESS", S["kicker"]))
    story.append(Paragraph("The Close KPI Catalogue", S["title"]))
    story.append(Paragraph(
        "Every metric in the FSCP framework: eight domains, 56 close processes and "
        "204 metrics. Each one measures something that can hold up a close, never a "
        "completion percentage, and each one carries the population it is measured "
        "against.", S["intro"]))

    def stat_cell(num, label, col="#0047AD"):
        return Paragraph(
            f'<font name="Inter-B" size="18" color="{col}">{num}</font><br/>'
            f'<font name="Inter-SB" size="7.5" color="#84868F">{label}</font>',
            ps("stat", fontSize=9, leading=13, alignment=1))

    stat_tbl = Table([[
        stat_cell(str(TOTALS["domains"]), "DOMAINS"),
        stat_cell(str(TOTALS["processes"]), "CLOSE PROCESSES"),
        stat_cell(str(TOTALS["metrics"]), "KPI METRICS"),
        stat_cell("R / O / G", "COLOUR LOGIC", "#0E9F6E"),
    ]], colWidths=[CONTENT_W / 4] * 4)
    stat_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("LINEAFTER", (0, 0), (-2, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 13),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 13),
    ]))
    story += [stat_tbl, Spacer(1, 20)]

    story.append(Paragraph("How to read a line", S["h2"]))
    for lead, rest in [
        ("Domain and close process.",
         " Which of the eight domains a metric belongs to, and which close process "
         "inside it. The structure does not change between periods, so a metric means "
         "the same thing in March as it does in September."),
        ("The close blocker.",
         " What is being counted, always stated as a problem: pending, unmatched, "
         "unposted, breaching, missing or unapproved. Never a completion rate."),
        ("Measured against.",
         " The denominator. Value over total count gives the issue percentage, and "
         "your own thresholds turn that into a colour. Nothing else is entered, and "
         "the message writes itself: 14 of 140 pending."),
    ]:
        story.append(Paragraph(
            f'<font name="Inter-SB" color="#101114">{lead}</font>{rest}', S["body"]))

    story.append(Spacer(1, 8))
    rule = Table([[Paragraph(
        '<font name="Inter-B" color="#101114">The dashboard rule</font><br/>'
        '<font color="#54565F">Show only close blockers: pending, mismatch, '
        'difference, breach, missing reference or unresolved approval. Every metric '
        'declares whether there is a blocker, and how severe it is. A close status '
        'of 92% complete tells nobody what to do next.</font>', S["callBody"])]],
        colWidths=[CONTENT_W])
    rule.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), TINT),
        ("LINEBEFORE", (0, 0), (0, -1), 2, NAVY),
        ("TOPPADDING", (0, 0), (-1, -1), 12), ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 14), ("RIGHTPADDING", (0, 0), (-1, -1), 14),
    ]))
    story += [rule, Spacer(1, 14)]
    story.append(Paragraph(
        "DataTwin.ai" + MID + "ISO 27001 certified" + MID + "SOC 2 attested" + MID
        + "Issued September 2026", S["issued"]))

    # page 2 - the eight domains table
    story.append(NextPageTemplate("content"))
    story.append(CondPageBreak(PAGE_H))
    story.append(Paragraph("The eight domains", S["h2"]))
    col_w = [34, 104, 66, 44, CONTENT_W - 34 - 104 - 66 - 44]
    rows = [[Paragraph("CODE", S["th"]), Paragraph("DOMAIN", S["th"]),
             Paragraph("CLOSE PROCESSES", S["thN"]), Paragraph("METRICS", S["thN"]),
             Paragraph("WHAT IT PROTECTS", S["th"])]]
    for d in DOMAINS:
        rows.append([
            Paragraph(d["code"], S["tdCode"]),
            Paragraph(esc(d["name"]), S["tdName"]),
            Paragraph(str(d["processCount"]), S["tdNum"]),
            Paragraph(str(d["metricCount"]), S["tdNum"]),
            Paragraph(esc(d["protects"]), S["tdWhat"]),
        ])
    dom_tbl = Table(rows, colWidths=col_w)
    dom_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (-1, 0), PANEL),
        ("LINEBELOW", (0, 0), (-1, 0), 0.75, LINE),
        ("LINEBELOW", (0, 1), (-1, -2), 0.4, LINESOFT),
        ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))
    story += [KeepTogether(dom_tbl), Spacer(1, 10), legend_flow()]

    # per-domain sections
    for d in DOMAINS:
        procs = d["processes"]
        story.append(CondPageBreak(150))
        story.append(Spacer(1, 16))
        story.append(KeepTogether([domain_band(d), Spacer(1, 12), process_flow(procs[0])]))
        for p in procs[1:]:
            story.append(KeepTogether([Spacer(1, 11), process_flow(p)]))

    # closing
    story.append(CondPageBreak(170))
    story.append(Spacer(1, 18))
    story.append(Paragraph("Where to go next", S["h2"]))
    story.append(Paragraph(
        "Thresholds are yours to set. The 204 questions are the same for everybody, "
        "which is what makes one close comparable to the next and one entity "
        "comparable to another.", S["body"]))
    story.append(Paragraph(
        "Before adopting anything, we score a close you have already signed: all 204 "
        "metrics across the full population, not a sample, showing what was blocking "
        "that close and what it was worth. Nothing changes in your systems, and it "
        "happens before there is anything to sign.", S["body"]))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        '<font name="Inter-SB" color="#0047AD">datatwin.ai' + MID + 'solve@datatwin.ai</font>',
        S["body"]))

    doc.build(story)
    print("wrote", os.path.relpath(OUT, ROOT), os.path.getsize(OUT), "bytes")


if __name__ == "__main__":
    build()
