"use client";

/* eslint-disable */
// /chat-check behaviour — a front-end MOCK, same spirit as GstChatScripts /
// EstimateChatScripts. The whole conversation is built at runtime and attaches
// to the server-rendered shell by id:
//   welcome -> ask the problem -> service picker -> upload ALL documents at
//   once -> verify each (with per-row notices, one re-upload branch) -> "sent
//   to DataTwin" checklist -> animated score report -> optional contact.
// AI lines stream in word-by-word behind a typing indicator. No network, no DB.
// Module-level `wired` flag keeps it once-only.

import { useEffect } from "react";
import {
  WELCOME,
  ASK_PROBLEM,
  SERVICES,
  RESULTS,
  answerFor,
  rankServices,
  SCN2_CONVO,
  SCN2_DOCS,
  SCN2_CHECK_STEPS,
  SCN2_EXPOSURE,
  SCN2_LOCKED,
  SCN2_LOCK_NOTE,
  SCN2_REVEAL,
  SCN2_SHEET,
  type Service,
  type DocSpec,
  type Report,
} from "@/components/chatCheckData";

let wired = false;

export default function ChatCheckScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.addEventListener("pageshow", function (e) {
      if ((e as PageTransitionEvent).persisted) window.location.reload();
    });

    // DEMO-only scenario switching: every run bumps `runGen`; a stale run's
    // pending `wait()` rejects with CANCEL and its async chain unwinds quietly.
    const CANCEL = { cancelled: true };
    let runGen = 0;
    let activeScenario = 1;
    window.addEventListener("unhandledrejection", function (e) {
      if (e.reason === CANCEL) e.preventDefault();
    });

    function esc(str: any) {
      return String(str).replace(/[&<>"']/g, function (c) {
        return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as any)[c];
      });
    }
    function wait(ms: number) {
      const g = runGen;
      return new Promise<void>(function (res, rej) {
        setTimeout(
          () => (g === runGen ? res() : rej(CANCEL)),
          reduce ? Math.min(ms, 1) : ms
        );
      });
    }
    function money(n: number) {
      return "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    const CHECK =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    const log = document.getElementById("ccLog")!;
    const statusEl = document.getElementById("ccStatus");
    const cForm = document.getElementById("ccComposerForm") as HTMLFormElement | null;
    const cInput = document.getElementById("ccComposerInput") as HTMLInputElement | null;

    /* ---------- scroll placement ----------
       Short responses scroll to the bottom, as usual. A response taller than
       the viewport lands with its TOP just under the header and then stops
       chasing — the user reads it top-down at their own pace. Auto-scroll
       resumes on the user's next action (see the shell click listener). */
    let holdScroll = false;
    let moreHint: HTMLButtonElement | null = null;

    function chromeTop() {
      const h = document.querySelector(".est-header") as HTMLElement | null;
      return (h?.offsetHeight || 58) + 8;
    }
    function viewRoom() {
      const c = document.querySelector(".est-composer") as HTMLElement | null;
      return window.innerHeight - chromeTop() - (c?.offsetHeight || 96) - 16;
    }
    function toBottom() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: reduce ? "auto" : "smooth" });
    }
    function place(el: HTMLElement) {
      const r = el.getBoundingClientRect();
      if (r.height > viewRoom()) {
        const target = Math.max(0, window.scrollY + r.top - chromeTop());
        if (Math.abs(window.scrollY - target) > 4)
          window.scrollTo({ top: target, behavior: reduce ? "auto" : "smooth" });
        holdScroll = true;
        toggleMore(true);
      } else if (!holdScroll) {
        toBottom();
      }
    }
    function toggleMore(show: boolean) {
      if (!moreHint) return;
      if (show) {
        moreHint.hidden = false;
        requestAnimationFrame(() => moreHint && moreHint.classList.add("is-in"));
      } else {
        moreHint.classList.remove("is-in");
        setTimeout(() => moreHint && !moreHint.classList.contains("is-in") && (moreHint.hidden = true), 260);
      }
    }
    function scrollDown() {
      if (!holdScroll) toBottom();
    }
    (function () {
      const shell = document.querySelector(".est-shell") || document.body;
      moreHint = document.createElement("button");
      moreHint.type = "button";
      moreHint.className = "cc-more";
      moreHint.hidden = true;
      moreHint.innerHTML =
        'more below <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
      shell.appendChild(moreHint);
      moreHint.addEventListener("click", () =>
        window.scrollBy({ top: viewRoom() * 0.82, behavior: "smooth" })
      );
      // any real scroll dismisses the hint; a button/link/choice click resumes auto-scroll
      window.addEventListener("scroll", () => toggleMore(false), { passive: true });
      shell.addEventListener(
        "click",
        (e) => {
          if ((e.target as HTMLElement).closest("button:not(.cc-more), .cc-choice, .cc-suggest, a")) {
            holdScroll = false;
            toggleMore(false);
          }
        },
        true
      );
    })();
    function setStatus(text: string, done?: boolean) {
      if (!statusEl) return;
      const t = statusEl.querySelector(".txt");
      if (t) t.textContent = text;
      statusEl.classList.toggle("done", !!done);
    }

    /* ---------- theme toggle (shared dt-theme key) ---------- */
    const themeToggle = document.getElementById("ccThemeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (isLight) {
          document.documentElement.removeAttribute("data-theme");
          try { localStorage.setItem("dt-theme", "dark"); } catch (e) {}
        } else {
          document.documentElement.setAttribute("data-theme", "light");
          try { localStorage.setItem("dt-theme", "light"); } catch (e) {}
        }
      });
    }

    /* ---------- message primitives ---------- */
    function turnAI(innerHTML: string, wide?: boolean) {
      const row = document.createElement("div");
      row.className = "cc-turn" + (wide ? " is-wide" : "");
      row.innerHTML = wide
        ? innerHTML
        : '<div class="cc-av" aria-hidden="true">DT</div><div class="cc-bubble">' + innerHTML + "</div>";
      log.appendChild(row);
      place(row);
      return row;
    }
    function turnUser(text: string) {
      const row = document.createElement("div");
      row.className = "cc-turn is-user";
      row.innerHTML = '<div class="cc-bubble">' + esc(text) + "</div>";
      log.appendChild(row);
      holdScroll = false;
      toggleMore(false);
      place(row);
    }
    function streamScroll(row: HTMLElement | null) {
      if (!row || holdScroll) return;
      if (row.getBoundingClientRect().height > viewRoom()) place(row);
      else window.scrollTo({ top: document.body.scrollHeight });
    }
    function bubbleAI(text: string) {
      return turnAI(esc(text));
    }
    function typingTurn() {
      return turnAI('<span class="cc-typing"><span></span><span></span><span></span></span>');
    }
    function inr(n: number) {
      return "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
    }
    function streamInto(bubble: HTMLElement, text: string) {
      return new Promise<void>(function (resolve) {
        const row = bubble.closest(".cc-turn") as HTMLElement | null;
        if (reduce) {
          bubble.textContent = text;
          streamScroll(row);
          resolve();
          return;
        }
        const words = text.split(" ");
        let i = 0;
        const node = document.createTextNode("");
        const caret = document.createElement("span");
        caret.className = "cc-caret";
        bubble.textContent = "";
        bubble.appendChild(node);
        bubble.appendChild(caret);
        const step = words.length > 34 ? 18 : 30;
        const budget = Date.now() + 2600; // hard cap so a throttled tab can't crawl
        function finish() {
          node.nodeValue = text;
          caret.remove();
          streamScroll(row);
          resolve();
        }
        function next() {
          if (i >= words.length || !bubble.isConnected) {
            caret.remove();
            resolve();
            return;
          }
          if (Date.now() > budget) {
            finish();
            return;
          }
          node.nodeValue += (i > 0 ? " " : "") + words[i];
          i++;
          streamScroll(row);
          setTimeout(next, step + Math.random() * 36);
        }
        next();
      });
    }
    async function say(text: string) {
      const row = typingTurn();
      const bubble = row.querySelector<HTMLElement>(".cc-bubble")!;
      await wait(360 + Math.min(text.length * 6, 620));
      await streamInto(bubble, text);
      await wait(150);
    }

    /* ---------- state ---------- */
    type Phase = "problem" | "service" | "upload" | "verify" | "analysing" | "report" | "contact" | "done";
    let phase: Phase = "problem";
    let service: Service | null = null;
    type DocRow = DocSpec & {
      status: "empty" | "ready" | "checking" | "ok" | "flag";
      attempts: number;
      _file?: string;
      _note?: string;
    };
    let docs: DocRow[] = [];
    let panel: HTMLElement | null = null;
    let uploadsInFlight = 0;
    let introResolve: () => void = () => {};
    let introDone: Promise<void> = Promise.resolve();
    // what runs once every uploaded document has verified — swapped per scenario
    let afterDocs: () => Promise<void> | void = finishUploads;

    function resetState() {
      phase = "problem";
      service = null;
      docs = [];
      panel = null;
      uploadsInFlight = 0;
      introDone = new Promise<void>((r) => (introResolve = r));
      afterDocs = finishUploads;
      setStatus("Getting started");
    }

    // true once this scenario run is no longer the live one (switched away)
    function stale(g: number) {
      return g !== runGen;
    }

    /* ---------- scenario 1 : the working flow — welcome + ask ---------- */
    async function scenario1() {
      const g = runGen;
      await wait(320);
      if (stale(g)) return;
      await say(WELCOME);
      if (stale(g)) return;
      await say(ASK_PROBLEM);
      if (stale(g)) return;
      introResolve();
      if (cInput) cInput.focus();
    }

    /* ---------- step 2 : problem -> service picker ---------- */
    async function handleProblem(text: string) {
      phase = "service";
      setStatus("Choosing a check");
      const ranked = rankServices(text);
      await say("Here's what fits. Pick the closest — you can switch after if it's not right.");
      const rows = ranked
        .map(
          (s) =>
            '<button class="cc-choice" type="button" data-id="' + s.id + '">' +
            '<span class="cc-choice-ic"><svg class="stroke" width="16" height="16" viewBox="0 0 24 24"><use href="' + s.icon + '" /></svg></span>' +
            '<span class="cc-choice-tx"><b>' + esc(s.label) + "</b><span>" + esc(s.blurb) + "</span></span>" +
            '<svg class="cc-choice-go stroke" width="15" height="15" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg>' +
            "</button>"
        )
        .join("");
      const card = turnAI('<div class="cc-card"><div class="cc-card-h">Choose a check</div><div class="cc-choices">' + rows + "</div></div>", true);
      card.querySelectorAll<HTMLButtonElement>(".cc-choice").forEach((btn) => {
        btn.addEventListener("click", function () {
          if (phase !== "service") return;
          card.querySelectorAll<HTMLButtonElement>(".cc-choice").forEach((b) => {
            b.disabled = true;
            b.classList.toggle("is-picked", b === btn);
          });
          chooseService(btn.getAttribute("data-id")!);
        });
      });
    }

    /* ---------- step 3 : upload all documents ---------- */
    async function chooseService(id: string) {
      service = SERVICES.find((s) => s.id === id) || null;
      if (!service) return;
      turnUser("Let's check: " + service.label);
      phase = "upload";
      setStatus("Collecting documents");
      docs = service.docs.map((d) => ({ ...d, status: "empty", attempts: 0 }));
      await say(
        "I'll need " + docs.length + " documents for this — add them in any order, Excel or CSV. " +
          "When they're all in I'll verify each one."
      );
      renderPanel();
    }

    function rowHTML(d: DocRow) {
      const cls = d.status === "empty" ? "" : d.status === "ready" ? " is-ready" : " is-" + d.status;
      let mark = String(docs.indexOf(d) + 1);
      if (d.status === "ok") mark = CHECK;
      else if (d.status === "flag") mark = "!";
      else if (d.status === "ready") mark = "•";
      const note = d._note
        ? '<span class="cc-up-note' + (d.status === "ok" ? " is-muted" : "") + '">' + esc(d._note) + "</span>"
        : "";
      let right = "";
      if (d.status === "empty") right = '<button class="cc-up-btn" type="button" data-act="upload">Upload</button>';
      else if (d.status === "ready")
        right = '<span class="cc-up-state is-ready">' + CHECK + " Added</span>";
      else if (d.status === "checking") right = '<span class="cc-up-state">Verifying…</span>';
      else if (d.status === "ok")
        right = '<span class="cc-up-state is-ok">' + CHECK + (d._note ? " Taken" : " Verified") + "</span>";
      else if (d.status === "flag") right = '<span class="cc-up-state is-flag">! Needs a look</span>';
      return (
        '<div class="cc-up-row' + cls + '" data-id="' + d.id + '">' +
        '<span class="cc-up-mark">' + mark + "</span>" +
        '<span class="cc-up-tx"><b>' + esc(d.label) + "</b><span>" +
        esc(d._file || d.hint) + "</span>" + note + "</span>" +
        right +
        "</div>"
      );
    }

    function renderPanel() {
      const allReady = docs.every((d) => d.status === "ready" || d.status === "ok");
      const anyFlag = docs.some((d) => d.status === "flag");
      const done = docs.every((d) => d.status === "ok");
      const toAdd = docs.filter((d) => d.status === "empty" || d.status === "flag").length;
      // no "run" button — the check starts on its own once every doc is in
      const hint =
        phase === "verify"
          ? "Checking your documents…"
          : allReady
          ? "All in — running the check."
          : toAdd + " still to add.";
      const foot = done ? "" : '<div class="cc-uploads-foot"><span class="cc-uploads-hint">' + hint + "</span></div>";

      const html =
        '<div class="cc-card"><div class="cc-card-h">' +
        (service ? esc(service.label) + " — documents" : "Documents") +
        '</div><div class="cc-uploads">' +
        docs.map(rowHTML).join("") +
        "</div>" + foot + "</div>";

      if (!panel) {
        panel = turnAI(html, true);
      } else {
        panel.innerHTML = html;
      }
      wirePanel();
    }

    function wirePanel() {
      if (!panel) return;
      panel.querySelectorAll<HTMLButtonElement>(".cc-up-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = btn.closest(".cc-up-row")!.getAttribute("data-id")!;
          uploadDoc(id);
        });
      });
    }

    // start (or re-start) the check on its own once every document is uploaded
    function maybeAutoVerify() {
      if (phase === "verify" || uploadsInFlight > 0) return;
      const allIn = docs.length > 0 && docs.every((d) => d.status === "ready" || d.status === "ok");
      const anyPending = docs.some((d) => d.status === "ready");
      if (!allIn || !anyPending) return;
      const g = runGen;
      setTimeout(() => {
        if (!stale(g) && phase !== "verify" && uploadsInFlight === 0) runVerification().catch(() => {});
      }, reduce ? 1 : 650);
    }

    function fakeName(d: DocRow) {
      return d.id.replace(/-/g, "_") + (d.attempts % 2 === 0 ? ".csv" : ".xlsx");
    }

    async function uploadDoc(id: string) {
      const d = docs.find((x) => x.id === id);
      if (!d || d.status === "checking" || phase === "verify") return;
      uploadsInFlight++;
      try {
        d.attempts++;
        d._file = fakeName(d) + " · uploading…";
        d.status = "empty";
        renderPanel();
        const row = panel!.querySelector<HTMLElement>('.cc-up-row[data-id="' + id + '"]')!;
        row.querySelector(".cc-up-btn")?.setAttribute("disabled", "true");
        const bar = document.createElement("div");
        bar.className = "cc-up-bar";
        bar.innerHTML = "<i></i>";
        row.appendChild(bar);
        await wait(40);
        (bar.firstElementChild as HTMLElement).style.width = "100%";
        await wait(reduce ? 1 : 820);
        d._file = fakeName(d);
        d.status = "ready";
        renderPanel();
      } finally {
        uploadsInFlight--;
      }
      maybeAutoVerify();
    }

    async function runVerification() {
      if (phase === "verify" || uploadsInFlight > 0) return;
      if (!docs.every((d) => d.status === "ready" || d.status === "ok")) return;
      phase = "verify";
      setStatus("Verifying documents");
      renderPanel();

      let flagged = false;
      for (const d of docs) {
        if (d.status !== "ready") continue;
        d.status = "checking";
        renderPanel();
        await wait(reduce ? 1 : 620 + Math.random() * 320);
        if (d.needs && d.attempts <= 1) {
          d.status = "flag";
          d._note = d.needs;
          flagged = true;
        } else {
          d.status = "ok";
          d._note = "";
        }
        renderPanel();
        await wait(reduce ? 1 : 160);
      }

      if (flagged) {
        phase = "upload";
        setStatus("Collecting documents");
        const flags = docs.filter((d) => d.status === "flag");
        await say(
          (flags.length === 1 ? "One file needs a look" : flags.length + " files need a look") +
            " — the note" + (flags.length === 1 ? " is" : "s are") + " on the row" +
            (flags.length === 1 ? "" : "s") + " above."
        );
        renderPanel();
        showFlagActions(flags[0]);
        return;
      }

      await say(
        "All " + docs.length + " documents read cleanly. Sending this to DataTwin to run the full check — nothing leaves as more than an extract."
      );
      await afterDocs();
    }

    function showFlagActions(d: DocRow) {
      const canView = activeScenario === 2 && d.id === "sales-register";
      const card = turnAI(
        '<div class="cc-card cc-flag-acts">' +
          '<div class="cc-card-h">' + esc(d.label) + " — how do you want to handle it?</div>" +
          '<div class="cc-flag-btns">' +
          '<button class="cc-act cc-act-primary" type="button" data-a="reupload">Re-upload a clean file</button>' +
          '<button class="cc-act" type="button" data-a="continue">Continue anyway</button>' +
          (canView ? '<button class="cc-act" type="button" data-a="view">View the flagged rows</button>' : "") +
          "</div></div>",
        true
      );
      card.querySelectorAll<HTMLButtonElement>(".cc-act").forEach((btn) => {
        btn.addEventListener("click", function () {
          const a = btn.getAttribute("data-a");
          if (a === "view") {
            openDocView();
            return;
          }
          card.querySelectorAll<HTMLButtonElement>(".cc-act").forEach((b) => (b.disabled = true));
          card.remove();
          if (a === "reupload") {
            turnUser("I'll re-upload " + d.label.toLowerCase());
            uploadDoc(d.id);
          } else {
            flagContinue(d).catch((e) => {
              if (e !== CANCEL) console.error(e);
            });
          }
        });
      });
    }

    async function flagContinue(d: DocRow) {
      const g = runGen;
      turnUser("Continue — set those rows aside and take the rest");
      d.status = "ok";
      d._note = "flagged rows set aside";
      renderPanel();
      await say(
        "Done — I've set aside the rows where the HSN didn't line up and taken the rest. It won't move the headline number."
      );
      if (stale(g)) return;
      await say(
        "Sending this to DataTwin to run the check — nothing leaves as more than an extract."
      );
      if (stale(g)) return;
      phase = "analysing";
      await afterDocs();
    }

    /* the flagged-rows viewer — a right-side drawer with a mock spreadsheet */
    function openDocView() {
      // drop any drawer that's mid-close so a fresh one can't stack behind it
      document.querySelectorAll(".cc-docview").forEach((n) => n.remove());
      const S = SCN2_SHEET;
      const hasFlags = S.rows.some((r) => r.flag);
      const head =
        "<tr>" + S.cols.map((c) => "<th>" + esc(c) + "</th>").join("") + (hasFlags ? "<th>Flag</th>" : "") + "</tr>";
      const body = S.rows
        .map((r) => {
          const cells = r.cells
            .map((c, ci) => {
              const cellFlag = r.flag && r.flagCol === ci;
              const inner = c ? esc(c) : '<span class="cc-sheet-blank">blank</span>';
              return "<td" + (cellFlag ? ' class="is-flag"' : "") + ">" + inner + "</td>";
            })
            .join("");
          const why = hasFlags
            ? '<td class="cc-sheet-why">' + (r.flag ? esc(r.note || "flagged") : "") + "</td>"
            : "";
          return '<tr' + (r.flag ? ' class="is-flag"' : "") + ">" + cells + why + "</tr>";
        })
        .join("");
      const wrap = document.createElement("div");
      wrap.className = "cc-docview";
      wrap.innerHTML =
        '<div class="cc-docview-scrim"></div>' +
        '<aside class="cc-docview-panel" role="dialog" aria-label="Flagged rows">' +
        '<header class="cc-docview-hd"><div class="cc-docview-title"><b>' + esc(S.file) + "</b><span>" +
        esc(S.sheet) + " · read-only</span></div>" +
        '<button class="cc-docview-x" type="button" aria-label="Close">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>' +
        '<p class="cc-docview-note"><svg class="stroke" width="14" height="14" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>' +
        esc(S.note) + "</p>" +
        '<div class="cc-docview-sheet"><table><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>" +
        "</aside>";
      (document.querySelector(".est-shell") || document.body).appendChild(wrap);
      let closing = false;
      function onEsc(e: KeyboardEvent) {
        if (e.key === "Escape") close();
      }
      function close() {
        if (closing) return;
        closing = true;
        window.removeEventListener("keydown", onEsc);
        wrap.classList.remove("is-open");
        // wait out the slide-out, then take the overlay out of the DOM so it
        // stops intercepting clicks
        setTimeout(() => wrap.remove(), reduce ? 0 : 300);
      }
      wrap.querySelector(".cc-docview-scrim")!.addEventListener("click", close);
      wrap.querySelector(".cc-docview-x")!.addEventListener("click", close);
      window.addEventListener("keydown", onEsc);
      requestAnimationFrame(() => wrap.classList.add("is-open"));
    }

    /* ---------- the "running the check" checklist + saved-to-workspace line ---------- */
    async function runChecklist(steps: string[], cardTitle: string) {
      const card = turnAI(
        '<div class="cc-card"><div class="cc-card-h">' + esc(cardTitle) + '</div><div class="hero-proc-steps">' +
          steps
            .map(
              (s) =>
                '<div class="hero-proc-step"><span class="hero-proc-mark"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span>' +
                esc(s) +
                "</span></div>"
            )
            .join("") +
          "</div></div>",
        true
      );
      const rows = card.querySelectorAll<HTMLElement>(".hero-proc-step");
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.add("active");
        await wait(reduce ? 1 : 600 + Math.random() * 260);
        rows[i].classList.remove("active");
        rows[i].classList.add("done");
      }
      const ref = "DT-" + Math.random().toString(36).slice(2, 6).toUpperCase() + "-" + new Date().getFullYear();
      try {
        console.info("[chat-check] mock submit", { scenario: activeScenario, docs: docs.map((d) => d.id), ref });
      } catch (e) {}
      turnAI(
        '<p class="cc-ref"><svg class="stroke" width="14" height="14" viewBox="0 0 24 24"><use href="#ic-check" /></svg> Saved to your workspace &middot; reference <b>' +
          ref +
          "</b></p>",
        true
      );
      await wait(reduce ? 1 : 480);
    }

    /* ---------- scenario 1 : "send to DataTwin" + score ---------- */
    async function finishUploads() {
      phase = "analysing";
      setStatus("Validating");
      await runChecklist(
        ["Assembling the dataset", "Running validations", "Scoring and pricing exposure", "Packaging the result"],
        "Running the check"
      );
      renderReport(RESULTS[service?.id || "gst"] || RESULTS.gst);
    }

    function renderReport(r: Report) {
      phase = "report";
      setStatus("Results ready", true);
      const bandClass = r.band === "GREEN" ? "is-green" : r.band === "RED" ? "is-red" : "is-yellow";
      const bandLabel = r.band.charAt(0) + r.band.slice(1).toLowerCase(); // "YELLOW" -> "Yellow"
      const gauge = r.breakdown
        .filter((b) => b.count > 0)
        .map((b) => '<span class="cc-seg is-' + b.tone + '" style="flex-grow:' + b.count + '"></span>')
        .join("");
      const legend = r.breakdown
        .map((b) => '<span class="cc-legend-i is-' + b.tone + '"><i></i>' + esc(b.label) + " <b>" + b.count + "</b></span>")
        .join("");
      const metrics = r.metrics
        .map(
          (m) =>
            '<div class="cc-metric' + (m.kind ? " is-" + m.kind : "") + '">' +
            '<span class="cc-metric-k">' + esc(m.label) + "</span>" +
            '<span class="cc-metric-v">' + money(m.value) + "</span></div>"
        )
        .join("");
      const oppWord = r.opportunities === 1 ? "opportunity" : "opportunities";
      const card = turnAI(
        '<div class="cc-report">' +
          '<div class="cc-report-head"><span class="cc-report-eyebrow">' + esc(r.title) + "</span>" +
          '<span class="cc-band ' + bandClass + '">' + esc(bandLabel) + " risk band</span></div>" +
          '<div class="cc-report-score"><span class="cc-score-num" data-to="' + r.score + '">0.00</span>' +
          '<span class="cc-score-cap">Overall score &middot; ' + r.total + " validations executed</span></div>" +
          '<div class="cc-gauge">' + gauge + "</div>" +
          '<div class="cc-legend">' + legend + "</div>" +
          '<div class="cc-metrics">' + metrics + "</div>" +
          '<div class="cc-report-foot"><span class="cc-opp"><b>' + r.opportunities + "</b> potential " + oppWord +
          ' identified</span><span class="cc-report-note">Illustrative &middot; connects to live data at launch</span></div>' +
          "</div>",
        true
      );

      const numEl = card.querySelector<HTMLElement>(".cc-score-num");
      if (numEl) {
        const myGen = runGen;
        const land = () => {
          if (runGen === myGen && numEl.isConnected) numEl.textContent = r.score.toFixed(2);
        };
        if (reduce) {
          land();
        } else {
          const t0 = performance.now();
          const dur = 900;
          const tick = (now: number) => {
            if (runGen !== myGen || !numEl.isConnected) return;
            const p = Math.min(1, (now - t0) / dur);
            numEl.textContent = (r.score * (1 - Math.pow(1 - p, 3))).toFixed(2);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          setTimeout(land, dur + 250); // fallback if rAF is paused (bg/throttled tab)
        }
      }
      offerContact();
    }

    /* ---------- step 5 : optional contact hand-off ---------- */
    async function offerContact() {
      phase = "contact";
      await wait(reduce ? 1 : 560);
      await say("Want the line-by-line and a 30-minute walkthrough? Leave your details and we'll send it over.");
      const card = turnAI(
        '<div class="cc-card"><form class="cc-form" id="ccForm" autocomplete="off">' +
          '<div class="cc-form-eyebrow">Where do we send it?</div>' +
          '<div class="cc-field"><label for="ccName">Name</label><input id="ccName" type="text" placeholder="Your name" /></div>' +
          '<div class="cc-field"><label for="ccEmail">Work email</label><input id="ccEmail" type="email" placeholder="you@company.com" /></div>' +
          '<button class="cc-form-submit" id="ccFormSubmit" type="submit" disabled>Send this to DataTwin</button>' +
          '<p class="cc-form-note">Nothing is shared outside DataTwin, and there is no contract at this stage.</p>' +
          "</form></div>",
        true
      );
      const form = card.querySelector<HTMLFormElement>("#ccForm")!;
      const nm = card.querySelector<HTMLInputElement>("#ccName")!;
      const em = card.querySelector<HTMLInputElement>("#ccEmail")!;
      const sb = card.querySelector<HTMLButtonElement>("#ccFormSubmit")!;
      const validEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v.trim());
      const check = () => (sb.disabled = !(nm.value.trim().length > 1 && validEmail(em.value)));
      nm.addEventListener("input", check);
      em.addEventListener("input", check);
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (sb.disabled) return;
        const who = nm.value.trim().split(" ")[0] || "there";
        [nm, em].forEach((f) => (f.disabled = true));
        sb.outerHTML =
          '<div class="cc-form-ok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>Sent to DataTwin</span></div>';
        setStatus("With our team", true);
        phase = "done";
        await wait(reduce ? 1 : 400);
        await say("Thanks, " + who + " — it's with our team. We'll be in touch within one business day.");
      });
    }

    /* ======================================================================
       DEMO Scenario 2 — "coconut oil"
       ==================================================================== */
    function suggestUser(text: string) {
      return new Promise<void>((resolve) => {
        const row = turnAI(
          '<button class="cc-suggest" type="button">' +
            '<span class="cc-suggest-k">Send as you</span>' +
            "<span>" + esc(text) + "</span>" +
            '<svg class="stroke" width="13" height="13" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg>' +
            "</button>",
          true
        );
        row.querySelector<HTMLButtonElement>(".cc-suggest")!.addEventListener("click", function () {
          if (!row.isConnected) return;
          row.remove();
          turnUser(text);
          resolve();
        });
      });
    }

    async function scenario2() {
      const g = runGen;
      setStatus("Getting started");
      for (const turn of SCN2_CONVO) {
        if (turn.ai) await say(turn.ai);
        else if (turn.user) await suggestUser(turn.user);
        if (stale(g)) return;
      }

      /* documents */
      phase = "upload";
      setStatus("Collecting documents");
      afterDocs = scn2AfterDocs;
      docs = SCN2_DOCS.map((d) => ({ ...d, status: "empty", attempts: 0 }));
      await say("I'll need these four — Excel, CSV or PDF is fine, add them in any order. When they're all in I'll check the classification.");
      if (stale(g)) return;
      renderPanel();
    }

    async function scn2AfterDocs() {
      const g = runGen;
      phase = "analysing";
      setStatus("Checking classification");
      await runChecklist(SCN2_CHECK_STEPS, "Running the classification check");
      if (stale(g)) return;
      await say("Here's what the numbers say.");
      if (stale(g)) return;
      renderExposure();
    }

    function renderExposure() {
      phase = "report";
      setStatus("Results ready", true);
      const E = SCN2_EXPOSURE;
      const proj = E.projection
        .map((p) => '<div class="cc-proj-row"><span>' + esc(p.k) + '</span><b>' + inr(p.v) + "</b></div>")
        .join("");
      const locked = SCN2_LOCKED
        .map(
          (f) =>
            '<div class="cc-lock-row"><span>' + esc(f.label) + '</span><span class="cc-lock-amt">' + esc(f.amount) + "</span></div>"
        )
        .join("");
      turnAI(
        '<div class="cc-exposure">' +
          '<div class="cc-exposure-hd">' +
          '<span class="cc-exposure-eyebrow">' + esc(E.eyebrow) + "</span>" +
          '<span class="cc-band is-amber">' + esc(E.band) + "</span></div>" +
          '<div class="cc-exposure-big"><span class="cc-exposure-num" data-to="' + E.perMonth + '">' + inr(0) + "</span>" +
          '<span class="cc-exposure-cap">' + esc(E.headline) + "</span></div>" +
          '<p class="cc-exposure-sub">' + esc(E.sub) + "</p>" +
          '<div class="cc-proj"><div class="cc-proj-h">At your current run-rate</div>' + proj + "</div>" +
          '<p class="cc-report-note">' + esc(E.note) + "</p>" +
          '<div class="cc-locked"><div class="cc-lock-list">' + locked + "</div>" +
          '<div class="cc-lock-over"><span class="cc-lock-ic"><svg class="stroke" width="15" height="15" viewBox="0 0 24 24"><use href="#ic-lock" /></svg></span>' +
          "<p>" + esc(SCN2_LOCK_NOTE) + "</p></div></div>" +
          "</div>",
        true
      );

      // count-up on the exposure figure
      const numEl = document.querySelector<HTMLElement>(".cc-exposure-num");
      if (numEl) {
        const myGen = runGen;
        const land = () => { if (runGen === myGen && numEl.isConnected) numEl.textContent = inr(E.perMonth); };
        if (reduce) land();
        else {
          const t0 = performance.now();
          const tick = (now: number) => {
            if (runGen !== myGen || !numEl.isConnected) return;
            const p = Math.min(1, (now - t0) / 1100);
            numEl.textContent = inr(Math.round(E.perMonth * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          setTimeout(land, 1400);
        }
      }
      scn2Contact();
    }

    async function scn2Contact() {
      phase = "contact";
      await wait(reduce ? 1 : 600);
      await say("To turn this into the exact code change and a refund claim, the DataTwin team needs to review your file. Leave your details and they'll take it from here.");
      const card = turnAI(
        '<div class="cc-card"><form class="cc-form" id="ccForm2" autocomplete="off">' +
          '<div class="cc-form-eyebrow">Connect with the DataTwin team</div>' +
          '<div class="cc-field"><label for="cc2Name">Name</label><input id="cc2Name" type="text" placeholder="Your name" /></div>' +
          '<div class="cc-field"><label for="cc2Email">Work email</label><input id="cc2Email" type="email" placeholder="you@company.com" /></div>' +
          '<div class="cc-field"><label for="cc2Co">Company</label><input id="cc2Co" type="text" placeholder="Your business" /></div>' +
          '<button class="cc-form-submit" id="cc2Submit" type="submit" disabled>Send this to DataTwin</button>' +
          '<p class="cc-form-note">Read-only. Nothing changes in your filings, and there is no contract at this stage.</p>' +
          "</form></div>",
        true
      );
      const form = card.querySelector<HTMLFormElement>("#ccForm2")!;
      const nm = card.querySelector<HTMLInputElement>("#cc2Name")!;
      const em = card.querySelector<HTMLInputElement>("#cc2Email")!;
      const sb = card.querySelector<HTMLButtonElement>("#cc2Submit")!;
      const ok = (v: string) => /^\S+@\S+\.\S+$/.test(v.trim());
      const chk = () => (sb.disabled = !(nm.value.trim().length > 1 && ok(em.value)));
      nm.addEventListener("input", chk);
      em.addEventListener("input", chk);
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (sb.disabled) return;
        const who = nm.value.trim().split(" ")[0] || "there";
        [nm, em, card.querySelector<HTMLInputElement>("#cc2Co")!].forEach((f) => (f.disabled = true));
        sb.outerHTML =
          '<div class="cc-form-ok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>Sent to DataTwin</span></div>';
        setStatus("With our team", true);
        phase = "done";
        await wait(reduce ? 1 : 420);
        await say(
          "Thanks, " + who + " — that's with our team. The next step is a short review call and an engagement agreement; that part is handled offline. Once it's signed, the full breakdown appears here automatically — you don't need to do anything."
        );
        await wait(reduce ? 1 : 500);
        const simRow = turnAI(
          '<button class="cc-sim" type="button"><span class="cc-sim-tag">Demo</span>' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
            "Simulate: agreement signed<span>real flow updates on its own</span></button>",
          true
        );
        simRow.querySelector<HTMLButtonElement>(".cc-sim")!.addEventListener("click", function () {
          simRow.remove();
          turnUser("[agreement signed]");
          scn2Reveal().catch((err) => { if (err !== CANCEL) console.error(err); });
        });
      });
    }

    async function scn2Reveal() {
      const g = runGen;
      setStatus("Agreement signed", true);
      await wait(reduce ? 1 : 300);
      if (stale(g)) return;
      await say("Agreement's in. Here's the full picture.");
      if (stale(g)) return;
      const R = SCN2_REVEAL;
      const worth = R.worth
        .map((w) => '<div class="cc-worth-row"><span>' + esc(w.k) + '</span><b>' + esc(w.v) + "</b></div>")
        .join("");
      turnAI(
        '<div class="cc-reveal">' +
          '<div class="cc-reveal-eyebrow">Classification correction</div>' +
          '<div class="cc-reveal-cmp">' +
          '<div class="cc-reveal-col is-now"><span class="cc-reveal-k">Today</span>' +
          "<b>" + esc(R.today.product) + "</b>" +
          '<span class="cc-reveal-meta">HSN ' + esc(R.today.hsn) + " &middot; GST <em>" + esc(R.today.rate) + "</em></span></div>" +
          '<svg class="cc-reveal-arrow stroke" width="18" height="18" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg>' +
          '<div class="cc-reveal-col is-fix"><span class="cc-reveal-k">Corrected</span>' +
          "<b>" + esc(R.corrected.product) + "</b>" +
          '<span class="cc-reveal-meta">HSN ' + esc(R.corrected.hsn) + " &middot; GST <em>" + esc(R.corrected.rate) + "</em></span></div>" +
          "</div>" +
          '<div class="cc-reveal-adj"><span class="cc-reveal-k">The adjustment</span><p>' + esc(R.adjustment) + "</p></div>" +
          '<div class="cc-reveal-worth"><span class="cc-reveal-k">What it’s worth</span>' + worth +
          '<div class="cc-worth-refund">plus <b>' + esc(R.refund) + "</b> " + esc(R.refundNote) + "</div></div>" +
          "</div>",
        true
      );
      await wait(reduce ? 1 : 400);
      if (stale(g)) return;
      await say("The team will send the filing pack — the revised product master, the label wording, and the GSTR amendments ready to lodge.");
    }

    /* ---------- DEMO : scenario placeholder + switcher ---------- */
    async function scenarioPending(label: string) {
      const g = runGen;
      await wait(300);
      if (stale(g)) return;
      await say(
        "This is the " + label + " scenario. Its conversation is still being designed — " +
          "switch to Scenario 1 above to see the working flow."
      );
      if (stale(g)) return;
      turnAI(
        '<div class="cc-card cc-stub"><div class="cc-card-h">' + esc(label) + " scenario</div>" +
          '<p>Placeholder. The real flow drops in here once it’s specified.</p></div>',
        true
      );
    }
    function runScenario(n: number) {
      runGen++;
      activeScenario = n;
      log.innerHTML = "";
      resetState();
      document.querySelectorAll<HTMLButtonElement>("#ccScenarios .cc-demo-b").forEach((b) => {
        b.classList.toggle("is-on", b.getAttribute("data-scn") === String(n));
      });
      const run = n === 1 ? scenario1() : n === 2 ? scenario2() : scenarioPending("Demo");
      Promise.resolve(run).catch((err) => { if (err !== CANCEL) console.error(err); });
    }
    const scenarioBar = document.getElementById("ccScenarios");
    if (scenarioBar) {
      scenarioBar.addEventListener("click", function (e) {
        const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".cc-demo-b");
        if (btn) runScenario(Number(btn.getAttribute("data-scn")));
      });
    }

    /* ---------- composer ---------- */
    if (cForm && cInput) {
      cForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const val = cInput.value.trim();
        if (!val) return;
        cInput.value = "";
        const gc = runGen;
        if (activeScenario === 3) {
          turnUser(val);
          await wait(reduce ? 150 : 500).catch(() => {});
          if (gc === runGen) bubbleAI("That scenario isn’t wired up yet — switch to Scenario 1 or 2.");
          return;
        }
        if (activeScenario === 2) {
          turnUser(val);
          const t = typingTurn();
          await wait(reduce ? 200 : 650).catch(() => {});
          if (gc !== runGen) return;
          t.remove();
          bubbleAI(answerFor(val) + " Use the steps above to keep the walkthrough moving.");
          return;
        }
        const g = runGen;
        await introDone; // don't race the opening lines
        if (g !== runGen) return;
        turnUser(val);
        if (phase === "problem") {
          await handleProblem(val);
          return;
        }
        let ans = answerFor(val);
        if (phase === "service") ans += " Pick a check above to keep going.";
        else if (phase === "upload") ans += " Add the documents above when you're ready.";
        else if (phase === "verify") ans += " Give me a moment to finish verifying.";
        await say(ans);
      });
    }

    /* start on the working scenario */
    runScenario(1);
  }, []);

  return null;
}
