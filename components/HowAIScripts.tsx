"use client";

/* eslint-disable */
// "How AI is used" page behaviour. Same small, self-contained reveal-on-scroll
// pass as the DARP and Security pages:
//  - reveal-on-scroll for [data-reveal] blocks (and their .dfw-rise children),
//    with a timeout failsafe so nothing stays hidden if IntersectionObserver
//    never fires (e.g. a background tab)
// No FAQ on this page, so the accordion block is omitted. The orchestration
// wire's dataflow pulse is pure CSS. Attaches to the server-rendered markup by
// class; a module-level `wired` flag keeps it per-page and once-only.

import { useEffect } from "react";

let wired = false;

export default function HowAIScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    /* ============================= REVEAL ON SCROLL ============================= */
    (function () {
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
        return;
      }

      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              reveal(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      blocks.forEach(function (b) {
        io.observe(b);
      });

      // failsafe: reveal everything a couple of seconds after load, and on
      // scroll/resize once it is near the viewport, so nothing stays at
      // opacity:0 if the observer never fires.
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
    })();
  }, []);

  return null;
}
