// Mock knowledge base for the /chat-check conversational check.
// Plain .ts, no React — imported by components/ChatCheckScripts.tsx.
//
// Everything here is drafted placeholder copy + illustrative numbers for the
// front-end mock. A later dev handoff replaces the matcher with a real
// classifier, the "upload" with real ingestion, and RESULT with a live score.

export type DocSpec = {
  id: string;
  label: string;
  hint: string;
  /** when set, the first upload of this doc comes back needing a fix, then clears */
  needs?: string;
};

export type Service = {
  id: string;
  label: string;
  blurb: string;
  icon: string;
  keywords: string[];
  docs: DocSpec[];
};

export type ReportMetric = { label: string; value: number; kind?: "recovery" | "risk" };

export type Report = {
  title: string;
  score: number;
  band: "GREEN" | "YELLOW" | "RED";
  total: number;
  breakdown: { key: string; label: string; count: number; tone: "pass" | "error" | "review" | "muted" }[];
  opportunities: number;
  metrics: ReportMetric[];
};

export const WELCOME =
  "Hi — I'm the DataTwin assistant. Tell me what you're looking at in a line or two, and I'll point you to the right check.";

export const ASK_PROBLEM =
  "For example: “we think we're leaving input credit on the table”, “rebate claims keep getting short-paid”, or “our close never ties out”.";

export const SERVICES: Service[] = [
  {
    id: "gst",
    label: "Input credit & tax returns",
    blurb: "Credit claimed vs. credit available, return-to-ledger agreement, and where tax is exposed.",
    icon: "#ic-tax",
    keywords: [
      "gst", "input credit", "itc", "tax", "return", "gstr", "2b", "3b", "vat",
      "credit", "reconcile tax", "tax exposure", "supplier", "invoice tax",
    ],
    docs: [
      { id: "credit-statement", label: "Auto-drafted credit statement", hint: "the period's system-generated statement, Excel or CSV" },
      { id: "purchase-register", label: "Purchase register", hint: "all inward invoices for the period", needs: "the period column — a few rows have no invoice date, so I can't place them in a return period" },
      { id: "return-summary", label: "Filed return summary", hint: "what was actually filed for the period" },
    ],
  },
  {
    id: "ap",
    label: "Payables leakage",
    blurb: "Duplicate and overpaid invoices, missed credits, and terms not taken.",
    icon: "#ic-cash",
    keywords: [
      "ap", "payable", "payables", "vendor", "supplier", "invoice", "overpaid",
      "duplicate", "double pay", "payment", "spend", "procure", "p2p", "statement",
    ],
    docs: [
      { id: "vendor-master", label: "Vendor master", hint: "current vendor list with bank + terms" },
      { id: "ap-register", label: "AP invoice register", hint: "12–24 months of posted invoices", needs: "the currency column — some totals look like mixed currencies and I don't want to compare across them" },
      { id: "payment-run", label: "Payment history", hint: "cleared payments for the same window" },
    ],
  },
  {
    id: "rebates",
    label: "Rebates, claims & incentives",
    blurb: "Every programme recomputed from actual sales, against what was claimed or paid.",
    icon: "#ic-badge",
    keywords: [
      "rebate", "claim", "incentive", "commission", "ship and debit", "spa",
      "chargeback", "channel", "distributor", "payout", "scheme", "accrual",
      "short-paid", "shortpaid", "co-op", "mdf",
    ],
    docs: [
      { id: "programme-terms", label: "Programme terms", hint: "the agreements, rate tables and any amendments" },
      { id: "sales-data", label: "Sales / shipment data", hint: "line-level, for the claim period", needs: "a customer or ship-to key — without it I can't tie lines back to a programme" },
      { id: "claim-register", label: "Claim / settlement register", hint: "what was claimed and what was received" },
    ],
  },
  {
    id: "recon",
    label: "Reconciliation & close",
    blurb: "Sub-ledgers against the GL, bank against book, and what's still open at cut-off.",
    icon: "#ic-search",
    keywords: [
      "recon", "reconciliation", "close", "month end", "month-end", "tie out",
      "tie-out", "gl", "ledger", "bank", "balance", "audit", "unreconciled",
      "suspense", "open items", "cut-off",
    ],
    docs: [
      { id: "trial-balance", label: "Trial balance", hint: "period close, all accounts" },
      { id: "subledger", label: "Sub-ledger extracts", hint: "AP, AR and bank sub-ledgers", needs: "the account mapping — two sub-ledger codes don't match anything in the trial balance" },
      { id: "bank-statements", label: "Bank statements", hint: "all operating accounts for the period" },
    ],
  },
];

