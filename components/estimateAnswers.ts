// Mock Q&A for the /get-estimate composer.
//
// DEMO ONLY. Deterministic keyword matching over a small hand-written
// knowledge base drawn from the marketing site's own copy — stands in for a
// real assistant until the dev team wires one up. Keep the answers factual and
// short; the team edits them in place.

export type QA = {
  id: string;
  keywords: string[]; // lowercase; multi-word phrases score 2, single words 1
  answer: string;
};

export const ANSWERS: QA[] = [
  {
    id: "what-is",
    keywords: [
      "what is datatwin",
      "what do you do",
      "what does datatwin do",
      "what is this",
      "tell me about datatwin",
      "explain datatwin",
      "who are you",
      "what are you",
    ],
    answer:
      "DataTwin is a finance observability platform for the office of the CFO. It reads your full transaction population, rebuilds what should have happened, values the difference, and gives you a recoverable number — cash, tax, misstatements and control gaps — before anything in your systems changes. The same rules then run at transaction entry so the leak doesn't reopen.",
  },
  {
    id: "how-it-works",
    keywords: [
      "how does it work",
      "how it works",
      "darp",
      "discover assess recover prevent",
      "what is the process",
      "how do you do it",
      "methodology",
      "framework",
    ],
    answer:
      "It follows DARP — Discover, Assess, Recover, Prevent. Discover is read-only, no process change. In Assess you see the recoverable number first. Recover collects it through your existing settlement process, so the engagement pays for itself. Prevent turns the same rules into live observability at transaction entry. One engine — no second build.",
  },
  {
    id: "recover-what",
    keywords: [
      "what can you recover",
      "what can be recovered",
      "what do you find",
      "what can i recover",
      "recoverable",
      "what kind of money",
      "leakage",
      "where does money leak",
    ],
    answer:
      "Four kinds of finding, each with a number on it: cash (duplicate payments, paid above contract, discounts never taken), tax (unclaimed input credit, rate mismatches, sales-return mismatches), misstatements (GR not accrued, prepaids not amortised, provisions never released), and control weaknesses (duplicate vendors, invoices just under approval limits, self-approval).",
  },
  {
    id: "pricing",
    keywords: [
      "how much does it cost",
      "pricing",
      "price",
      "cost",
      "fees",
      "how much do you charge",
      "budget",
      "expensive",
      "what's the cost",
      "quote",
    ],
    answer:
      "You see the recoverable number before there's anything to sign, and the engagement is scoped so the recovery pays for it. Exact commercials depend on the processes and periods in scope — the team walks through that in the 30-minute session once your number is in front of you. Leave your details above and we'll come back with both.",
  },
  {
    id: "timeline",
    keywords: [
      "how long",
      "how fast",
      "timeline",
      "how quickly",
      "when will i",
      "turnaround",
      "how many days",
      "how long does it take",
      "speed",
    ],
    answer:
      "You get a recoverable number in about two minutes from describing the problem. A full first-period analysis on your own data — Discover and Assess — typically comes back within days of read-only access, not a multi-week project.",
  },
  {
    id: "security",
    keywords: [
      "security",
      "secure",
      "compliance",
      "soc 2",
      "soc2",
      "iso 27001",
      "iso27001",
      "certified",
      "data protection",
      "gdpr",
      "where is data stored",
      "is it safe",
      "privacy",
    ],
    answer:
      "DataTwin is ISO 27001 certified and SOC 2 attested. Access is read-only, data is encrypted in transit and at rest, and nothing is shared outside DataTwin. There's a fuller breakdown on the Security page.",
  },
  {
    id: "read-only",
    keywords: [
      "read only",
      "read-only",
      "will it change",
      "change our systems",
      "change our process",
      "do we have to change",
      "disrupt",
      "write access",
      "modify",
      "touch our data",
    ],
    answer:
      "Discovery is read-only. Nothing is written back, nobody on your team changes how they work, and there's no migration. DataTwin runs above your ERP, not inside it.",
  },
  {
    id: "integrations",
    keywords: [
      "integration",
      "integrate",
      "sap",
      "netsuite",
      "tally",
      "oracle",
      "erp",
      "which systems",
      "does it work with",
      "connect to",
      "s4hana",
      "s/4hana",
      "dynamics",
      "quickbooks",
    ],
    answer:
      "It runs above SAP, NetSuite, Tally and other ERPs with no migration, and reads the evidence that sits outside them too — contracts, POS files, gateway and bank statements, vendor-filed returns. If you can export it, DataTwin can reconcile against it.",
  },
  {
    id: "contract",
    keywords: [
      "contract",
      "commitment",
      "commit",
      "sign",
      "trial",
      "pilot",
      "no obligation",
      "lock in",
      "lock-in",
      "cancel",
      "obligation",
    ],
    answer:
      "No commitment until the figure is in front of you. No gated demo and no discovery call before you know what we do — you see the number first, and there's no contract at this stage. If it isn't worth acting on, at least you know you're safe.",
  },
  {
    id: "vs-audit",
    keywords: [
      "audit",
      "auditor",
      "different from an audit",
      "vs audit",
      "instead of an audit",
      "replace our auditor",
      "sample",
      "population",
      "internal audit",
    ],
    answer:
      "An auditor tests a sample and reports instances. DataTwin reads the whole population, rebuilds what should have happened, and puts a number on every finding — including the thousands of items below materiality that add up. It complements the audit rather than replacing it.",
  },
  {
    id: "data-needed",
    keywords: [
      "what data do you need",
      "what do you need from us",
      "what access",
      "how much data",
      "what do i need to provide",
      "requirements",
      "get started",
      "what's required",
      "onboarding",
    ],
    answer:
      "To return your number: read-only access to one period and one process, plus the supporting documents for it (contracts, POS or gateway files, bank lines, vendor returns — whatever applies). That's enough to run Discover and Assess.",
  },
  {
    id: "gst",
    keywords: [
      "gst",
      "gstr",
      "input tax credit",
      "itc",
      "input credit",
      "2b",
      "gst portal",
      "gstin",
    ],
    answer:
      "GST input-credit recovery is one of the use cases — DataTwin reconciles your filings against your purchase register and surfaces 2B mismatches, Rule 37A reversals, blocked credit and duplicate claims, each ranked by value and how long you have to claim it. There's a dedicated GST Discovery flow if you want to start there.",
  },
  {
    id: "customers",
    keywords: [
      "who uses",
      "customers",
      "case study",
      "case studies",
      "references",
      "clients",
      "who are your clients",
      "proof",
      "results",
    ],
    answer:
      "Finance teams across logistics, healthcare, energy, education and services use DataTwin — names like Blue Dart, Dr Agarwal's, SunEdison, CMS and Veranda. The team can share relevant case studies in the walkthrough.",
  },
  {
    id: "observability",
    keywords: [
      "observability",
      "prevent",
      "real time",
      "real-time",
      "going forward",
      "continuous",
      "monitoring",
      "keep it from happening",
      "stop it recurring",
    ],
    answer:
      "Every rule that finds money in your history can run at transaction entry from then on — checking each transaction against your goals and standards as it lands, so problems surface while the cost to fix is still low. That's the Prevent stage, and it needs no second build.",
  },
];

export const FALLBACK =
  "Good question — the team can answer that properly in the walkthrough. Leave your details above and we'll come back within one business day; in the meantime you can ask me about how DataTwin works, what it recovers, security, integrations, timelines or pricing.";

export function answerFor(text: string): string {
  const hay = ` ${text.toLowerCase().replace(/\s+/g, " ")} `;
  let best: QA | null = null;
  let bestScore = 0;
  for (const qa of ANSWERS) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (hay.includes(kw)) score += kw.includes(" ") ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = qa;
    }
  }
  return best && bestScore > 0 ? best.answer : FALLBACK;
}
