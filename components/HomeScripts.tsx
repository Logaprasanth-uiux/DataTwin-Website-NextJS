"use client";

/* eslint-disable */
// Homepage-only behaviour, ported close to the original vanilla JS:
//  - the hero "composer" input (open/close, rotating placeholder, submit)
//  - section reveal-on-scroll (IntersectionObserver + scroll sweep)
//  - the "What happens next" ruler timeline (scroll-linked on mobile)
// Attaches to the server-rendered markup by id/class.

import { useEffect } from "react";

let wired = false;

export default function HomeScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    /* ============================= HERO AI COMPOSER ============================= */
    (function () {
      var wrap = document.querySelector(".hero-composer") as HTMLElement | null;
      var box = document.getElementById("heroComposerBox");
      var input = document.getElementById("heroMainInput") as HTMLInputElement | null;
      var btn = document.getElementById("heroMainBtn");
      if (!wrap || !box || !input || !btn) return;

      var trustRow = document.querySelector(".trust-row") as HTMLElement | null;

      function revealComposer() {
        var vh = window.innerHeight;
        var headerH = 88;
        var bottomEl = trustRow || wrap!;
        var overhang = bottomEl.getBoundingClientRect().bottom - (vh - 16);
        var delta = overhang > 0 ? overhang + 8 : 0;
        var maxDelta = wrap!.getBoundingClientRect().top - headerH;
        if (delta > maxDelta) delta = Math.max(0, maxDelta);
        if (delta > 8) window.scrollBy({ top: delta, behavior: "smooth" });
      }

      function openBox() {
        box!.classList.add("open");
        setTimeout(revealComposer, 300);
      }
      function closeBox() {
        box!.classList.remove("open");
      }

      input.addEventListener("focus", openBox);
      input.addEventListener("click", openBox);
      document.addEventListener("click", function (e) {
        if (!wrap!.contains(e.target as Node)) closeBox();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeBox();
      });

      wrap.querySelectorAll(".hero-suggestion").forEach(function (s) {
        s.addEventListener("click", function () {
          input!.value = s.textContent || "";
          input!.focus();
        });
      });

      function submitProblem() {
        window.location.hash = "cta";
      }
      btn.addEventListener("click", submitProblem);
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          submitProblem();
        }
      });

      var PROMPTS = [
        "How much are we losing to duplicate payments?",
        "Cash is sitting unapplied and nobody knows why…",
        "Commission calculations are wrong every quarter…",
        "We keep overpaying distributor rebate claims…",
        "Our month-end close takes eleven days…",
        "GST input credit never ties to the books…",
      ];
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        input.setAttribute("placeholder", PROMPTS[0]);
      } else {
        var pi = 0;
        var TYPE_MS = 20,
          HOLD_MS = 1300,
          FADE_MS = 240;
        var paused = function () {
          return document.activeElement === input || input!.value;
        };

        function typePhrase() {
          if (paused()) {
            setTimeout(typePhrase, 900);
            return;
          }
          var full = PROMPTS[pi],
            ci = 0;
          input!.classList.remove("ph-hide");
          (function type() {
            if (paused()) {
              input!.setAttribute("placeholder", "");
              setTimeout(typePhrase, 900);
              return;
            }
            ci++;
            input!.setAttribute("placeholder", full.slice(0, ci));
            if (ci < full.length) {
              setTimeout(type, TYPE_MS);
              return;
            }
            setTimeout(function () {
              input!.classList.add("ph-hide");
              setTimeout(function () {
                pi = (pi + 1) % PROMPTS.length;
                input!.setAttribute("placeholder", "");
                typePhrase();
              }, FADE_MS);
            }, HOLD_MS);
          })();
        }

        setTimeout(function () {
          input!.classList.add("ph-hide");
          setTimeout(function () {
            pi = 1 % PROMPTS.length;
            input!.setAttribute("placeholder", "");
            typePhrase();
          }, FADE_MS);
        }, HOLD_MS + 300);
      }
    })();

    /* ============================= SECTION REVEAL ON SCROLL ============================= */
    (function () {
      var parts = document.querySelectorAll(
        "#recoverable .recov-list, #recoverable .recov-close, #darp .darp-track, #outcomes .outcomes"
      );
      var wraps = document.querySelectorAll(
        "main > section:not(.hero) > .wrap, footer > .wrap"
      );
      var reduce =
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        parts.forEach(function (t) {
          t.classList.add("in");
        });
        return;
      }

      var partsIO = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              partsIO.unobserve(e.target);
            }
          });
        },
        { threshold: 0.25, rootMargin: "0px 0px -6% 0px" }
      );
      parts.forEach(function (t) {
        partsIO.observe(t);
      });

      wraps.forEach(function (el) {
        if (el.getBoundingClientRect().top >= window.innerHeight * 0.9)
          el.classList.add("reveal-pending");
      });
      function sweep() {
        var pending = document.querySelectorAll(".reveal-pending:not(.reveal-in)");
        for (var i = 0; i < pending.length; i++) {
          if (pending[i].getBoundingClientRect().top < window.innerHeight * 0.9)
            pending[i].classList.add("reveal-in");
        }
        if (!document.querySelector(".reveal-pending:not(.reveal-in)")) {
          window.removeEventListener("scroll", sweep);
          window.removeEventListener("resize", sweep);
        }
      }
      window.addEventListener("scroll", sweep, { passive: true });
      window.addEventListener("resize", sweep);
      setTimeout(sweep, 600);
    })();

    /* ============================= WHAT HAPPENS NEXT — ruler timeline ============================= */
    (function () {
      var tl = document.querySelector("#next .timeline") as HTMLElement | null;
      if (!tl) return;
      var track = tl.querySelector(".tl-track") as HTMLElement;
      var steps = ([] as HTMLElement[]).slice.call(tl.querySelectorAll(".tl-step"));
      var nodes = steps.map(function (s) {
        return s.querySelector(".tl-node") as HTMLElement;
      });
      var vertMq = window.matchMedia("(max-width: 780px)");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        steps.forEach(function (s) {
          s.classList.add("active");
        });
        tl.classList.add("started");
        tl.style.setProperty("--p", "1");
        return;
      }

      function layoutTrack() {
        var box = tl!.getBoundingClientRect();
        var a = nodes[0].getBoundingClientRect();
        var b = nodes[nodes.length - 1].getBoundingClientRect();
        if (vertMq.matches) {
          track.style.left = "";
          track.style.right = "";
          track.style.top = a.top + a.height / 2 - box.top + "px";
          track.style.bottom = "auto";
          track.style.height = b.top + b.height / 2 - (a.top + a.height / 2) + "px";
        } else {
          track.style.top = "";
          track.style.bottom = "";
          track.style.height = "";
          track.style.left = a.left + a.width / 2 - box.left + "px";
          track.style.right = box.right - (b.left + b.width / 2) + "px";
        }
      }

      var maxP = 0;
      function update() {
        if (!vertMq.matches) return;
        var tr = track.getBoundingClientRect();
        if (tr.height === 0) return;
        var p = (window.innerHeight * 0.52 - tr.top) / tr.height;
        p = Math.max(0, Math.min(1, p));
        if (p < maxP) p = maxP;
        else maxP = p;
        tl!.style.setProperty("--p", p.toFixed(4));
        if (p > 0.002) tl!.classList.add("started");
        for (var i = 0; i < nodes.length; i++) {
          var n = nodes[i].getBoundingClientRect();
          var np = (n.top + n.height / 2 - tr.top) / tr.height;
          if (p >= np - 0.03) steps[i].classList.add("active");
        }
      }

      var ticking = false;
      function onScroll() {
        if (ticking || !vertMq.matches) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          update();
        });
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", function () {
        layoutTrack();
        update();
      });
      window.addEventListener("load", function () {
        layoutTrack();
        update();
      });
      if (vertMq.addEventListener)
        vertMq.addEventListener("change", function () {
          layoutTrack();
          update();
        });
      layoutTrack();
      update();
    })();
  }, []);

  return null;
}