// Illustrative results per service. The GST payload matches the reference
// screenshot exactly; the others are shaped the same with domain labels.
export const RESULTS: Record<string, Report> = {
  gst: {
    title: "GST health score",
    score: 83.86,
    band: "YELLOW",
    total: 140,
    breakdown: [
      { key: "pass", label: "Pass", count: 77, tone: "pass" },
      { key: "error", label: "Error", count: 9, tone: "error" },
      { key: "review", label: "Review", count: 24, tone: "review" },
      { key: "need-doc", label: "Need document", count: 4, tone: "muted" },
      { key: "need-info", label: "Need info", count: 0, tone: "muted" },
    ],
    opportunities: 1,
    metrics: [
      { label: "Excess GST", value: 1200 },
      { label: "Potential recovery", value: 1200, kind: "recovery" },
      { label: "Missed ITC", value: 0 },
      { label: "ITC at risk", value: 800, kind: "risk" },
      { label: "Tax exposure", value: 500, kind: "risk" },
    ],
  },
  ap: {
    title: "Payables health score",
    score: 78.4,
    band: "YELLOW",
    total: 132,
    breakdown: [
      { key: "pass", label: "Pass", count: 69, tone: "pass" },
      { key: "error", label: "Error", count: 14, tone: "error" },
      { key: "review", label: "Review", count: 41, tone: "review" },
      { key: "need-doc", label: "Need document", count: 6, tone: "muted" },
      { key: "need-info", label: "Need info", count: 2, tone: "muted" },
    ],
    opportunities: 3,
    metrics: [
      { label: "Duplicate payments", value: 2400 },
      { label: "Potential recovery", value: 4100, kind: "recovery" },
      { label: "Missed credits", value: 900 },
      { label: "Terms not taken", value: 1300, kind: "risk" },
      { label: "Open exposure", value: 700, kind: "risk" },
    ],
  },
  rebates: {
    title: "Rebate health score",
    score: 71.2,
    band: "RED",
    total: 118,
    breakdown: [
      { key: "pass", label: "Pass", count: 54, tone: "pass" },
      { key: "error", label: "Error", count: 19, tone: "error" },
      { key: "review", label: "Review", count: 37, tone: "review" },
      { key: "need-doc", label: "Need document", count: 5, tone: "muted" },
      { key: "need-info", label: "Need info", count: 3, tone: "muted" },
    ],
    opportunities: 4,
    metrics: [
      { label: "Under-claimed", value: 5200 },
      { label: "Potential recovery", value: 5200, kind: "recovery" },
      { label: "Short-paid claims", value: 1800 },
      { label: "Accrual at risk", value: 1400, kind: "risk" },
      { label: "Dispute exposure", value: 600, kind: "risk" },
    ],
  },
  recon: {
    title: "Close health score",
    score: 88.9,
    band: "GREEN",
    total: 146,
    breakdown: [
      { key: "pass", label: "Pass", count: 108, tone: "pass" },
      { key: "error", label: "Error", count: 5, tone: "error" },
      { key: "review", label: "Review", count: 27, tone: "review" },
      { key: "need-doc", label: "Need document", count: 4, tone: "muted" },
      { key: "need-info", label: "Need info", count: 2, tone: "muted" },
    ],
    opportunities: 1,
    metrics: [
      { label: "Unreconciled", value: 3100 },
      { label: "Recoverable difference", value: 900, kind: "recovery" },
      { label: "In suspense", value: 1200 },
      { label: "Open at cut-off", value: 2000, kind: "risk" },
      { label: "Book vs. bank gap", value: 400, kind: "risk" },
    ],
  },
};

