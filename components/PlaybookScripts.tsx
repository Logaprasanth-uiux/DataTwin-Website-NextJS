"use client";

/* eslint-disable */
// Playbook-only behaviour, ported close to the original vanilla JS:
//  - section reveal-on-scroll (the shared IntersectionObserver + scroll sweep,
//    same IIFE as index.html — only the `wraps` lift runs on this route, the
//    `parts` selectors match nothing here)
// Attaches to the server-rendered markup by class.
//
// The original page's <script> also carries the theme / drawer / mega-menu
// IIFEs (handled site-wide by ChromeScripts), the hero AI composer and the
// "what happens next" ruler timeline — neither has markup on this page, so
// they are left out rather than copied in as dead code.

import { useEffect } from "react";

let wired = false;

export default function PlaybookScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

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

      /* section-level first-visit entrance lift — scroll-driven, with a load failsafe */
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
  }, []);

  return null;
}
