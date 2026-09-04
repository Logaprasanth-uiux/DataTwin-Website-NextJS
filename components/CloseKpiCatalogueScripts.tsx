"use client";

/* eslint-disable */
// Close KPI Catalogue page behaviour. Two things, both kept close to the
// original vanilla JS from the static kpi-catalogue.html:
//   1. the reveal-on-scroll pass every ported page uses (reveal [data-reveal]
//      blocks and their .dfw-rise children, with a timeout + scroll failsafe)
//   2. the catalogue filter: domain buttons + free-text search over the 204
//      rows, updating the visible count and the "no match" note
// Module-level `wired` keeps it per-page and once-only.

import { useEffect } from "react";

let wired = false;

export default function CloseKpiCatalogueScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    /* ---------- reveal-on-scroll ---------- */
    var blocks = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal]")
    );

    function reveal(el: Element) {
      el.classList.add("in");
      el.querySelectorAll(".dfw-rise").forEach(function (r) {
        r.classList.add("in");
      });
    }

    var reduce =
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      blocks.forEach(reveal);
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              reveal(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      blocks.forEach(function (b) {
        io.observe(b);
      });

      function sweep() {
        blocks.forEach(function (b) {
          if (b.getBoundingClientRect().top < window.innerHeight * 0.92)
            reveal(b);
        });
      }
      window.addEventListener("scroll", sweep, { passive: true });
      window.addEventListener("resize", sweep);
      setTimeout(function () {
        blocks.forEach(reveal);
      }, 2200);
      setTimeout(sweep, 400);
    }

    /* ---------- catalogue filter + search ---------- */
    var rows = Array.prototype.slice.call(
      document.querySelectorAll("#ckc-tb tr")
    ) as HTMLElement[];
    var btns = Array.prototype.slice.call(
      document.querySelectorAll(".ckc-filt button")
    ) as HTMLElement[];
    var q = document.getElementById("ckc-q") as HTMLInputElement | null;
    var fc = document.getElementById("ckc-fc");
    var none = document.getElementById("ckc-none");
    var dom = "all";

    if (!rows.length || !q || !fc || !none) return;

    function apply() {
      var term = (q!.value || "").trim().toLowerCase();
      var shown = 0;
      for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        var ok =
          (dom === "all" || r.getAttribute("data-domain") === dom) &&
          (!term || (r.getAttribute("data-text") || "").indexOf(term) > -1);
        r.hidden = !ok;
        if (ok) shown++;
      }
      fc!.textContent = shown + (shown === 1 ? " metric" : " metrics");
      none!.hidden = shown !== 0;
    }

    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        dom = b.getAttribute("data-domain") || "all";
        btns.forEach(function (x) {
          x.setAttribute("aria-pressed", String(x === b));
        });
        apply();
      });
    });
    q.addEventListener("input", apply);
    apply();
  }, []);

  return null;
}