// Canned answers for free-text questions asked in the composer at any point.
const QA: { k: string[]; a: string }[] = [
  {
    k: ["cost", "price", "how much", "fee", "charge", "pay"],
    a: "The check itself is free. If you want the full breakdown and a walkthrough there's a short call after — no contract at that stage.",
  },
  {
    k: ["safe", "secure", "security", "data", "access", "read", "write", "risk to"],
    a: "Read-only. You send document extracts, nothing connects into your systems for this check, and nothing is shared outside DataTwin.",
  },
  {
    k: ["how long", "time", "duration", "quick", "when"],
    a: "The mock scores instantly. In a real run it's usually same day once the documents are in.",
  },
  {
    k: ["document", "file", "upload", "format", "excel", "csv", "which"],
    a: "Excel or CSV for each. If a file is missing a column I'll tell you which one and you can re-send it.",
  },
  {
    k: ["db", "database", "store", "stored", "save", "keep"],
    a: "In this demo nothing is stored — the “sent to DataTwin” step is illustrative. A real run writes to your engagement workspace.",
  },
];

export function answerFor(text: string): string {
  const t = text.toLowerCase();
  for (const row of QA) if (row.k.some((k) => t.includes(k))) return row.a;
  return "Good question — I'll note it for the team. Pick a check above to keep going, or leave your details and we'll come back on it.";
}

// Lightweight keyword scoring so the service list feels responsive to what the
// visitor typed. Returns services best-first; callers show the top few and
// keep the rest available.
export function rankServices(text: string): Service[] {
  const t = " " + text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ") + " ";
  const scored = SERVICES.map((s) => {
    let score = 0;
    for (const kw of s.keywords) if (t.includes(" " + kw + " ") || t.includes(kw)) score += kw.includes(" ") ? 2 : 1;
    return { s, score };
  });
  const anyHit = scored.some((x) => x.score > 0);
  if (!anyHit) return SERVICES.slice();
  return scored.sort((a, b) => b.score - a.score).map((x) => x.s);
}

/* ============================================================================
   DEMO Scenario 2 — "coconut oil"
   A coconut-oil maker sells edible-grade oil in 100 ml sachets as *hair oil*
   (HSN 3305, 18%). It is classifiable as edible coconut oil (HSN 1513, 5%).
   The chat shows the exposure, locks the fix behind an engagement, then — once
   the (offline) agreement is "signed" — reveals the reclassification and saving.
   All figures illustrative. ~5,000 L/mo · 100 ml packs · ₹20 · ₹10,00,000/mo.
   ========================================================================= */

export type ConvoTurn = { ai?: string; user?: string };

/* The AI is a neutral fact-gatherer here — no leading questions, no rates, no
   hint of the classification fix. The specific correction (edible / HSN 1513 /
   5%) is DataTwin's answer and is only revealed after the engagement is
   "signed" (SCN2_REVEAL). */
export const SCN2_CONVO: ConvoTurn[] = [
  {
    ai: "I'm the DataTwin assistant. Tell me a bit about your business.",
  },
  {
    user:
      "I run a coconut oil business. We produce about 5,000 litres a month, mostly 100 ml sachets at ₹20 each.",
  },
  {
    ai:
      "Thanks. What's the product exactly, what's it used for, and how is it sold and labelled?",
  },
  {
    user:
      "It's coconut oil. Sold and labelled as hair oil, in retail sachets — distributors and kirana stores mostly.",
  },
  {
    ai: "And what HSN code and GST rate are you filing at today?",
  },
  {
    user: "HSN 3305, 18%.",
  },
  {
    ai:
      "Got it. Send me your filings and a few invoices and I'll run the check.",
  },
];

export const SCN2_DOCS: DocSpec[] = [
  { id: "gst-returns", label: "GST returns", hint: "GSTR-1 and GSTR-3B for the last three months" },
  {
    id: "sales-register",
    label: "Sales register / tax invoices",
    hint: "line-level, with HSN and pack size",
    needs: "the HSN column has more than one code in it — I'll flag the inconsistent rows and take the rest",
  },
  { id: "product-master", label: "Product master", hint: "every SKU with its HSN, description and rate" },
  { id: "fssai", label: "FSSAI licence or product label", hint: "to establish the oil is edible grade" },
];

