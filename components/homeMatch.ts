// Home hero prompt → use-case matcher.
//
// Front-end MOCK for the homepage hero composer: a visitor describes their
// finance problem, and we map it to the closest DataTwin use case(s) with a
// one-line "here's what we'd test" and a link to that page. Real intent
// classification is a later backend handoff — this is deterministic keyword
// scoring, kept deliberately simple and easy for the team to tune.
//
// `blurb` copy is drafted from each product page's hero and is meant to be
// edited in place by the marketing team.

export type UseCase = {
  id: string;
  label: string;
  route: string;
  icon: string; // IconSprite symbol id, e.g. "#ic-cash"
  blurb: string;
  keywords: string[]; // lowercase; multi-word phrases score higher
};

export const USE_CASES: UseCase[] = [
  {
    id: "accounts-payable",
    label: "Accounts Payable",
    route: "/accounts-payable",
    icon: "#ic-cash",
    blurb:
      "Every invoice matched to its PO and receipt, run through your control checklist, and the posted journal read back against the entry we expected — duplicates and overpayments caught before the payment run.",
    keywords: [
      "duplicate payment",
      "duplicate invoice",
      "overpaid",
      "overpayment",
      "paid twice",
      "paid above contract",
      "vendor invoice",
      "supplier invoice",
      "accounts payable",
      "invoice",
      "three way match",
      "n-way match",
      "purchase order",
      "approval limit",
      "payment run",
      "ap ",
      "vendor master",
      "discount not taken",
      "early payment discount",
    ],
  },
  {
    id: "accounts-receivable",
    label: "Accounts Receivable",
    route: "/accounts-receivable",
    icon: "#ic-recover",
    blurb:
      "Every receipt matched to an invoice across what your customers, banks and gateways report, each short payment given a reason and each partial cleared to the line rather than parked as unapplied.",
    keywords: [
      "unapplied cash",
      "cash application",
      "unapplied",
      "short payment",
      "short paid",
      "deduction",
      "dispute",
      "collections",
      "receivable",
      "accounts receivable",
      "customer payment",
      "remittance",
      "billing",
      "cash sitting",
      "ar ",
      "aging",
      "ageing",
      "dso",
      "revenue recognition",
    ],
  },
  {
    id: "taxation-reconciliation",
    label: "Taxation Reconciliation",
    route: "/taxation-reconciliation",
    icon: "#ic-tax",
    blurb:
      "What you booked reconciled against what you filed, and both against what your suppliers and customers filed — payables and receivables together — then ranked by how long you have to act.",
    keywords: [
      "tax",
      "withholding",
      "tds",
      "tcs",
      "input credit",
      "input tax credit",
      "rate mismatch",
      "return",
      "filing",
      "notice",
      "reverse charge",
      "duty",
      "drawback",
      "statutory",
      "reconcile tax",
      "vat",
    ],
  },
  {
    id: "reconciliation-audit",
    label: "Reconciliation & Audit",
    route: "/reconciliation-audit",
    icon: "#ic-search",
    blurb:
      "An N-way reconciliation at whatever grain the question needs — invoice to PO to receipt to contract, or claim to POS to inventory to agreement — with every match carrying the document that supports it.",
    keywords: [
      "reconciliation",
      "reconcile",
      "audit",
      "auditor",
      "sample",
      "population",
      "intercompany",
      "inter-company",
      "bank reconciliation",
      "match rate",
      "tolerance",
      "fuzzy match",
      "gr/ir",
      "grni",
      "accrual ageing",
      "misstatement",
      "restatement",
      "audit readiness",
    ],
  },
  {
    id: "channel-rebates",
    label: "Channel Rebates",
    route: "/channel-rebates",
    icon: "#ic-badge",
    blurb:
      "The true gross-to-net rebuilt from what you already hold — ship & debit, price protection, SPAs, tiered and retrospective rebates, co-op and chargebacks — showing what's unclaimed, short-paid, over-accrued or about to age out.",
    keywords: [
      "rebate",
      "channel rebate",
      "ship and debit",
      "ship & debit",
      "price protection",
      "special pricing",
      "spa",
      "co-op",
      "coop fund",
      "chargeback",
      "stock rotation",
      "gross-to-net",
      "gross to net",
      "trade spend",
      "distributor claim",
      "scheme",
      "incentive programme",
      "retrospective rebate",
    ],
  },
  {
    id: "channel-rebates-manufacturers",
    label: "Channel Rebates — Manufacturers",
    route: "/channel-rebates-manufacturers",
    icon: "#ic-shield",
    blurb:
      "Every distributor claim re-priced against the registration and price you actually authorised, validated against sell-through and stock position, with the reserve computed from the same rows.",
    keywords: [
      "distributor claim",
      "can't verify",
      "cannot verify",
      "can not verify",
      "paying claims",
      "unverifiable claim",
      "claims we can't",
      "sell-through",
      "sell through",
      "authorised price",
      "registration",
      "reserve",
      "manufacturer rebate",
      "as a manufacturer",
      "we manufacture",
    ],
  },
  {
    id: "channel-rebates-distributors",
    label: "Channel Rebates — Distributors",
    route: "/channel-rebates-distributors",
    icon: "#ic-recover",
    blurb:
      "What you were entitled to recover reconstructed across every vendor line and portal — claims never raised, short-paid and never contested, or about to pass their filing window.",
    keywords: [
      "claim it back",
      "claim back",
      "file a claim",
      "vendor portal",
      "filing window",
      "fronted the margin",
      "recover the difference",
      "as a distributor",
      "we distribute",
      "claims never raised",
      "short-paid claim",
    ],
  },
  {
    id: "partner-payouts",
    label: "Partner Payouts",
    route: "/partner-payouts",
    icon: "#ic-user",
    blurb:
      "Each partner's payout recomputed from your own volume and activity data against the scheme as agreed — tiers, slabs, guarantees, incentives and deductions in one pass — starting with periods you've already paid.",
    keywords: [
      "payout",
      "partner payout",
      "reseller",
      "affiliate",
      "franchise",
      "referral",
      "channel partner",
      "payout scheme",
      "slab",
      "guarantee",
      "paying partners",
      "partner program",
    ],
  },
  {
    id: "sales-commissions",
    label: "Sales Commissions & Incentives",
    route: "/sales-commissions",
    icon: "#ic-gauge",
    blurb:
      "Every commission statement recomputed from your own bookings and collections against the plan as written — attainment, tiers, accelerators, splits, draws and clawbacks together — starting with periods you've already paid.",
    keywords: [
      "commission",
      "commissions",
      "sales incentive",
      "incentive plan",
      "quota",
      "attainment",
      "accelerator",
      "clawback",
      "draw",
      "rep spreadsheet",
      "shadow spreadsheet",
      "comp plan",
      "sales comp",
      "wrong every quarter",
    ],
  },
  {
    id: "fscp",
    label: "Financial Close (FSCP)",
    route: "/fscp",
    icon: "#ic-gauge",
    blurb:
      "The close read as 204 metrics across eight domains, each answering one question — is there a blocker here, how severe — as a count, a value and a colour a controller can act on, not a percentage.",
    keywords: [
      "close",
      "month-end",
      "month end",
      "period end",
      "financial close",
      "close takes",
      "days to close",
      "close blocker",
      "consolidation",
      "reporting package",
      "controller",
      "close checklist",
      "fast close",
    ],
  },
  {
    id: "gst-discovery",
    label: "GST Input Credit Discovery",
    route: "/gst-discovery",
    icon: "#ic-tax",
    blurb:
      "Your GST filings read against your purchase register — 2B mismatches, Rule 37A reversals, §17(5) blocked credit and duplicate claims — every recoverable rupee of input tax credit, ranked by value and claim window.",
    keywords: [
      "gst",
      "gstr",
      "gstr-2b",
      "gstr 2b",
      "input tax credit",
      "itc",
      "input credit",
      "rule 37a",
      "17(5)",
      "blocked credit",
      "gst portal",
      "gstin",
      "never claimed",
    ],
  },
];

