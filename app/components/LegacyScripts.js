"use client";

import { useEffect } from "react";
import legacyScript from "./legacyScript";

// Re-runs the original script.js (menu, tilt, scroll reveals, filters) plus any
// page-specific inline scripts, after the page markup has mounted. Each script is
// injected as a real <script> element so it executes in global scope exactly like
// the static site. Wrapped in an IIFE so top-level `const`s don't leak or clash.
export default function LegacyScripts({ pageScripts = [] }) {
  useEffect(() => {
    const sources = [legacyScript, ...pageScripts];
    const nodes = sources.map((code) => {
      const el = document.createElement("script");
      el.textContent = `;(function(){${code}\n})();`;
      document.body.appendChild(el);
      return el;
    });
    return () => nodes.forEach((n) => n.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