export const SCN2_CHECK_STEPS = [
  "Reading the returns and invoices",
  "Matching SKUs to HSN codes",
  "Checking the rate applied",
  "Packaging the result",
];

/* Result the user sees BEFORE connecting: it shows there is a material amount
   tied to the classification, and nothing about the fix. */
export const SCN2_EXPOSURE = {
  eyebrow: "GST position · coconut oil",
  band: "Needs review",
  perMonth: 130000,
  headline: "in question every month on the current classification",
  sub:
    "There's an open question on how this product line is classified for GST. At 5,000 L a month it's a material amount — the correction, and what it recovers, are in the detail below.",
  projection: [
    { k: "in the next 5 days", v: 22000 },
    { k: "by the end of this quarter", v: 390000 },
    { k: "over the year", v: 1560000 },
  ],
  note: "Illustrative — confirmed against your filings once our team reviews.",
};

// shown blurred behind the lock — the shape of the findings, not the answer
export const SCN2_LOCKED = [
  { label: "Rate applied vs. rate assessed", amount: "₹1,30,000 / mo" },
  { label: "HSN classification review", amount: "code change" },
  { label: "Excess GST in the open period", amount: "₹7,80,000" },
  { label: "Product master & label corrections", amount: "required" },
  { label: "Refund claim under Section 54", amount: "eligible" },
];

export const SCN2_LOCK_NOTE =
  "The correction and what it recovers open up once the DataTwin team has reviewed your file and the engagement is signed.";

export const SCN2_REVEAL = {
  today: { product: "Coconut oil, 100 ml pack — filed as hair oil", hsn: "3305 90", rate: "18%" },
  corrected: { product: "Edible coconut oil", hsn: "1513 11", rate: "5%" },
  adjustment:
    "Your oil is edible grade and FSSAI-licensed. Under the coconut-oil classification rulings, edible coconut oil falls under 1513 regardless of pack size — a 100 ml pack does not make it a hair-care preparation. Update the product master and labelling to “edible”, re-file the affected GSTR-1 / 3B under 1513 at 5%, and lodge a refund claim for the excess collected in the open period.",
  worth: [
    { k: "per month", v: "₹1,30,000" },
    { k: "per quarter", v: "₹3,90,000" },
    { k: "per year", v: "₹15,60,000" },
  ],
  refund: "₹7,80,000",
  refundNote: "recoverable for the last six months",
};

/* Mock sales-register sheet shown when the user clicks "View the flagged rows"
   on Scenario 2's sales register. Deliberately NO 1513 anywhere — the flag is
   only about the HSN column being inconsistent (blank / short / over-specified). */
export type SheetRow = { cells: string[]; flag?: boolean; flagCol?: number; note?: string };
export const SCN2_SHEET = {
  file: "sales_register.xlsx",
  sheet: "Aug 2026",
  note: "3 rows flagged — the HSN column isn't consistent. These are set aside; the rest is used as-is.",
  cols: ["Invoice", "Date", "Product", "HSN", "Pack", "Qty", "Taxable ₹", "GST"],
  rows: [
    { cells: ["INV-4471", "01 Aug", "Coconut oil — sachet", "3305 90", "100 ml", "1,200", "24,000", "18%"] },
    { cells: ["INV-4472", "02 Aug", "Coconut oil — sachet", "3305 90", "100 ml", "980", "19,600", "18%"] },
    { cells: ["INV-4473", "03 Aug", "Coconut oil — bottle", "3305 90", "200 ml", "310", "12,400", "18%"] },
    { cells: ["INV-4474", "05 Aug", "Coconut oil — sachet", "", "100 ml", "1,050", "21,000", "18%"], flag: true, flagCol: 3, note: "HSN blank" },
    { cells: ["INV-4475", "06 Aug", "Coconut oil — sachet", "3305 90", "100 ml", "1,340", "26,800", "18%"] },
    { cells: ["INV-4476", "08 Aug", "Coconut oil — pouch", "3305", "500 ml", "220", "22,000", "18%"], flag: true, flagCol: 3, note: "no sub-heading" },
    { cells: ["INV-4477", "09 Aug", "Coconut oil — sachet", "3305 90", "100 ml", "1,110", "22,200", "18%"] },
    { cells: ["INV-4478", "11 Aug", "Coconut oil — bottle", "3305 90", "200 ml", "290", "11,600", "18%"] },
    { cells: ["INV-4479", "12 Aug", "Coconut oil — sachet", "3305 9010", "100 ml", "1,020", "20,400", "18%"], flag: true, flagCol: 3, note: "over-specified / no space" },
    { cells: ["INV-4480", "13 Aug", "Coconut oil — sachet", "3305 90", "100 ml", "1,260", "25,200", "18%"] },
    { cells: ["INV-4481", "15 Aug", "Coconut oil — pouch", "3305 90", "500 ml", "200", "20,000", "18%"] },
    { cells: ["INV-4482", "16 Aug", "Coconut oil — sachet", "3305 90", "100 ml", "1,180", "23,600", "18%"] },
  ],
};

