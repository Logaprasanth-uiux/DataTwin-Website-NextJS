"use client";

/* eslint-disable */
// Security page behaviour. Same small, self-contained pair as the DARP page:
//  - reveal-on-scroll for [data-reveal] blocks (and their .dfw-rise children),
//    with a timeout failsafe so nothing stays hidden if IntersectionObserver
//    never fires (e.g. a background tab)
//  - the FAQ accordion (.dfw-q, shared markup family)
// Attaches to the server-rendered markup by class. Kept as its own file rather
// than reusing DarpFrameworkScripts so the module-level `wired` flag is
// per-page.

import { useEffect } from "react";

let wired = false;

export default function SecurityScripts() {
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

    /* ============================= FAQ ACCORDION ============================= */
    (function () {
      document.querySelectorAll(".dfw-q .dfw-q-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var q = btn.parentElement;
          if (q) q.classList.toggle("open");
        });
      });
    })();
  }, []);

  return null;
}
