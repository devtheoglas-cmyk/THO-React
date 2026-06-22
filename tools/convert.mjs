// One-shot converter: turns the static THO HTML pages into React (Next App Router) pages.
// Faithful 1:1 port — markup becomes JSX; the original inline scripts + script.js are
// re-run on mount via the <LegacyScripts> client component (full-page nav keeps MPA semantics).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SRC = "/Users/elchai/Projects/THO-Website-project-2026-06-15";
const APP = "/Users/elchai/Projects/THO-React/app";

// route folder -> source html  (route "" = home at app/page.js)
const PAGES = [
  { route: "", file: "index.html", name: "Home" },
  { route: "about", file: "about.html", name: "About" },
  { route: "what-we-do", file: "what-we-do.html", name: "WhatWeDo" },
  { route: "products", file: "products.html", name: "Products" },
  { route: "calendar", file: "calendar.html", name: "Calendar" },
  { route: "contact", file: "contact.html", name: "Contact" },
  { route: "product-detail", file: "product-detail.html", name: "ProductDetail" },
];

const SVG_ATTR = {
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "text-anchor": "textAnchor",
};

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// "a: b; --x: 1" -> JSX style object string
function styleToObj(css) {
  const out = [];
  for (const decl of css.split(";")) {
    const i = decl.indexOf(":");
    if (i === -1) continue;
    const rawKey = decl.slice(0, i).trim();
    let val = decl.slice(i + 1).trim();
    if (!rawKey) continue;
    val = val.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    const key = rawKey.startsWith("--") ? `'${rawKey}'` : camel(rawKey);
    out.push(`${key}: '${val}'`);
  }
  return `{{ ${out.join(", ")} }}`;
}

// rewrite asset + inter-page links inside a chunk of markup or script text
function rewritePaths(s) {
  // assets/...  ->  /assets/...   (skip if already absolute)
  s = s.replace(/(?<!\/)assets\//g, "/assets/");
  // about.html -> /about ; index.html -> /  (keeps any ?query / #hash that follows)
  s = s.replace(/\b([a-z0-9-]+)\.html\b/g, (m, base) =>
    base === "index" ? "/" : "/" + base,
  );
  s = s.replace(/\/index(?=["'#?])/g, "/"); // safety for /index leftovers
  return s;
}

function convertMarkup(html) {
  let m = html;
  // strip HTML comments
  m = m.replace(/<!--[\s\S]*?-->/g, "");
  // attribute renames
  m = m.replace(/\bclass=/g, "className=");
  m = m.replace(/(\s)for=/g, "$1htmlFor=");
  m = m.replace(/\bautocomplete=/g, "autoComplete=");
  for (const [k, v] of Object.entries(SVG_ATTR)) {
    m = m.replace(new RegExp(`\\b${k}=`, "g"), `${v}=`);
  }
  // paths (before style conversion so url(assets/..) inside styles is caught too)
  m = rewritePaths(m);
  // style="" -> style={{ }}
  m = m.replace(/style="([^"]*)"/g, (_, css) => `style=${styleToObj(css)}`);
  return m.trim();
}

// pull out <script> blocks. external (src=script.js) -> dropped (handled globally).
// inline -> returned in document order, with paths rewritten.
function extractScripts(body) {
  const scripts = [];
  const markup = body.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/g,
    (_, attrs, inner) => {
      if (/\bsrc=/.test(attrs)) return ""; // external script.js -> global
      scripts.push(rewritePaths(inner.trim()));
      return "";
    },
  );
  return { markup, scripts };
}

function build(page) {
  const html = readFileSync(`${SRC}/${page.file}`, "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1];
  const { markup, scripts } = extractScripts(body);
  const jsx = convertMarkup(markup);

  const scriptsProp = scripts.length
    ? `\n      pageScripts={[\n${scripts
        .map((s) => "        " + JSON.stringify(s))
        .join(",\n")}\n      ]}`
    : "";

  const file = `// Auto-converted from ${page.file} — faithful 1:1 port of the static THO build.
import LegacyScripts from "@/app/components/LegacyScripts";

export default function ${page.name}Page() {
  return (
    <>
${jsx
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
      <LegacyScripts${scriptsProp} />
    </>
  );
}
`;

  const dir = page.route ? `${APP}/${page.route}` : APP;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/page.js`, file);
  console.log(
    `${(page.route || "/").padEnd(16)} <- ${page.file}  (${scripts.length} inline script${scripts.length === 1 ? "" : "s"})`,
  );
}

PAGES.forEach(build);
console.log("done");
