# Close KPI Catalogue — downloadable PDF

Builds [`public/close-kpi-catalogue.pdf`](../../public/close-kpi-catalogue.pdf),
the download offered on `/close-kpi-catalogue`.

## Regenerate

```bash
pip install -r tools/kpi-catalogue-pdf/requirements.txt
python tools/kpi-catalogue-pdf/generate.py
```

## Source of truth

The 204 metrics, the 8 domains and their "what it protects" lines are read
straight from [`app/(site)/close-kpi-catalogue/metrics.ts`](../../app/(site)/close-kpi-catalogue/metrics.ts)
— the same data the page renders. Edit `metrics.ts`, re-run this script, commit
both. The prose that isn't in `metrics.ts` (the intro, "how to read a line", the
dashboard rule, the closing note) is inline in `generate.py`.

This is a faithful re-issue of the marketing team's original ReportLab export:
same content, cleaner presentation — embedded Inter so punctuation renders,
`KeepTogether` on every process block so nothing strands at a page foot, brand
colour and R/O/G legend dots, and a slim running header/footer.

`fonts/` holds the Inter 400/500/600/700 latin subsets (OFL, rsms/inter).