export const PROCESSING_STEPS: string[] = [
  "Reading your description",
  `Matching against ${USE_CASES.length} use cases`,
  "Checking which findings carry recoverable value",
  "Ranking by amount and likelihood of collection",
];

export const ANSWER_INTRO =
  "Here's where we'd look, and what we'd test in each. Tell us which one is closest and we'll come back with a number.";

export const NO_MATCH_BLURB =
  "Your description spans more than one area — which is common. We'd start with a read-only look across the likely candidates and put a number on each before recommending where to focus.";

export type Match = { uc: UseCase; score: number };

// Deterministic keyword scoring. Lowercase the input, add weight for every
// keyword found (multi-word phrases weigh 2, single words 1). Returns every
// use case with score > 0, highest first.
export function matchUseCases(text: string): Match[] {
  const hay = ` ${text.toLowerCase().replace(/\s+/g, " ")} `;
  const scored: Match[] = USE_CASES.map((uc) => {
    let score = 0;
    for (const kw of uc.keywords) {
      if (hay.includes(kw)) score += kw.includes(" ") ? 2 : 1;
    }
    return { uc, score };
  });
  return scored
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score);
}

// The 1–3 cards to show: the top match, plus any runner-up within 1 point of it.
export function topMatches(text: string): Match[] {
  const all = matchUseCases(text);
  if (all.length === 0) return [];
  const top = all[0].score;
  return all.filter((m, i) => i === 0 || (i < 3 && top - m.score <= 1));
}