/* ============================================================================
   DEMO Scenario 3 — "coaching institute" (recipient & e-invoice compliance)
   Loosely inspired by a real Rajasthan AAR order on coaching-institute
   invoicing — used only as the legal/business basis for the scenario. Every
   name, count, date and figure below is an illustrative demo value, not a
   fact from that order.
   ========================================================================= */

/* Neutral fact-gathering, same voice as Scenario 2: who receives the
   coaching, who pays, whose GSTIN ends up on the invoice. No verdict yet. */
export const SCN3_CONVO: ConvoTurn[] = [
  { ai: "I'm the DataTwin assistant. Tell me a bit about your business." },
  {
    user:
      "We're a coaching institute — we prepare students for competitive exams like IIT-JEE and NEET.",
  },
  { ai: "Thanks. How are your coaching fees usually paid, and who do you invoice?" },
  {
    user:
      "Usually the student or their parents pay us directly. Sometimes a company sponsors a student and gives us its GSTIN to bill against.",
  },
  { ai: "And in those cases, who actually receives the coaching — the student, or whoever's paying?" },
  {
    user:
      "The student always receives the coaching. The parent or the sponsor is just paying, and they want the invoice issued to their GSTIN.",
  },
  {
    ai:
      "Got it. Send me a few sample invoices, your registration details and your enrolment records, and I'll check how those are being handled.",
  },
];

export const SCN3_DOCS: DocSpec[] = [
  {
    id: "coaching-invoices",
    label: "Sample coaching invoices",
    hint: "a mix of student, parent and sponsor-billed invoices",
    needs:
      "a few of these show a GSTIN that doesn't match the student's enrolment or file — I'll flag the inconsistent ones and take the rest",
  },
  { id: "gst-registration", label: "GST registration certificate", hint: "your current registration details" },
  { id: "enrolment-records", label: "Admission / enrolment records", hint: "who's enrolled, and for which course" },
  { id: "fee-records", label: "Fee & payment records", hint: "who actually paid, per student" },
  { id: "sponsorship-agreements", label: "Sponsorship / payment agreements", hint: "where a business pays on a student's behalf" },
  { id: "e-invoice-sample", label: "Sample e-invoices (IRN records)", hint: "a few recent e-invoices, where applicable" },
];

export const SCN3_CHECK_STEPS = [
  "Reading the invoices and registration details",
  "Identifying who's liable to pay",
  "Checking the GSTIN used against enrolment records",
  "Checking e-invoice applicability",
];

/* Result the user sees BEFORE connecting: a count of invoices that need a
   closer look and why, with no legal conclusion or specific provision. */
export const SCN3_FINDING = {
  eyebrow: "GST position · coaching institute",
  band: "Needs review",
  bigNumber: 24,
  headline: "coaching invoices potentially need review",
  sub:
    "Some invoices carry the GSTIN of a parent, guardian or sponsoring business, while the student is who actually receives the coaching. That raises a question on the correct recipient and e-invoice treatment — the detail is below.",
  breakdown: [
    { k: "review period", v: "Apr 2025 – Mar 2026" },
    { k: "invoice population", v: "24 of 340 validated" },
    { k: "sponsor / third-party paid", v: "9 invoices" },
  ],
  note: "Illustrative demo figures — confirmed against your filings once our team reviews.",
};

