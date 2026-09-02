"use client";

/* eslint-disable */
// GST discovery landing page behaviour, ported close to the original single
// IIFE in gst-discovery/index.html:
//  - theme toggle (this section is its own root layout, so it carries its own
//    toggle rather than sharing the main site's ChromeScripts)
//  - the pre-footer "problem" marquee, built from a list
//  - the auto-rotating "leak" tabs + panels, built from `leakData`
//  - the hero ledger card: cycling reconciliation scenario labels
//  - scroll reveal for [data-reveal] elements
//  - the ambient <canvas> ledger-reconciliation animation
// Attaches to the server-rendered markup by id/class.

import { useEffect } from "react";

let wired = false;

export default function GstDiscoveryScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    (function () {
      // Theme toggle
      var themeToggle = document.getElementById("themeToggle");
      if (themeToggle) {
        themeToggle.addEventListener("click", function () {
          var isLight =
            document.documentElement.getAttribute("data-theme") === "light";
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

      // Problem marquee
      var marqueeItems = [
        "Vendor filed late — credit at risk",
        "Reversed credit, never reclaimed",
        "Blocked spend claimed by mistake",
        "Same invoice, claimed twice",
        "Wrong GSTIN, lost credit",
        "Credit notes never netted off",
      ];
      var marqueeTrack = document.getElementById("problemMarquee");
      if (marqueeTrack) {
        var marqueeHtml = marqueeItems
          .map(function (t) {
            return (
              '<span class="marquee-item">' +
              t +
              '</span><span class="marquee-dot" aria-hidden="true">&bull;</span>'
            );
          })
          .join("");
        marqueeTrack.innerHTML = marqueeHtml + marqueeHtml;
      }

      // Leak tabs — auto-rotating, manually switchable
      var leakData = [
        {
          tag: "2A / 2B mismatch",
          title: "Credit claimed, GSTR-2B silent",
          body: "No matching entry in 2B — vendor filed late or not at all. Section 16(2)(c) puts the risk on you.",
        },
        {
          tag: "Rule 37A reclaim",
          title: "Reversed and forgotten",
          body: "Reversed under Rule 37A when a vendor files late — reclaimable once they catch up. Most teams never circle back.",
        },
        {
          tag: "§17(5) ineligible ITC",
          title: "Blocked credit, claimed anyway",
          body: "Section 17(5) ineligible spend — travel, food, motor vehicles — claimed anyway under deadline pressure.",
        },
        {
          tag: "Duplicate ITC",
          title: "Same invoice, twice",
          body: "Duplicate entries across ERP instances, or credit notes never netted against the claim that used them.",
        },
        {
          tag: "Head / GSTIN error",
          title: "Wrong head, wrong state",
          body: "IGST claimed where CGST+SGST applied, or credit claimed under the wrong GSTIN. Right amount, wrong return.",
        },
        {
          tag: "Manual reconciliation",
          title: "Nobody has time to check it by hand",
          body: "Thousands of line items, dozens of vendors, one finance team — manual matching doesn’t scale before the filing deadline.",
        },
        {
          tag: "Notice & audit exposure",
          title: "Today’s mismatch is next year’s notice",
          body: "Every uncaught gap sits quietly until an assessment — then it’s correspondence, interest, and a scramble to prove what should’ve been caught upfront.",
        },
      ];
      var leakTabbar = document.getElementById("leakTabbar");
      var leakPanel = document.getElementById("leakPanel");
      if (leakTabbar && leakPanel) {
        leakData.forEach(function (d, i) {
          var tab = document.createElement("button");
          tab.type = "button";
          tab.className = "leak-tab" + (i === 0 ? " active" : "");
          tab.setAttribute("role", "tab");
          tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
          tab.innerHTML =
            '<span class="leak-tab-num">' +
            String(i + 1).padStart(2, "0") +
            "</span>" +
            '<span class="leak-tab-label">' +
            d.tag +
            "</span>" +
            '<span class="leak-tab-progress"><span class="leak-tab-fill"></span></span>';
          leakTabbar!.appendChild(tab);

          var panel = document.createElement("div");
          panel.className = "leak-panel-item" + (i === 0 ? " active" : "");
          panel.innerHTML =
            '<span class="leak-panel-ghost" aria-hidden="true">' +
            String(i + 1).padStart(2, "0") +
            "</span>" +
            '<span class="leak-panel-tag">' +
            d.tag +
            "</span>" +
            "<h3>" +
            d.title +
            "</h3>" +
            "<p>" +
            d.body +
            "</p>";
          leakPanel!.appendChild(panel);
        });

        var leakTabs = leakTabbar.querySelectorAll(".leak-tab");
        var leakPanels = leakPanel.querySelectorAll(".leak-panel-item");
        var leakIndex = 0;
        var leakTimer: ReturnType<typeof setTimeout> | null = null;
        var LEAK_DURATION = 5200;
        var leakReduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        function showLeak(i: number) {
          leakIndex = (i + leakTabs.length) % leakTabs.length;
          leakTabs.forEach(function (t, idx) {
            t.classList.toggle("active", idx === leakIndex);
            t.setAttribute("aria-selected", idx === leakIndex ? "true" : "false");
            var fill = t.querySelector(".leak-tab-fill") as HTMLElement;
            fill.style.transition = "none";
            fill.style.width = "0%";
          });
          leakPanels.forEach(function (p, idx) {
            p.classList.toggle("active", idx === leakIndex);
          });
          restartLeakTimer();
        }

        function restartLeakTimer() {
          if (leakTimer) clearTimeout(leakTimer);
          var fill = leakTabs[leakIndex].querySelector(
            ".leak-tab-fill"
          ) as HTMLElement;
          fill.style.transition = "none";
          fill.style.width = "0%";
          void fill.offsetWidth;
          if (leakReduceMotion) {
            fill.style.width = "100%";
            return;
          }
          fill.style.transition = "width " + LEAK_DURATION + "ms linear";
          requestAnimationFrame(function () {
            fill.style.width = "100%";
          });
          leakTimer = setTimeout(function () {
            showLeak(leakIndex + 1);
          }, LEAK_DURATION);
        }

        leakTabs.forEach(function (tab, idx) {
          tab.addEventListener("click", function () {
            showLeak(idx);
          });
        });
        (leakTabbar.closest(".reveal") as HTMLElement).addEventListener(
          "mouseenter",
          function () {
            if (leakTimer) clearTimeout(leakTimer);
            var fill = leakTabs[leakIndex].querySelector(
              ".leak-tab-fill"
            ) as HTMLElement;
            var frozenWidth = getComputedStyle(fill).width;
            fill.style.transition = "none";
            fill.style.width = frozenWidth;
          }
        );
        (leakTabbar.closest(".reveal") as HTMLElement).addEventListener(
          "mouseleave",
          function () {
            restartLeakTimer();
          }
        );

        restartLeakTimer();
      }

      // Hero ledger card — cycling reconciliation indicator
      var ledgerScenarios = [
        { label: "GSTR-2B RECONCILIATION — LIVE", count: "3,214 line items tested" },
        { label: "GSTR-1 VS 3B MATCH — LIVE", count: "1,842 line items tested" },
        { label: "RULE 37A REVERSAL CHECK — LIVE", count: "926 entries tested" },
        { label: "VENDOR MASTER VERIFICATION — LIVE", count: "2,510 vendors tested" },
        { label: "PURCHASE REGISTER AUDIT — LIVE", count: "4,087 line items tested" },
      ];
      var ledgerLabelEl = document.getElementById("ledgerLabel");
      var ledgerCountEl = document.getElementById("ledgerCount");
      var ledgerReduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      var refreshLedgerRows: (() => void) | null = null; // wired up once the canvas below initializes
      if (ledgerLabelEl && ledgerCountEl && !ledgerReduceMotion) {
        var ledgerIdx = 0;
        setInterval(function () {
          ledgerLabelEl!.style.opacity = "0";
          ledgerCountEl!.style.opacity = "0";
          setTimeout(function () {
            ledgerIdx = (ledgerIdx + 1) % ledgerScenarios.length;
            ledgerLabelEl!.textContent = ledgerScenarios[ledgerIdx].label;
            ledgerCountEl!.textContent = ledgerScenarios[ledgerIdx].count;
            ledgerLabelEl!.style.opacity = "1";
            ledgerCountEl!.style.opacity = "1";
            if (refreshLedgerRows) refreshLedgerRows();
          }, 500);
        }, 4200);
      }

      // Scroll reveal
      var els = document.querySelectorAll("[data-reveal]");
      els.forEach(function (el) {
        el.classList.add("reveal");
      });
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (e) {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.15 }
        );
        els.forEach(function (el) {
          io.observe(el);
        });
      } else {
        els.forEach(function (el) {
          el.classList.add("in");
        });
      }

      // Ledger reconciliation canvas — ambient, ties directly to the "mismatch -> matched" story
      var canvas = document.getElementById("ledgerCanvas") as HTMLCanvasElement | null;
      var reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (canvas) {
        var ctx = canvas.getContext("2d")!;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var monoFamily =
          getComputedStyle(document.documentElement)
            .getPropertyValue("--mono")
            .trim() || '"IBM Plex Mono", monospace';
        var rows: any[] = [];
        var ROW_COUNT = 9;

        function themeColors() {
          var cs = getComputedStyle(document.documentElement);
          return {
            line: cs.getPropertyValue("--line-soft").trim(),
            text: cs.getPropertyValue("--text-faint").trim(),
            brass: cs.getPropertyValue("--brass").trim(),
            verified: cs.getPropertyValue("--verified").trim(),
            flag: cs.getPropertyValue("--flag").trim(),
          };
        }

        function resize() {
          var rect = canvas!.getBoundingClientRect();
          canvas!.width = rect.width * dpr;
          canvas!.height = rect.height * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          buildRows(rect.width);
        }

        function rand(min: number, max: number) {
          return Math.random() * (max - min) + min;
        }

        function buildRows(w: number) {
          rows = [];
          for (var i = 0; i < ROW_COUNT; i++) {
            rows.push({
              y: i,
              amt: rand(4200, 98500).toFixed(2),
              state: Math.random() < 0.72 ? "pending" : "flag", // will resolve to matched/flag
              progress: rand(-0.6, 0),
              speed: rand(0.0035, 0.0065),
              resolved: false,
            });
          }
        }

        function draw() {
          var rect = canvas!.getBoundingClientRect();
          var w = rect.width,
            h = rect.height;
          var colors = themeColors();
          ctx.clearRect(0, 0, w, h);
          var rowH = h / ROW_COUNT;
          ctx.font = "11px " + monoFamily;
          ctx.textBaseline = "middle";

          rows.forEach(function (row, i) {
            var y = i * rowH + rowH / 2;
            if (!reduceMotion) {
              row.progress += row.speed;
              if (row.progress > 1.4) {
                row.progress = -0.6;
                row.resolved = false;
                row.state = Math.random() < 0.78 ? "pending" : "flag";
              }
            } else {
              row.progress = 0.6;
            }

            // baseline row line
            ctx.strokeStyle = colors.line;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            ctx.moveTo(20, y + rowH / 2 - 1);
            ctx.lineTo(w - 20, y + rowH / 2 - 1);
            ctx.stroke();
            ctx.globalAlpha = 1;

            // amount label
            ctx.fillStyle = colors.text;
            ctx.globalAlpha = 0.85;
            ctx.fillText("₹ " + row.amt, 20, y);

            // moving marker: sweeps left->right, resolves to a dot color at ~0.85 progress
            var mx = 130 + Math.max(0, Math.min(1, row.progress)) * (w - 200);
            var resolved = row.progress > 0.85;
            var dotColor = resolved
              ? row.state === "flag"
                ? colors.flag
                : colors.verified
              : colors.brass;
            ctx.globalAlpha = row.progress < 0 ? 0 : 1;
            ctx.beginPath();
            ctx.arc(mx, y, resolved ? 3.4 : 2.4, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.fill();

            // trailing line showing sweep
            if (row.progress > 0) {
              ctx.strokeStyle = dotColor;
              ctx.globalAlpha = 0.28;
              ctx.beginPath();
              ctx.moveTo(130, y);
              ctx.lineTo(mx, y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }

            if (resolved) {
              ctx.font = "10px " + monoFamily;
              ctx.fillStyle = dotColor;
              ctx.globalAlpha = 0.9;
              ctx.fillText(row.state === "flag" ? "flag" : "matched", w - 58, y);
              ctx.font = "11px " + monoFamily;
            }
            ctx.globalAlpha = 1;
          });

          if (!reduceMotion) {
            requestAnimationFrame(draw);
          }
        }

        window.addEventListener("resize", resize);
        resize();
        draw();
        if (reduceMotion) {
          setInterval(draw, 4000);
        }

        refreshLedgerRows = function () {
          buildRows(canvas!.getBoundingClientRect().width);
        };
      }
    })();
  }, []);

  return null;
}
