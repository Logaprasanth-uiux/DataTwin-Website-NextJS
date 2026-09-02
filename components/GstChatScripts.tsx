/* eslint-disable */
// @ts-nocheck
"use client";

// GST discovery chat — a STATIC MOCK. The entire conversation (messages,
// upload/OTP/GSTIN/contact cards, the animated result, session history) is
// built at runtime here, ported verbatim from the single IIFE in
// gst-discovery/chat-interface.html. It attaches to the server-rendered
// #chatLog / composer / header by id.
//
// This file is @ts-nocheck on purpose: it is a faithful copy of vanilla JS,
// not idiomatic React/TS, and the dev handoff is to replace the whole thing
// with the real AI chat.
//
// Two deliberate changes from the static source:
//  - theme key `darp-theme` → `dt-theme`, unified with the rest of the site
//  - `index.html` links → `/gst-discovery`

import { useEffect } from "react";

let wired = false;

export default function GstChatScripts() {
  useEffect(() => {
    if (wired) return;
    wired = true;

    (function () {
      "use strict";

      /* ---------- tiny utils ---------- */
      function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, function (c) {
          return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
      }
      function wait(ms) {
        return new Promise(function (res) {
          setTimeout(res, ms);
        });
      }
      function formatINR(num, decimals) {
        if (decimals === undefined) decimals = true;
        num = Number(num);
        var neg = num < 0;
        num = Math.abs(num);
        var fixed = decimals ? num.toFixed(2) : String(Math.round(num));
        var parts = fixed.split(".");
        var intPart = parts[0],
          dec = parts[1];
        var last3 = intPart.slice(-3);
        var rest = intPart.slice(0, -3);
        var formattedRest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        var joined = rest ? formattedRest + "," + last3 : last3;
        return (neg ? "-" : "") + "₹" + joined + (dec !== undefined ? "." + dec : "");
      }

      var chatLog = document.getElementById("chatLog");
      var phaseText = document.getElementById("phaseText");
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      function setPhase(t) {
        phaseText.textContent = t;
      }
      function scrollBottom() {
        requestAnimationFrame(function () {
          chatLog.scrollTop = chatLog.scrollHeight + 200;
        });
      }

      /* ---------- theme toggle ---------- */
      var themeToggle = document.getElementById("themeToggle");
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

      var aiAvatarSVG =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5c.6 1 1.9 1.7 3.5 1.7s2.9-.7 3.5-1.7"/><line x1="9" y1="9.5" x2="9" y2="9.5"/><line x1="15" y1="9.5" x2="15" y2="9.5"/></svg>';
      var userAvatarSVG =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"/></svg>';

      function addRow(side, full) {
        var row = document.createElement("div");
        row.className = "row " + side + (full ? " full" : "");
        var avatar = document.createElement("div");
        avatar.className = "avatar" + (side === "user" ? " user" : "");
        avatar.innerHTML = side === "user" ? userAvatarSVG : aiAvatarSVG;
        row.appendChild(avatar);
        chatLog.appendChild(row);
        scrollBottom();
        return row;
      }

      /* ---------- basic message helpers ---------- */
      function typingDelay(text) {
        return Math.max(420, Math.min(900, 280 + text.length * 4));
      }

      function streamWords(bubble, text) {
        return new Promise(function (resolve) {
          if (reduceMotion) {
            bubble.textContent = text;
            resolve();
            return;
          }
          var words = text.split(" ");
          var i = 0;
          var textNode = document.createTextNode("");
          var cursor = document.createElement("span");
          cursor.className = "cursor-blink";
          bubble.appendChild(textNode);
          bubble.appendChild(cursor);
          function next() {
            if (i >= words.length) {
              cursor.remove();
              resolve();
              return;
            }
            textNode.nodeValue += (i > 0 ? " " : "") + words[i];
            i++;
            scrollBottom();
            setTimeout(next, 32 + Math.random() * 46);
          }
          next();
        });
      }

      function aiSay(text) {
        return new Promise(function (resolve) {
          var row = addRow("ai", false);
          var bubble = document.createElement("div");
          bubble.className = "bubble";
          bubble.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
          row.appendChild(bubble);
          scrollBottom();
          wait(typingDelay(text))
            .then(function () {
              bubble.textContent = "";
              return streamWords(bubble, text);
            })
            .then(function () {
              scrollBottom();
              wait(180).then(resolve);
            });
        });
      }

      function userSay(text) {
        var row = addRow("user", false);
        var bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = text;
        row.appendChild(bubble);
        scrollBottom();
        return wait(160);
      }

      function addCard() {
        var row = addRow("ai", true);
        var card = document.createElement("div");
        card.className = "card";
        row.appendChild(card);
        scrollBottom();
        return card;
      }

      var nudge = "Use the options above to continue.";

      /* ---------- choice ---------- */
      function aiChoice(text, options) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            nudge = "Pick one of the options above to continue.";
            var card = addCard();
            var wrap = document.createElement("div");
            wrap.className = "choice-row";
            options.forEach(function (opt) {
              var btn = document.createElement("button");
              btn.className = "choice-btn";
              btn.type = "button";
              btn.innerHTML =
                "<span>" +
                escapeHtml(opt.label) +
                '</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
              btn.addEventListener("click", function () {
                Array.prototype.forEach.call(wrap.children, function (b) {
                  b.disabled = true;
                });
                userSay(opt.label).then(function () {
                  resolve(opt.value);
                });
              });
              wrap.appendChild(btn);
            });
            card.appendChild(wrap);
            scrollBottom();
          });
        });
      }

      /* ---------- upload ---------- */
      var docSizeGuesses = [1204, 2870, 968, 3312, 1745, 2231];
      function aiUpload(text, opts) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            nudge = "Attach the requested file above to continue.";
            var card = addCard();
            var dz = document.createElement("div");
            dz.className = "dropzone";
            dz.tabIndex = 0;
            dz.innerHTML =
              '<div class="dz-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"/><polyline points="7 9 12 4 17 9"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg></div>' +
              '<div class="dz-text"><strong>Click to upload' +
              (opts.hint ? ", or drag &amp; drop" : "") +
              "</strong><span>" +
              escapeHtml(opts.hint || "PDF, Excel or CSV") +
              "</span></div>";
            var input = document.createElement("input");
            input.type = "file";
            input.style.display = "none";
            if (opts.accept) input.accept = opts.accept;
            dz.appendChild(input);
            card.appendChild(dz);
            scrollBottom();

            dz.addEventListener("click", function () {
              input.click();
            });
            dz.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") {
                input.click();
              }
            });
            ["dragover", "dragenter"].forEach(function (ev) {
              dz.addEventListener(ev, function (e) {
                e.preventDefault();
                dz.classList.add("drag");
              });
            });
            ["dragleave", "drop"].forEach(function (ev) {
              dz.addEventListener(ev, function (e) {
                e.preventDefault();
                dz.classList.remove("drag");
              });
            });
            dz.addEventListener("drop", function (e) {
              if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFile(e.dataTransfer.files[0]);
              }
            });
            input.addEventListener("change", function () {
              if (input.files && input.files[0]) handleFile(input.files[0]);
            });

            function handleFile(file) {
              dz.remove();
              var proc = document.createElement("div");
              proc.className = "proc-panel";
              proc.innerHTML =
                '<div class="proc-file"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg><span class="fname">' +
                escapeHtml(file.name) +
                "</span></div>" +
                '<div class="proc-label" id="procLabel">Uploading</div>' +
                '<div class="progress-track"><div class="progress-fill" id="procFill"></div></div>' +
                '<div class="proc-status"><span id="procMsg">Sending file…</span><span class="pct" id="procPct">0%</span></div>';
              card.appendChild(proc);
              scrollBottom();

              var fill = proc.querySelector("#procFill");
              var pct = proc.querySelector("#procPct");
              var msg = proc.querySelector("#procMsg");
              var label = proc.querySelector("#procLabel");
              var p = 0;
              var uploadTimer = setInterval(function () {
                p += Math.random() * 16 + 8;
                if (p >= 100) {
                  p = 100;
                  clearInterval(uploadTimer);
                  afterUpload();
                }
                fill.style.width = p + "%";
                pct.textContent = Math.round(p) + "%";
              }, 140);

              function afterUpload() {
                label.textContent = "Analysing";
                msg.textContent = "Parsing document structure…";
                scrollBottom();
                wait(650)
                  .then(function () {
                    msg.textContent = "Extracting line items…";
                    return wait(700);
                  })
                  .then(function () {
                    var lines =
                      docSizeGuesses[Math.floor(Math.random() * docSizeGuesses.length)];
                    var flagged = Math.max(2, Math.round(lines * 0.014));
                    proc.querySelector(".proc-status").remove();
                    proc.querySelector(".proc-label").remove();
                    var done = document.createElement("div");
                    done.className = "proc-done";
                    done.innerHTML =
                      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>' +
                      lines.toLocaleString("en-IN") +
                      " line items extracted · " +
                      flagged +
                      " flagged for review</span>";
                    proc.appendChild(done);
                    scrollBottom();
                    wait(500).then(function () {
                      resolve({ name: file.name, lines: lines, flagged: flagged });
                    });
                  });
              }
            }
          });
        });
      }

      /* ---------- GSTIN form ---------- */
      function aiGstinForm(text) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            nudge = "Enter your GSTIN above, then continue.";
            var card = addCard();
            card.innerHTML =
              '<div class="field"><label>GSTIN</label><input id="gstinInput" type="text" placeholder="22AAAAA0000A1Z5" maxlength="15" autocomplete="off" /></div>' +
              '<div class="btn-row"><button class="btn btn-primary" id="gstinSubmit" disabled type="button">Send OTP</button></div>';
            scrollBottom();
            var input = card.querySelector("#gstinInput");
            var submit = card.querySelector("#gstinSubmit");
            input.addEventListener("input", function () {
              input.value = input.value.toUpperCase().replace(/[^0-9A-Z]/g, "");
              submit.disabled = input.value.length !== 15;
            });
            submit.addEventListener("click", function () {
              var val = input.value;
              input.disabled = true;
              submit.disabled = true;
              card.querySelector(".btn-row").remove();
              var ok = document.createElement("div");
              ok.className = "verify-ok";
              ok.innerHTML =
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>GSTIN captured</span>';
              card.appendChild(ok);
              scrollBottom();
              wait(450).then(function () {
                resolve(val);
              });
            });
          });
        });
      }

      /* ---------- OTP form ---------- */
      function aiOtpForm(text) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            nudge = "Enter the 6-digit code above to verify.";
            var card = addCard();
            var boxWrap = document.createElement("div");
            boxWrap.className = "otp-row";
            var boxes = [];
            for (var i = 0; i < 6; i++) {
              var b = document.createElement("input");
              b.type = "tel";
              b.inputMode = "numeric";
              b.maxLength = 1;
              b.className = "otp-box";
              boxWrap.appendChild(b);
              boxes.push(b);
            }
            card.appendChild(boxWrap);
            var btnRow = document.createElement("div");
            btnRow.className = "btn-row";
            var verifyBtn = document.createElement("button");
            verifyBtn.className = "btn btn-primary";
            verifyBtn.type = "button";
            verifyBtn.disabled = true;
            verifyBtn.textContent = "Verify";
            btnRow.appendChild(verifyBtn);
            card.appendChild(btnRow);
            scrollBottom();

            function checkFilled() {
              verifyBtn.disabled = !boxes.every(function (b) {
                return b.value.length === 1;
              });
            }
            boxes.forEach(function (b, i) {
              b.addEventListener("input", function () {
                b.value = b.value.replace(/[^0-9]/g, "");
                if (b.value && i < 5) boxes[i + 1].focus();
                checkFilled();
              });
              b.addEventListener("keydown", function (e) {
                if (e.key === "Backspace" && !b.value && i > 0) boxes[i - 1].focus();
              });
            });

            verifyBtn.addEventListener("click", function () {
              boxes.forEach(function (b) {
                b.disabled = true;
              });
              verifyBtn.disabled = true;
              verifyBtn.textContent = "Verifying…";
              wait(900).then(function () {
                btnRow.remove();
                var ok = document.createElement("div");
                ok.className = "verify-ok";
                ok.innerHTML =
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>Verified</span>';
                card.appendChild(ok);
                scrollBottom();
                wait(450).then(resolve);
              });
            });
          });
        });
      }

      /* ---------- sequential loading steps ---------- */
      function aiLoadingSteps(text, steps) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            var card = addCard();
            var list = document.createElement("div");
            list.className = "step-list";
            var lines = steps.map(function (s) {
              var line = document.createElement("div");
              line.className = "step-line";
              line.innerHTML =
                '<span class="mark"></span><span class="label">' + escapeHtml(s) + "</span>";
              list.appendChild(line);
              return line;
            });
            card.appendChild(list);
            scrollBottom();

            function runStep(i) {
              if (i >= lines.length) {
                wait(400).then(resolve);
                return;
              }
              lines[i].classList.add("active");
              scrollBottom();
              wait(550 + Math.random() * 350).then(function () {
                lines[i].classList.remove("active");
                lines[i].classList.add("done");
                lines[i].querySelector(".mark").innerHTML =
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
                runStep(i + 1);
              });
            }
            runStep(0);
          });
        });
      }

      /* ---------- result ---------- */
      function animateCount(el, target, duration) {
        var start = null;
        function tick(ts) {
          if (start === null) start = ts;
          var t = Math.min(1, (ts - start) / duration);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = formatINR(target * eased, false);
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = formatINR(target, false);
        }
        requestAnimationFrame(tick);
      }

      function aiResult(text, amount, findings, periodsNote) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            var row = addRow("ai", true);
            var card = document.createElement("div");
            card.className = "result-card";
            var projected = Math.round((amount * 3.2) / 100000) * 100000;
            card.innerHTML =
              '<div class="result-eyebrow">Estimated Recoverable ITC</div>' +
              '<div class="result-amount" id="resultAmount">₹0</div>' +
              '<p class="result-warn">At this pace, unclaimed credit could reach ' +
              formatINR(projected, false) +
              " by your next financial review.</p>" +
              '<p class="result-caption">' +
              escapeHtml(periodsNote) +
              "</p>" +
              '<div class="result-note">Illustrative analysis · connects to live GSTN &amp; ERP data at launch</div>';
            row.appendChild(card);
            scrollBottom();
            animateCount(card.querySelector("#resultAmount"), amount, 1800);

            wait(2000).then(function () {
              var fw = document.createElement("div");
              fw.className = "findings-wrap";
              var list = document.createElement("div");
              list.className = "findings-list";
              findings.forEach(function (f) {
                var r = document.createElement("div");
                r.className = "finding-row";
                r.innerHTML =
                  "<b>" +
                  escapeHtml(f.label) +
                  '</b><span class="amt">' +
                  formatINR(f.amount) +
                  "</span>";
                list.appendChild(r);
              });
              fw.appendChild(list);
              var overlay = document.createElement("div");
              overlay.className = "findings-overlay";
              overlay.innerHTML =
                '<div class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div>' +
                "<p>The full line-by-line breakdown unlocks when you connect with the DARP team.</p>" +
                '<button class="btn btn-primary" id="unlockBtn" type="button">Connect with the DARP team</button>';
              fw.appendChild(overlay);
              card.appendChild(fw);
              scrollBottom();
              overlay.querySelector("#unlockBtn").addEventListener("click", function () {
                var ub = overlay.querySelector("#unlockBtn");
                ub.disabled = true;
                ub.textContent = "Request sent ✓";
                resolve();
              });
            });
          });
        });
      }

      /* ---------- contact capture ---------- */
      function aiContactForm(text) {
        return aiSay(text).then(function () {
          return new Promise(function (resolve) {
            nudge = "Fill in your contact details above to continue.";
            var card = addCard();
            card.innerHTML =
              '<div class="field"><label>Name</label><input id="cName" type="text" placeholder="Your name" /></div>' +
              '<div class="field-row">' +
              '<div class="field"><label>Work email</label><input id="cEmail" type="email" placeholder="you@company.com" /></div>' +
              '<div class="field"><label>Phone</label><input id="cPhone" type="tel" placeholder="+91" /></div>' +
              "</div>" +
              '<div class="btn-row"><button class="btn btn-primary" id="cSubmit" disabled type="button">Request a callback</button></div>';
            scrollBottom();
            var name = card.querySelector("#cName"),
              email = card.querySelector("#cEmail"),
              phone = card.querySelector("#cPhone");
            var submit = card.querySelector("#cSubmit");
            function check() {
              submit.disabled = !(
                name.value.trim() &&
                /\S+@\S+\.\S+/.test(email.value) &&
                phone.value.trim().length >= 7
              );
            }
            [name, email, phone].forEach(function (f) {
              f.addEventListener("input", check);
            });
            submit.addEventListener("click", function () {
              [name, email, phone, submit].forEach(function (f) {
                f.disabled = true;
              });
              var contact = {
                name: name.value.trim() || "there",
                email: email.value.trim(),
                phone: phone.value.trim(),
              };
              card.querySelector(".btn-row").remove();
              var ok = document.createElement("div");
              ok.className = "verify-ok";
              ok.innerHTML =
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>Details received</span>';
              card.appendChild(ok);
              scrollBottom();
              wait(450).then(function () {
                resolve(contact);
              });
            });
          });
        });
      }

      /* ---------- reuse a saved contact, or collect a new one ---------- */
      function useExistingContact(visitor) {
        return aiChoice(
          "Before I connect you with the team — should we use your saved contact, or something new?",
          [
            { label: "Continue as " + visitor.name + " · " + visitor.email, value: "existing" },
            { label: "Use different contact details", value: "new" },
          ]
        ).then(function (choice) {
          if (choice === "new") {
            return aiContactForm(
              "No problem — leave your best contact and our team will walk you through the full findings within one business day."
            );
          }
          return aiSay(
            "Got it — we’ll reach " + visitor.name + " at " + visitor.email + "."
          ).then(function () {
            return { name: visitor.name, email: visitor.email, phone: visitor.phone };
          });
        });
      }

      /* ---------- composer (free text nudge) ---------- */
      document.getElementById("composerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var input = document.getElementById("composerInput");
        var val = input.value.trim();
        if (!val) return;
        input.value = "";
        userSay(val).then(function () {
          return aiSay(nudge);
        });
      });

      /* ================= SESSION / HISTORY =================
         Mocked entirely in localStorage for this demo — stands in for the real
         cookie/account-based tracking that lands with the backend. Lets a visitor
         leave mid-flow and resume later, see a status once their info is with the
         team, and browse previously checked scenarios. */
      var SESSIONS_KEY = "darp-sessions";
      var ACTIVE_KEY = "darp-active-session";
      var VISITOR_KEY = "darp-visitor";
      var activeSession = null;

      function loadSessions() {
        try {
          return JSON.parse(localStorage.getItem(SESSIONS_KEY)) || [];
        } catch (e) {
          return [];
        }
      }
      function saveSessions(list) {
        try {
          localStorage.setItem(SESSIONS_KEY, JSON.stringify(list));
        } catch (e) {}
      }
      function genId() {
        return "DARP-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      }
      function createSession() {
        var s = {
          id: genId(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          mode: null,
          status: "in_progress",
          step: null,
          gstin: null,
          contact: null,
          result: null,
        };
        var sessions = loadSessions();
        sessions.push(s);
        saveSessions(sessions);
        try {
          localStorage.setItem(ACTIVE_KEY, s.id);
        } catch (e) {}
        return s;
      }
      function checkpoint(step, extra, statusOverride) {
        if (!activeSession) return;
        activeSession.step = step;
        activeSession.updatedAt = new Date().toISOString();
        if (extra) {
          for (var k in extra) {
            activeSession[k] = extra[k];
          }
        }
        if (statusOverride) activeSession.status = statusOverride;
        var sessions = loadSessions();
        var idx = -1;
        for (var i = 0; i < sessions.length; i++) {
          if (sessions[i].id === activeSession.id) {
            idx = i;
            break;
          }
        }
        if (idx > -1) sessions[idx] = activeSession;
        else sessions.push(activeSession);
        saveSessions(sessions);
      }
      function getVisitor() {
        try {
          return JSON.parse(localStorage.getItem(VISITOR_KEY));
        } catch (e) {
          return null;
        }
      }
      function setVisitor(contact) {
        var v = getVisitor() || { id: genId(), firstSeenAt: new Date().toISOString() };
        contact = contact || {};
        v.name = contact.name || v.name;
        v.email = contact.email || v.email;
        v.phone = contact.phone || v.phone;
        v.lastSeenAt = new Date().toISOString();
        try {
          localStorage.setItem(VISITOR_KEY, JSON.stringify(v));
        } catch (e) {}
        return v;
      }
      function relativeTime(iso) {
        var mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
        if (mins < 1) return "just now";
        if (mins < 60) return mins + " min ago";
        var hrs = Math.round(mins / 60);
        if (hrs < 24) return hrs + " hr" + (hrs > 1 ? "s" : "") + " ago";
        var days = Math.round(hrs / 24);
        return days + " day" + (days > 1 ? "s" : "") + " ago";
      }

      var STEP_LABELS = {
        mode_chosen: "just getting started",
        doc1_uploaded: "GSTR-2B uploaded",
        doc2_uploaded: "purchase register uploaded",
        gstin_captured: "GSTIN captured",
        otp_verified: "GST portal connected",
        purchase_uploaded: "purchase register uploaded",
        credit_notes_step: "documents collected",
        analysis_complete: "analysis complete, contact pending",
      };
      function summarizeSession(session) {
        var modeLabel =
          session.mode === "gstin" ? "Connected via GSTIN" : "Uploaded documents";
        return modeLabel + " · " + (STEP_LABELS[session.step] || "in progress");
      }

      function renderVisitorBadge() {
        var el = document.getElementById("visitorBadge");
        if (!el) return;
        var v = getVisitor();
        if (v && v.name) {
          el.textContent = v.name.split(" ")[0] + " · " + v.id;
          el.title = "Welcome back, " + v.name.split(" ")[0];
          el.classList.remove("hidden");
        }
      }

      function buildHistoryPanel(sessions) {
        var panel = document.createElement("div");
        panel.className = "history-panel";
        var h = document.createElement("h4");
        h.textContent = "Previously checked";
        panel.appendChild(h);
        sessions.forEach(function (s) {
          var row = document.createElement("div");
          row.className = "history-row";
          var statusLabel = s.status === "awaiting_team" ? "With team" : "In progress";
          var metaBits = [relativeTime(s.updatedAt)];
          if (s.result) metaBits.push("Est. " + formatINR(s.result.total));
          var detail = s.result
            ? escapeHtml(s.result.periodsNote) +
              " · " +
              formatINR(s.result.total) +
              " estimated recoverable ITC."
            : "Not completed yet.";
          if (s.contact && s.contact.name)
            detail += " Submitted by " + escapeHtml(s.contact.name) + ".";
          row.innerHTML =
            '<div class="history-row-top"><span class="h-mode">' +
            (s.mode === "gstin" ? "Connected via GSTIN" : "Uploaded documents") +
            '</span><span class="h-status' +
            (s.status === "awaiting_team" ? " done" : "") +
            '">' +
            statusLabel +
            "</span></div>" +
            '<div class="h-meta">' +
            metaBits.join(" · ") +
            "</div>" +
            '<div class="h-detail">' +
            detail +
            "</div>";
          row.addEventListener("click", function () {
            row.classList.toggle("expanded");
          });
          panel.appendChild(row);
        });
        document.querySelector(".chat-header").appendChild(panel);
        return panel;
      }

      function renderHistoryButton(excludeId) {
        var btn = document.getElementById("historyBtn");
        if (!btn) return;
        var existingPanel = document.querySelector(".history-panel");
        if (existingPanel) existingPanel.remove();

        var sessions = loadSessions().filter(function (s) {
          return s.step && s.id !== excludeId;
        });
        if (sessions.length === 0) {
          btn.classList.add("hidden");
          return;
        }
        sessions.sort(function (a, b) {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        btn.classList.remove("hidden");
        buildHistoryPanel(sessions);

        if (!btn.dataset.bound) {
          btn.dataset.bound = "1";
          btn.addEventListener("click", function () {
            var p = document.querySelector(".history-panel");
            if (p) p.classList.toggle("open");
          });
          document.addEventListener("click", function (e) {
            var p = document.querySelector(".history-panel");
            if (
              p &&
              p.classList.contains("open") &&
              !p.contains(e.target) &&
              !btn.contains(e.target)
            ) {
              p.classList.remove("open");
            }
          });
        }
      }

      function recapChip(text) {
        var row = addRow("ai", true);
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML =
          '<div class="proc-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg><span>' +
          escapeHtml(text) +
          "</span></div>";
        row.appendChild(card);
        scrollBottom();
        return wait(350);
      }

      function showResumeCard(session) {
        return aiSay("Welcome back 👋 You still have an analysis in progress.").then(
          function () {
            return new Promise(function (resolve) {
              nudge = "Choose an option above to continue.";
              var card = addCard();
              var meta = document.createElement("p");
              meta.className = "lead";
              meta.textContent =
                summarizeSession(session) + " · " + relativeTime(session.updatedAt);
              card.appendChild(meta);
              var wrap = document.createElement("div");
              wrap.className = "choice-row";
              [
                { label: "Resume where I left off", value: "resume" },
                { label: "Start a new analysis", value: "new" },
              ].forEach(function (opt) {
                var btn = document.createElement("button");
                btn.className = "choice-btn";
                btn.type = "button";
                btn.innerHTML =
                  "<span>" +
                  escapeHtml(opt.label) +
                  '</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
                btn.addEventListener("click", function () {
                  Array.prototype.forEach.call(wrap.children, function (b) {
                    b.disabled = true;
                  });
                  userSay(opt.label).then(function () {
                    resolve(opt.value);
                  });
                });
                wrap.appendChild(btn);
              });
              card.appendChild(wrap);
              scrollBottom();
            });
          }
        );
      }

      function showAwaitingTeamCard(session) {
        return aiSay("Welcome back 👋 Your GST Discovery is with our team.").then(
          function () {
            return new Promise(function (resolve) {
              nudge = "Use the button above to start a new analysis.";
              var card = addCard();
              var p = document.createElement("p");
              p.className = "lead";
              p.textContent =
                "Submitted " +
                relativeTime(session.updatedAt) +
                (session.result
                  ? " · Estimated recoverable " + formatINR(session.result.total)
                  : "") +
                ". Our team will reach out within one business day.";
              card.appendChild(p);
              var btnRow = document.createElement("div");
              btnRow.className = "btn-row";
              var btn = document.createElement("button");
              btn.className = "btn btn-primary";
              btn.type = "button";
              btn.textContent = "Start a new analysis";
              btn.addEventListener("click", function () {
                btn.disabled = true;
                resolve();
              });
              btnRow.appendChild(btn);
              card.appendChild(btnRow);
              scrollBottom();
            });
          }
        );
      }

      /* ================= FLOW ================= */
      var FINDINGS = [
        { label: "GSTR-2B mismatch — 12 vendors", amount: 412000 },
        { label: "Rule 37A reversal not reclaimed", amount: 318500 },
        { label: "§17(5) blocked credit claimed", amount: 276300 },
        { label: "Duplicate ITC across periods", amount: 193200 },
      ];
      var TOTAL = FINDINGS.reduce(function (s, f) {
        return s + f.amount;
      }, 0);

      async function runFinalAnalysis(periodsNote, opts) {
        opts = opts || {};
        var passed =
          opts.passed ||
          function () {
            return false;
          };

        if (passed("analysis_complete")) {
          await recapChip("Analysis complete · findings ready");
        } else {
          await aiLoadingSteps("Got everything I need. Running the full reconciliation now.", [
            "Matching GSTR-2B against purchase register",
            "Checking Rule 37A reversals",
            "Flagging §17(5) blocked credit",
            "Ranking findings by recoverable value",
          ]);
          setPhase("Results ready");
          await aiResult("Here’s what I found.", TOTAL, FINDINGS, periodsNote);
          checkpoint("analysis_complete", {
            result: { total: TOTAL, findings: FINDINGS, periodsNote: periodsNote },
          });
        }

        setPhase("Wrapping up");
        var visitor = getVisitor();
        var contact =
          visitor && visitor.email
            ? await useExistingContact(visitor)
            : await aiContactForm(
                "Great — leave your best contact and our team will walk you through the full findings within one business day."
              );
        checkpoint("contact_submitted", { contact: contact }, "awaiting_team");
        setVisitor(contact);
        renderVisitorBadge();
        await aiSay(
          "Thanks, " +
            contact.name +
            " — we’ll reach out shortly. You can close this tab, or start another analysis anytime."
        );

        var row = addRow("ai", true);
        var card = document.createElement("div");
        card.className = "card";
        card.style.textAlign = "center";
        card.innerHTML =
          '<div class="btn-row" style="justify-content:center;margin-top:0;"><a class="btn btn-ghost" href="/gst-discovery">Back to DARP</a><button class="btn btn-primary" id="restartBtn" type="button">Start another analysis</button></div>';
        row.appendChild(card);
        scrollBottom();
        card.querySelector("#restartBtn").addEventListener("click", function () {
          var btn = card.querySelector("#restartBtn");
          btn.disabled = true;
          activeSession = createSession();
          renderHistoryButton(activeSession.id);
          start({ skipGreeting: true });
        });
      }

      function askOptionalCreditNotes() {
        return aiChoice(
          "One more, optional — your credit note register, if you have it handy. This improves accuracy but isn’t required.",
          [
            { label: "Upload credit note register", value: "upload" },
            { label: "Skip for now", value: "skip" },
          ]
        ).then(function (choice) {
          if (choice === "upload") {
            return aiUpload("Go ahead and attach it — Excel or CSV both work.", {
              accept: ".xlsx,.csv",
              hint: "Excel or CSV",
            });
          }
          return null;
        });
      }

      var UPLOAD_STEPS = [
        "mode_chosen",
        "doc1_uploaded",
        "doc2_uploaded",
        "credit_notes_step",
        "analysis_complete",
      ];
      var GSTIN_STEPS = [
        "mode_chosen",
        "gstin_captured",
        "otp_verified",
        "purchase_uploaded",
        "credit_notes_step",
        "analysis_complete",
      ];

      async function start(opts) {
        opts = opts || {};
        var resumeStep = opts.resumeStep || null;
        var mode = opts.mode || null;
        var order = mode === "gstin" ? GSTIN_STEPS : UPLOAD_STEPS;
        function passed(step) {
          if (!resumeStep) return false;
          var oi = order.indexOf(resumeStep),
            si = order.indexOf(step);
          return oi > -1 && si > -1 && si <= oi;
        }

        setPhase("Getting started");
        if (!resumeStep) {
          if (opts.skipGreeting) {
            await aiSay("Let’s take a look at another one.");
          } else {
            await aiSay("Hi 👋 I’m DataTwin.");
            await aiSay(
              "I’ll read your GST filings and surface every recoverable rupee of input tax credit — mismatches, reversals and blocked claims."
            );
          }
        }

        if (!mode) {
          mode = await aiChoice("How would you like to get started?", [
            { label: "Upload my GST documents", value: "upload" },
            { label: "Connect via GST number", value: "gstin" },
          ]);
          order = mode === "gstin" ? GSTIN_STEPS : UPLOAD_STEPS;
          checkpoint("mode_chosen", { mode: mode });
        }

        if (mode === "upload") {
          setPhase("Collecting documents");
          if (passed("doc1_uploaded")) {
            await recapChip("GSTR-2B uploaded · line items extracted");
          } else {
            await aiUpload("First, share your GSTR-2B for the period you’d like analyzed.", {
              accept: ".pdf,.xlsx,.csv,.json",
              hint: "PDF, Excel, CSV or JSON export",
            });
            checkpoint("doc1_uploaded");
          }
          if (passed("doc2_uploaded")) {
            await recapChip("Purchase register uploaded");
          } else {
            await aiUpload("Now your purchase register — an export from your ERP works fine.", {
              accept: ".xlsx,.csv",
              hint: "Excel or CSV",
            });
            checkpoint("doc2_uploaded");
          }
          if (!passed("credit_notes_step")) {
            await askOptionalCreditNotes();
            checkpoint("credit_notes_step");
          }
          await runFinalAnalysis("Based on the documents you shared · 3,214 line items", {
            passed: passed,
          });
        } else {
          setPhase("Connecting to GST portal");
          var gstin = opts.gstin || null;
          if (!passed("gstin_captured")) {
            gstin = await aiGstinForm(
              "Sure — enter your GSTIN and I’ll pull your filings directly from the GST portal."
            );
            checkpoint("gstin_captured", { gstin: gstin });
          }

          if (passed("otp_verified")) {
            await recapChip("GSTIN " + gstin + " connected · GSTR-2B & GSTR-1 retrieved");
          } else {
            await aiOtpForm(
              "Sending a one-time code to the mobile number registered against " +
                gstin +
                " (••••••••92)."
            );
            await aiLoadingSteps("Connecting to the GST portal.", [
              "Authenticating session",
              "Fetching GSTR-2B",
              "Fetching GSTR-1",
            ]);
            var row = addRow("ai", true);
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML =
              '<p class="lead">Retrieved for the last 2 return periods:</p><div class="chip-row"><span class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>GSTR-2B · Jun–Jul 2026</span><span class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>GSTR-1 · Jun–Jul 2026</span></div>';
            row.appendChild(card);
            scrollBottom();
            await wait(500);
            checkpoint("otp_verified");
          }

          setPhase("Collecting documents");
          if (passed("purchase_uploaded")) {
            await recapChip("Purchase register uploaded");
          } else {
            await aiUpload(
              "Your purchase register isn’t on the GST portal — export it from your ERP and I’ll take it from here.",
              { accept: ".xlsx,.csv", hint: "Excel or CSV" }
            );
            checkpoint("purchase_uploaded");
          }
          if (!passed("credit_notes_step")) {
            await askOptionalCreditNotes();
            checkpoint("credit_notes_step");
          }
          await runFinalAnalysis("Based on 2 GSTN-retrieved periods · 3,214 line items", {
            passed: passed,
          });
        }
      }

      async function boot() {
        var activeId = null;
        try {
          activeId = localStorage.getItem(ACTIVE_KEY);
        } catch (e) {}
        var sessions = loadSessions();
        var existing = null;
        for (var i = 0; i < sessions.length; i++) {
          if (sessions[i].id === activeId) {
            existing = sessions[i];
            break;
          }
        }
        var hasHistory = sessions.some(function (s) {
          return s.step && s.id !== activeId;
        });

        renderVisitorBadge();
        renderHistoryButton(activeId);

        if (existing && existing.status === "awaiting_team") {
          await showAwaitingTeamCard(existing);
          activeSession = createSession();
          await start({ skipGreeting: true });
          return;
        }

        if (existing && existing.status === "in_progress" && existing.step) {
          var choice = await showResumeCard(existing);
          if (choice === "resume") {
            activeSession = existing;
            await start({
              resumeStep: existing.step,
              mode: existing.mode,
              gstin: existing.gstin,
            });
          } else {
            activeSession = createSession();
            await start({ skipGreeting: true });
          }
          return;
        }

        activeSession = existing || createSession();
        await start({ skipGreeting: hasHistory });
      }

      boot();
    })();
  }, []);

  return null;
}
