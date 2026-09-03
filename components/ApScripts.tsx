"use client";

/* eslint-disable */
// Accounts Payable page behaviour. Self-contained reveal-on-scroll pass, the
// same one the DARP / Security / How-AI pages use:
//  - reveal [data-reveal] blocks (and their .dfw-rise children) as they enter
//  - a timeout + scroll failsafe so nothing stays at opacity:0 if
//    IntersectionObserver never fires (background tab, reduced-motion, etc.)
// All motion on the page itself is CSS and gated on prefers-reduced-motion.
// Attaches to server-rendered markup by class; a module-level `wired` flag
// keeps it per-page and once-only.

import { useEffect } from "react";

let wired = false;

export default function ApScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

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
  }, []);

  return null;
}