// shown blurred behind the lock — the shape of the findings, not the answer
export const SCN3_LOCKED = [
  { label: "Recipient determination", amount: "review needed" },
  { label: "GSTIN usage vs. enrolment", amount: "9 flagged" },
  { label: "E-invoice applicability", amount: "check required" },
  { label: "Corrective documentation", amount: "required" },
  { label: "Filing alignment", amount: "pending" },
];

export const SCN3_LOCK_NOTE =
  "The detailed assessment, the applicable provisions and the recommended next steps open up once the DataTwin team has reviewed your file and the engagement is signed.";

export const SCN3_REVEAL = {
  eyebrow: "Recipient & e-invoice assessment",
  today: {
    label: "Coaching invoice raised to the payer's GSTIN, on request",
    meta: "No documented basis for treating the payer as recipient",
  },
  corrected: {
    label: "Recipient determined and documented against the student's enrolment",
    meta: "GSTIN usage and e-invoice treatment aligned to that basis",
  },
  adjustment:
    "Under Section 2(93) of the CGST Act, the recipient is whoever is liable to pay the consideration — that can be the parent, guardian or a sponsoring business, even though the student is who receives the coaching. Section 31 and Rule 48(4) then govern how the tax invoice and e-invoice are raised against that recipient. Where a payer supplies a GSTIN and asks for the invoice against it, you're not required to independently verify that they'll use the service for business purposes or that they're eligible to claim ITC — that sits between the recipient and their own filings. What matters is documenting who is paying, on what basis, and applying Notification No. 13/2020-Central Tax (as amended) consistently for every invoice raised that way.",
  worth: [
    { k: "invoices reviewed", v: "24 of 340" },
    { k: "recipient basis documented", v: "Sec 2(93), CGST Act" },
    { k: "e-invoice treatment", v: "Reviewed & aligned" },
  ],
  closing: "a corrective-filing checklist",
  closingNote: "prepared for the affected invoices",
};

/* Mock invoice register shown when the user clicks "View the flagged rows"
   on Scenario 3's sample invoices. Flags are all about the GSTIN column —
   missing, mismatched or invalid — never a verdict on the transaction. */
export const SCN3_SHEET = {
  file: "coaching_invoices.xlsx",
  sheet: "FY 2025-26",
  note:
    "3 invoices flagged — the GSTIN used doesn't match the student's enrolment or a sponsor on file. These are set aside; the rest is used as-is.",
  cols: ["Invoice", "Date", "Student", "Payer", "GSTIN used", "Amount ₹"],
  rows: [
    { cells: ["INV-2201", "04 Apr 2025", "A. Sharma", "Parent", "08ABCPX1234F1Z5", "1,20,000"] },
    { cells: ["INV-2202", "07 Apr 2025", "R. Iyer", "Self", "", "95,000"] },
    { cells: ["INV-2203", "09 Apr 2025", "K. Verma", "Sponsor — Nova Edu Pvt Ltd", "09NOVAX5678K1Z2", "1,40,000"] },
    { cells: ["INV-2204", "12 Apr 2025", "S. Rao", "Parent", "", "95,000"], flag: true, flagCol: 4, note: "GSTIN missing, sponsor claimed verbally" },
    { cells: ["INV-2205", "15 Apr 2025", "T. Bose", "Self", "", "95,000"] },
    { cells: ["INV-2206", "18 Apr 2025", "M. Nair", "Sponsor — Bright Future Ltd", "27BRIGF9012L1Z8", "1,40,000"], flag: true, flagCol: 4, note: "GSTIN belongs to an unrelated entity" },
    { cells: ["INV-2207", "21 Apr 2025", "P. Desai", "Parent", "", "95,000"] },
    { cells: ["INV-2208", "24 Apr 2025", "V. Menon", "Self", "", "95,000"] },
    { cells: ["INV-2209", "27 Apr 2025", "J. Khan", "Sponsor — Nova Edu Pvt Ltd", "09NOVAX567K1Z2", "1,40,000"], flag: true, flagCol: 4, note: "GSTIN checksum invalid" },
    { cells: ["INV-2210", "30 Apr 2025", "H. Gupta", "Parent", "", "95,000"] },
  ],
};
