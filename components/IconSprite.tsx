// Every UI icon lives here as an SVG <symbol>. Referenced elsewhere with
//   <svg className="stroke"><use href="#ic-name" /></svg>
// The `.stroke` class (see globals.css) supplies fill/stroke/width so the
// symbols stay attribute-light. Rendered once, in the root layout.
// Static, trusted markup — injected as-is rather than hand-converted to JSX.
export default function IconSprite() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  );
}

const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg">
<symbol id="ic-lock" viewBox="0 0 24 24"><rect class="stroke" x="5" y="11" width="14" height="9" rx="2"/><path class="stroke" d="M8 11V7a4 4 0 0 1 8 0v4"/></symbol>
<symbol id="ic-layers" viewBox="0 0 24 24"><path class="stroke" d="M12 3 3 8l9 5 9-5-9-5Z"/><path class="stroke" d="m3 13 9 5 9-5"/></symbol>
<symbol id="ic-badge" viewBox="0 0 24 24"><path class="stroke" d="m12 3 2.2 1.6 2.7-.3 1 2.5 2.3 1.4-.6 2.6.6 2.6-2.3 1.4-1 2.5-2.7-.3L12 19l-2.2-1.6-2.7.3-1-2.5-2.3-1.4.6-2.6-.6-2.6 2.3-1.4 1-2.5 2.7.3L12 3Z"/><path class="stroke" d="m9.5 12 1.8 1.8 3.2-3.6"/></symbol>
<symbol id="ic-cash" viewBox="0 0 24 24"><rect class="stroke" x="3" y="6" width="18" height="12" rx="2"/><circle class="stroke" cx="12" cy="12" r="2.6"/><path class="stroke" d="M6 6v12M18 6v12"/></symbol>
<symbol id="ic-tax" viewBox="0 0 24 24"><path class="stroke" d="M6 3h9l3 3v15H6z"/><path class="stroke" d="M9 12h6M9 16h6M9 8h3"/></symbol>
<symbol id="ic-misstate" viewBox="0 0 24 24"><path class="stroke" d="M6 3h9l3 3v15H6z"/><path class="stroke" d="M12 10v4"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/></symbol>
<symbol id="ic-control" viewBox="0 0 24 24"><path class="stroke" d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z"/><path class="stroke" d="M9.5 12.5l1.8 1.8 3.2-3.6"/></symbol>
<symbol id="ic-search" viewBox="0 0 24 24"><circle class="stroke" cx="11" cy="11" r="6.5"/><path class="stroke" d="m20 20-4.3-4.3"/></symbol>
<symbol id="ic-gauge" viewBox="0 0 24 24"><path class="stroke" d="M4 15a8 8 0 1 1 16 0"/><path class="stroke" d="M12 15 15.5 10"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/></symbol>
<symbol id="ic-recover" viewBox="0 0 24 24"><path class="stroke" d="M12 3v13"/><path class="stroke" d="m7 12 5 5 5-5"/><path class="stroke" d="M5 21h14"/></symbol>
<symbol id="ic-shield" viewBox="0 0 24 24"><path class="stroke" d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z"/></symbol>
<symbol id="ic-arrow-right" viewBox="0 0 24 24"><path class="stroke" d="M5 12h14"/><path class="stroke" d="m13 6 6 6-6 6"/></symbol>
<symbol id="ic-cursor" viewBox="0 0 24 24"><path class="stroke" d="M5 4v16l4.2-3.6L11.5 21l2.6-1.2-2.3-4.5H17L5 4Z"/></symbol>
<symbol id="ic-user" viewBox="0 0 24 24"><circle class="stroke" cx="12" cy="8" r="3.4"/><path class="stroke" d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6"/></symbol>
<symbol id="ic-key" viewBox="0 0 24 24"><circle class="stroke" cx="8" cy="15" r="3.5"/><path class="stroke" d="M10.6 12.4 19 4M15.5 9l2.5 2.5M18 6.5 20.5 9"/></symbol>
<symbol id="ic-calendar" viewBox="0 0 24 24"><rect class="stroke" x="3.5" y="5" width="17" height="15" rx="2"/><path class="stroke" d="M3.5 10h17M8 3v4M16 3v4"/></symbol>
<symbol id="ic-sun" viewBox="0 0 24 24"><circle class="stroke" cx="12" cy="12" r="4"/><path class="stroke" d="M12 2v3M12 19v3M4.2 4.2l2 2M17.8 17.8l2 2M2 12h3M19 12h3M4.2 19.8l2-2M17.8 6.2l2-2"/></symbol>
<symbol id="ic-moon" viewBox="0 0 24 24"><path class="stroke" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></symbol>
<symbol id="ic-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/></symbol>
<symbol id="ic-loop" viewBox="0 0 24 24"><path class="stroke" d="M4 12a8 8 0 0 1 14-5"/><path class="stroke" d="M20 12a8 8 0 0 1-14 5"/><path class="stroke" d="M18 3v4h-4M6 21v-4h4"/></symbol>
<symbol id="ic-burger" viewBox="0 0 24 24"><path class="stroke" d="M4 7h16M4 12h16M4 17h16"/></symbol>
<symbol id="ic-close" viewBox="0 0 24 24"><path class="stroke" d="M6 6l12 12M18 6 6 18"/></symbol>
<symbol id="ic-spark" viewBox="0 0 24 24"><path d="M12 2.5 13.8 9.4 20.8 11 13.8 12.6 12 19.5 10.2 12.6 3.2 11 10.2 9.4 Z" fill="currentColor"/></symbol>
<symbol id="ic-chev" viewBox="0 0 24 24"><path class="stroke" d="m6 9 6 6 6-6"/></symbol>
<symbol id="ic-check" viewBox="0 0 24 24"><path class="stroke" d="m5 13 4.5 4.5L19 8"/></symbol>
<symbol id="ic-globe" viewBox="0 0 24 24"><circle class="stroke" cx="12" cy="12" r="8.5"/><path class="stroke" d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5Z"/></symbol>
<symbol id="ic-linkedin" viewBox="0 0 24 24"><rect class="stroke" x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8" cy="8.3" r="1.1" fill="currentColor" stroke="none"/><path class="stroke" d="M8 11v6M12 17v-4c0-1.4 1-2.3 2.2-2.3S16 11.6 16 13v4"/></symbol>
<symbol id="ic-doc" viewBox="0 0 24 24"><path class="stroke" d="M7 3h7l4 4v14H7z"/><path class="stroke" d="M9 12h6M9 16h6"/></symbol>
</svg>`;
