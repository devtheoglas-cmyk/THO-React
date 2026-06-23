"use client";

// Our Range — surfaces the catalogue's Summary stats, Category Guide, and a
// dropdown-driven browser over all 92 products (Dropdown Lists put to use).
// Normal-flow / responsive: deliberately NOT a fig-stage, so it can't disturb
// the Figma-positioned pages.
import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES, SUMMARY, DROPDOWNS } from "@/app/data/catalogue";
import SiteFooter from "@/app/components/SiteFooter";

export default function RangePage() {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [origin, setOrigin] = useState("");
  const [availability, setAvailability] = useState("");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (!category || p.category === category) &&
          (!type || p.type === type) &&
          (!origin || p.origin === origin) &&
          (!availability || p.availability === availability) &&
          (!q || p.name.toLowerCase().includes(q.toLowerCase()))
      ),
    [category, type, origin, availability, q]
  );

  const stats = [
    { n: SUMMARY.total, l: "Products" },
    { n: SUMMARY.categories, l: "Categories" },
    { n: SUMMARY.origins, l: "Origins" },
    { n: SUMMARY.local, l: "Locally grown" },
    { n: SUMMARY.import, l: "Imported" },
  ];

  return (
    <>
      <main className="range-page" aria-label="The House of Organic — Our Range">
        <header className="rg-head">
          <a className="rg-logo" href="/" aria-label="The House of Organic — home">
            <img src="/assets/home-logo.png" alt="The House of Organic" />
          </a>
          <nav className="rg-nav" aria-label="Primary">
            <a href="/products">Products</a>
            <a href="/calendar">Calendar</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="rg-hero">
          <h1>Our Organic Range</h1>
          <p>
            {SUMMARY.total} organic products across {SUMMARY.categories} categories, sourced from{" "}
            {SUMMARY.origins} origins — {SUMMARY.local} locally grown on UAE farms and {SUMMARY.import}{" "}
            sourced through trusted global partners.
          </p>
          <div className="rg-stats">
            {stats.map((s) => (
              <div className="rg-stat" key={s.l}>
                <b>{s.n}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rg-section" aria-label="Category guide">
          <h2>Category Guide</h2>
          <div className="rg-catgrid">
            {CATEGORIES.map((c) => {
              const count = SUMMARY.byCategory.find((x) => x.name === c.name)?.count;
              return (
                <article className="rg-catcard" key={c.name}>
                  <h3>
                    {c.name}
                    {count != null && <span className="rg-count">{count}</span>}
                  </h3>
                  <p>{c.includes}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rg-section" aria-label="Browse products">
          <h2>Browse All Products</h2>
          <div className="rg-filters">
            <input
              type="search"
              placeholder="Search products…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search products"
            />
            <Select label="Category" value={category} onChange={setCategory} options={DROPDOWNS.categories} />
            <Select label="Type" value={type} onChange={setType} options={DROPDOWNS.types} />
            <Select label="Origin" value={origin} onChange={setOrigin} options={DROPDOWNS.origins} />
            <Select label="Availability" value={availability} onChange={setAvailability} options={DROPDOWNS.availability} />
            {(category || type || origin || availability || q) && (
              <button
                className="rg-clear"
                type="button"
                onClick={() => {
                  setCategory("");
                  setType("");
                  setOrigin("");
                  setAvailability("");
                  setQ("");
                }}
              >
                Clear
              </button>
            )}
          </div>

          <p className="rg-resultcount">
            Showing {filtered.length} of {PRODUCTS.length} products
          </p>

          <div className="rg-prodgrid">
            {filtered.map((p) => (
              <a className="rg-prod" key={p.slug} href={`/product-detail?p=${p.slug}`}>
                <div className="rg-prod-top">
                  <h3>{p.name}</h3>
                  <span className={`rg-pill ${p.type === "Local" ? "is-local" : "is-import"}`}>{p.type}</span>
                </div>
                <p className="rg-prod-meta">
                  {p.category} · {p.origin}
                </p>
                <p className="rg-prod-desc">{p.description}</p>
                <p className="rg-prod-foot">
                  <span>{p.taste}</span>
                  <span>{p.availability}</span>
                </p>
              </a>
            ))}
            {filtered.length === 0 && <p className="rg-empty">No products match those filters.</p>}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="rg-select">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
