"use client";

/* eslint-disable */
// /get-estimate behaviour — a front-end MOCK, same spirit as GstChatScripts.
//  - hydrate the recap block from sessionStorage (`dt-estimate-context`, set by
//    the homepage hero flow in components/HomeScripts.tsx)
//  - theme toggle (shared `dt-theme` key)
//  - contact form: enable submit when name + a valid work email are present;
//    on submit collapse to a confirmation (no network call)
//  - composer: append the message and a canned acknowledgement
// Attaches to the server-rendered markup by id.

import { useEffect } from "react";
import { USE_CASES } from "@/components/homeMatch";
import { answerFor } from "@/components/estimateAnswers";

let wired = false;

export default function EstimateChatScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    // If the page comes back from the bfcache (browser Back), reload so it
    // starts fresh rather than showing a half-finished form / thread.
    window.addEventListener("pageshow", function (e) {
      if ((e as PageTransitionEvent).persisted) window.location.reload();
    });

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function esc(str: string) {
      return String(str).replace(/[&<>"']/g, function (c) {
        return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as any)[c];
      });
    }
    function wait(ms: number) {
      return new Promise<void>(function (res) {
        setTimeout(res, ms);
      });
    }

    /* ---------- theme toggle ---------- */
    var themeToggle = document.getElementById("estThemeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        var isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (isLight) {
          document.documentElement.removeAttribute("data-theme");
          try {
            localStorage.setItem("dt-theme", "dark");
          } catch (e) {}
        } else {
          document.documentElement.setAttribute("data-theme", "light");
          try {
            localStorage.setItem("dt-theme", "light");
          } catch (e) {}
        }
      });
    }

    /* ---------- recap from the homepage hand-off ----------
       One-shot: the hero flow drops a context here right before navigating, we
       read it once and clear it. Every other CTA (and any reload) starts fresh.
       A stale context (> 15 min, e.g. left over from an earlier session) is
       ignored too. */
    var ctx: any = null;
    try {
      ctx = JSON.parse(sessionStorage.getItem("dt-estimate-context") || "null");
      sessionStorage.removeItem("dt-estimate-context");
    } catch (e) {}

    var fresh = ctx && typeof ctx.ts === "number" && Date.now() - ctx.ts < 15 * 60 * 1000;

    if (fresh && ctx.problem) {
      var recap = document.getElementById("estRecap");
      var problemEl = document.getElementById("estRecapProblem");
      var chipsEl = document.getElementById("estRecapChips");
      if (problemEl) problemEl.textContent = "“" + ctx.problem + "”";
      if (chipsEl && Array.isArray(ctx.matches)) {
        var chosen = USE_CASES.filter(function (u) {
          return ctx.matches.indexOf(u.id) > -1;
        });
        chipsEl.innerHTML = chosen
          .map(function (u) {
            return (
              '<span class="est-recap-chip"><svg class="icon stroke"><use href="' +
              u.icon +
              '" /></svg>' +
              esc(u.label) +
              "</span>"
            );
          })
          .join("");
      }
      if (recap) recap.hidden = false;
    } else {
      var intro = document.getElementById("estIntro");
      if (intro) intro.hidden = false;
    }

    /* ---------- thread bubbles ---------- */
    var thread = document.getElementById("estThread")!;
    function addUser(text: string) {
      var row = document.createElement("div");
      row.className = "hero-msg hero-msg-user";
      row.innerHTML = '<div class="hero-user-bubble">' + esc(text) + "</div>";
      thread.appendChild(row);
      row.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
    }
    function addAI(text: string) {
      var row = document.createElement("div");
      row.className = "hero-msg";
      row.innerHTML =
        '<div class="hero-ai-avatar" aria-hidden="true">DT</div>' +
        '<div class="hero-msg-body"><p class="hero-msg-intro">' +
        esc(text) +
        "</p></div>";
      thread.appendChild(row);
      row.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
    }
    function addTyping() {
      var row = document.createElement("div");
      row.className = "hero-msg";
      row.innerHTML =
        '<div class="hero-ai-avatar" aria-hidden="true">DT</div>' +
        '<div class="hero-msg-body"><span class="est-typing"><span></span><span></span><span></span></span></div>';
      thread.appendChild(row);
      row.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
      return row;
    }

    /* ---------- contact form ---------- */
    var form = document.getElementById("estForm") as HTMLFormElement | null;
    var name = document.getElementById("estName") as HTMLInputElement | null;
    var company = document.getElementById("estCompany") as HTMLInputElement | null;
    var email = document.getElementById("estEmail") as HTMLInputElement | null;
    var phone = document.getElementById("estPhone") as HTMLInputElement | null;
    var submit = document.getElementById("estSubmit") as HTMLButtonElement | null;
    var status = document.getElementById("estStatus");
    var submitted = false;

    function validEmail(v: string) {
      return /^\S+@\S+\.\S+$/.test(v.trim());
    }
    function check() {
      if (!submit || !name || !email) return;
      submit.disabled = !(name.value.trim().length > 1 && validEmail(email.value));
    }
    [name, email, company, phone].forEach(function (f) {
      if (f) f.addEventListener("input", check);
    });

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (submitted || !name || !email || (submit && submit.disabled)) return;
        submitted = true;
        var who = name.value.trim().split(" ")[0] || "there";

        [name, company, email, phone].forEach(function (f) {
          if (f) f.disabled = true;
        });
        if (submit) {
          submit.disabled = true;
          submit.outerHTML =
            '<div class="est-form-ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>Sent to DataTwin</span></div>';
        }
        if (status) {
          status.classList.add("done");
          var txt = status.querySelector(".txt");
          if (txt) txt.textContent = "With our team";
        }
        wait(reduce ? 0 : 400).then(function () {
          addAI(
            "Thanks, " +
              who +
              " — your estimate request is in. We'll come back with a number and a 30-minute walkthrough within one business day."
          );
        });
      });
    }

    /* ---------- composer ---------- */
    var cForm = document.getElementById("estComposerForm") as HTMLFormElement | null;
    var cInput = document.getElementById("estComposerInput") as HTMLInputElement | null;
    if (cForm && cInput) {
      cForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var val = cInput!.value.trim();
        if (!val) return;
        cInput!.value = "";
        addUser(val);
        var pending = addTyping();
        wait(reduce ? 200 : 650 + Math.random() * 500).then(function () {
          pending.remove();
          addAI(answerFor(val));
        });
      });
    }
  }, []);

  return null;
}
