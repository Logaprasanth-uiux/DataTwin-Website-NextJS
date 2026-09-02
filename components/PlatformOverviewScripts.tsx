"use client";

/* eslint-disable */
// Platform-overview-only behaviour, ported close to the original vanilla JS:
//  - section reveal-on-scroll (the shared IntersectionObserver + scroll sweep,
//    same IIFE as index.html — only the `wraps` lift does anything on this route)
//  - the "acquire · process · report" pipeline: count-ups, growing bars/sparks,
//    the auto-rotating reporting lens, and per-station reveal
// Attaches to the server-rendered markup by id/class.
//
// The original page's <script> also carries the theme / drawer / mega-menu
// IIFEs (already handled site-wide by ChromeScripts), the hero AI composer
// (this page has no composer — that logic lives in HomeScripts) and the
// "what happens next" ruler timeline (no #next section here). Those are left
// out rather than copied in as dead code.

import { useEffect } from "react";

let wired = false;

export default function PlatformOverviewScripts() {
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

    /* ============================= PIPELINE — acquire · process · report ============================= */
    (function () {
      var root = document.getElementById("pipeline");
      if (!root) return;
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var hasIO = "IntersectionObserver" in window;
      root.classList.add("js");

      /* ---- number parsing / count-up / bar growth ---- */
      function parseNum(txt: string) {
        var clean = String(txt).replace(/,/g, "");
        var m = clean.match(/-?\d+(\.\d+)?/);
        if (!m) return null;
        var i = clean.indexOf(m[0]);
        return {
          prefix: clean.slice(0, i),
          suffix: clean.slice(i + m[0].length),
          value: parseFloat(m[0]),
          dec: m[1] ? m[1].length - 1 : 0,
        };
      }
      function fmt(n: number, dec: number) {
        var s = dec > 0 ? n.toFixed(dec) : String(Math.round(n));
        var p = s.split(".");
        p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return p.join(".");
      }
      function countUp(el: any) {
        var spec = el._spec;
        if (!spec) return;
        if (reduce) {
          el.textContent = spec.prefix + fmt(spec.value, spec.dec) + spec.suffix;
          return;
        }
        var t0 = performance.now(),
          dur = 950;
        (function step(t: number) {
          var k = Math.min(1, (t - t0) / dur);
          k = 1 - Math.pow(1 - k, 3);
          el.textContent = spec.prefix + fmt(spec.value * k, spec.dec) + spec.suffix;
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      }
      function grow(el: any) {
        var target = el._target;
        if (target == null) return;
        if (reduce) {
          el.style[el._dim] = target;
          return;
        }
        el.style[el._dim] = "0%";
        void el.offsetWidth;
        requestAnimationFrame(function () {
          el.style[el._dim] = target;
        });
      }
      function animateWithin(scope: Element | null) {
        if (!scope) return;
        [].forEach.call(scope.querySelectorAll("[data-count]"), countUp);
        [].forEach.call(scope.querySelectorAll(".pw-bar-fill, .pw-stack span"), grow);
        [].forEach.call(scope.querySelectorAll(".pw-spark i"), grow);
      }

      [].forEach.call(
        root.querySelectorAll(".pw-bar-fill, .pw-stack span"),
        function (el: any) {
          el._dim = "width";
          el._target = el.style.width || "0%";
          if (!reduce) el.style.width = "0%";
        }
      );
      [].forEach.call(root.querySelectorAll(".pw-spark i"), function (el: any) {
        el._dim = "height";
        el._target = el.style.height || "0%";
        if (!reduce) el.style.height = "0%";
      });
      [].forEach.call(root.querySelectorAll("[data-count]"), function (el: any) {
        el._spec = parseNum(el.textContent);
        if (el._spec && !reduce)
          el.textContent = el._spec.prefix + fmt(0, el._spec.dec) + el._spec.suffix;
      });

      /* ---- lens 03: manual switch + auto-rotate with a progress bar ---- */
      var lens = root.querySelector(".pw-lens");
      var tabs: HTMLElement[] = lens
        ? ([] as HTMLElement[]).slice.call(lens.querySelectorAll('[role="tab"]'))
        : [];
      var progFill = root.querySelector(".pw-lens-progress i") as HTMLElement | null;
      var lensQ = root.querySelector(".pw-lens-q");
      var DWELL = 7000;
      var cur = 0,
        timer: ReturnType<typeof setTimeout> | null = null,
        paused = false,
        onScreen = false,
        elapsed = 0,
        startedAt = 0;

      function currentView() {
        return tabs.length
          ? document.getElementById(tabs[cur].getAttribute("aria-controls") || "")
          : null;
      }

      function beginDwell() {
        if (timer) clearTimeout(timer);
        timer = null;
        if (reduce || !progFill || tabs.length < 2 || paused || !onScreen) return;
        var remain = Math.max(400, DWELL - elapsed);
        startedAt = Date.now();
        progFill.style.transition = "none";
        progFill.style.width = ((elapsed / DWELL) * 100).toFixed(2) + "%";
        void progFill.offsetWidth;
        requestAnimationFrame(function () {
          if (paused || !onScreen) return;
          progFill!.style.transition = "width " + remain + "ms linear";
          progFill!.style.width = "100%";
        });
        timer = setTimeout(function () {
          showTab((cur + 1) % tabs.length);
        }, remain);
      }
      function freeze() {
        if (timer) clearTimeout(timer);
        timer = null;
        if (startedAt) elapsed += Date.now() - startedAt;
        startedAt = 0;
        if (progFill) {
          progFill.style.transition = "none";
          progFill.style.width =
            Math.min(100, (elapsed / DWELL) * 100).toFixed(2) + "%";
        }
      }
      function showTab(i: number, manual?: boolean) {
        cur = i;
        elapsed = 0;
        tabs.forEach(function (t, k) {
          var on = k === i;
          t.setAttribute("aria-selected", on ? "true" : "false");
          var v = document.getElementById(t.getAttribute("aria-controls") || "");
          if (v) v.classList.toggle("is-active", on);
        });
        if (lensQ && (tabs[i] as HTMLElement).dataset.q)
          lensQ.textContent = (tabs[i] as HTMLElement).dataset.q || "";
        animateWithin(currentView());
        beginDwell();
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener("click", function () {
          showTab(i, true);
        });
      });

      var zone = lens ? lens.parentElement : null; /* wrapper holding lens + views + foot */
      if (zone) {
        zone.addEventListener("pointerenter", function () {
          paused = true;
          freeze();
        });
        zone.addEventListener("pointerleave", function () {
          paused = false;
          beginDwell();
        });
        zone.addEventListener("focusin", function () {
          paused = true;
          freeze();
        });
        zone.addEventListener("focusout", function () {
          paused = false;
          beginDwell();
        });
      }

      /* ---- reveal on scroll ---- */
      var stations = ([] as HTMLElement[]).slice.call(
        root.querySelectorAll(".pw-station")
      );
      function revealStation(s: Element) {
        s.classList.add("in");
        var scope = s.querySelector(".pw-view.is-active") || s;
        setTimeout(function () {
          animateWithin(scope);
        }, 140);
      }
      if (reduce || !hasIO) {
        stations.forEach(function (s) {
          s.classList.add("in");
          animateWithin(s.querySelector(".pw-view.is-active") || s);
        });
        return;
      }
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              revealStation(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.16 }
      );
      stations.forEach(function (s) {
        io.observe(s);
      });

      var station3 = tabs.length ? tabs[0].closest(".pw-station") : null;
      if (station3) {
        var io3 = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (e) {
              onScreen = e.isIntersecting;
              if (onScreen) beginDwell();
              else freeze();
            });
          },
          { threshold: 0.25 }
        );
        io3.observe(station3);
      }
    })();
  }, []);

  return null;
}
