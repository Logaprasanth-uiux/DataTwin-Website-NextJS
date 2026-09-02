"use client";

/* eslint-disable */
// Site-wide UI behaviour, ported close to the original vanilla JS: theme
// toggle, the mobile drawer, and the desktop hover/click mega-menus.
// It attaches to the server-rendered markup by id/class (same as before),
// so the header/drawer/footer stay plain server components.
//
// TODO (dev handoff): this is deliberately a faithful port. Worth refactoring
// to real React state (useState for open/closed, no getElementById) once the
// visual parity pass is signed off.

import { useEffect } from "react";

let wired = false;

export default function ChromeScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    /* ============================= THEME ============================= */
    (function () {
      var root = document.documentElement;
      var toggle = document.getElementById("themeToggle");
      var stored: string | null = null;
      try {
        stored = localStorage.getItem("dt-theme");
      } catch (e) {}
      if (stored === "dark") {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", "light");
      }
      if (!toggle) return;
      toggle.addEventListener("click", function () {
        var isLight = root.getAttribute("data-theme") === "light";
        var next = isLight ? "dark" : "light";
        if (next === "dark") {
          root.removeAttribute("data-theme");
        } else {
          root.setAttribute("data-theme", "light");
        }
        try {
          localStorage.setItem("dt-theme", next);
        } catch (e) {}
      });
    })();

    /* ============================= DRAWER NAV ============================= */
    (function () {
      var menuBtn = document.getElementById("menuBtn");
      var drawer = document.getElementById("drawer");
      var scrim = document.getElementById("navScrim");
      var closeBtn = document.getElementById("drawerClose");
      if (!menuBtn || !drawer) return;

      function openDrawer() {
        document.body.classList.add("drawer-open");
        menuBtn!.setAttribute("aria-expanded", "true");
        drawer!.setAttribute("aria-hidden", "false");
      }
      function closeDrawer() {
        document.body.classList.remove("drawer-open");
        menuBtn!.setAttribute("aria-expanded", "false");
        drawer!.setAttribute("aria-hidden", "true");
      }
      menuBtn.addEventListener("click", function () {
        document.body.classList.contains("drawer-open") ? closeDrawer() : openDrawer();
      });
      if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
      if (scrim) scrim.addEventListener("click", closeDrawer);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeDrawer();
      });

      var items = drawer.querySelectorAll(".drawer-item[data-panel]");
      items.forEach(function (item) {
        var trigger = item.querySelector(".drawer-item-btn");
        if (!trigger) return;
        trigger.addEventListener("click", function () {
          var willOpen = !item.classList.contains("open");
          items.forEach(function (i) {
            i.classList.remove("open");
          });
          if (willOpen) item.classList.add("open");
        });
      });

      drawer.querySelectorAll("a[href]").forEach(function (a) {
        a.addEventListener("click", function () {
          closeDrawer();
        });
      });
    })();

    /* ============================= DESKTOP MEGA MENU ============================= */
    (function () {
      var nav = document.querySelector(".nav-desktop");
      if (!nav) return;
      var items = nav.querySelectorAll(".mega-item");
      var closeTimer: ReturnType<typeof setTimeout>;

      function closeAll() {
        items.forEach(function (item) {
          item.classList.remove("open");
          item.querySelector(".mega-trigger")?.setAttribute("aria-expanded", "false");
        });
      }
      function openItem(item: Element) {
        closeAll();
        item.classList.add("open");
        item.querySelector(".mega-trigger")?.setAttribute("aria-expanded", "true");
      }

      items.forEach(function (item) {
        var trigger = item.querySelector(".mega-trigger");
        item.addEventListener("mouseenter", function () {
          clearTimeout(closeTimer);
          openItem(item);
        });
        item.addEventListener("mouseleave", function () {
          closeTimer = setTimeout(closeAll, 150);
        });
        trigger?.addEventListener("click", function () {
          var isOpen = item.classList.contains("open");
          closeAll();
          if (!isOpen) openItem(item);
        });
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeAll();
      });
      document.addEventListener("click", function (e) {
        if (!(e.target as Element).closest(".nav-desktop")) closeAll();
      });
    })();
  }, []);

  return null;
}
