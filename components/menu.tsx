"use client";

import { useState } from "react";
import { menuData, proteinOptions, type MenuCategory } from "@/lib/menu-data";

const tagStyles: Record<string, { bg: string; text: string; label: string }> = {
  spicy: { bg: "#9B2335", text: "#F8F9FA", label: "Stark" },
  vegan: { bg: "#2D6A4F", text: "#F8F9FA", label: "Vegetarisk" },
  popular: { bg: "#C9A84C", text: "#1A1A1A", label: "Populär" },
};

function MenuItemCard({
  name,
  description,
  price,
  tag,
}: {
  name: string;
  description: string;
  price: string;
  tag?: "spicy" | "vegan" | "popular";
}) {
  return (
    <div
      className="flex items-start justify-between gap-4 py-4 border-b last:border-b-0"
      style={{ borderColor: "#DEE2E6" }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-sm font-mono font-semibold" style={{ color: "#1A1A1A" }}>
            {name}
          </h3>
          {tag && (
            <span
              className="text-[10px] font-mono font-bold px-1.5 py-0.5 uppercase tracking-wider"
              style={{
                backgroundColor: tagStyles[tag].bg,
                color: tagStyles[tag].text,
                borderRadius: "2px",
              }}
            >
              {tagStyles[tag].label}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs font-mono leading-relaxed" style={{ color: "#6B7280" }}>
            {description}
          </p>
        )}
      </div>
      <span
        className="text-sm font-mono font-bold whitespace-nowrap mt-0.5"
        style={{ color: "#C9A84C" }}
      >
        {price}
      </span>
    </div>
  );
}

function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div
      className="rounded p-5 md:p-6"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E9ECEF" }}
    >
      <h2
        className="text-base font-mono font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
        style={{ color: "#1A1A1A" }}
      >
        <span>{category.emoji}</span>
        <span>{category.name}</span>
      </h2>
      <div>
        {category.items.map((item) => (
          <MenuItemCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "Alla" },
    ...menuData.map((c) => ({ id: c.id, label: c.name })),
  ];

  const displayed =
    activeTab === "all" ? menuData : menuData.filter((c) => c.id === activeTab);

  return (
    <section id="menu" className="py-16 md:py-24" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <p
            className="text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Vad vi erbjuder
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold font-mono"
            style={{ color: "#1A1A1A" }}
          >
            Vår Meny
          </h2>
          <div className="mt-3 w-12 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
        </div>

        {/* Lunch banner */}
        <div
          className="rounded mb-8 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ backgroundColor: "#1A1A1A", border: "1px solid #333" }}
        >
          <div>
            <p
              className="text-xs font-mono font-semibold tracking-[0.15em] uppercase mb-1"
              style={{ color: "#C9A84C" }}
            >
              ☀️ Lunch
            </p>
            <p className="text-sm font-mono font-bold" style={{ color: "#F8F9FA" }}>
              Vardagar 11:00 – 14:00
            </p>
            <p className="text-xs font-mono mt-1" style={{ color: "#ADB5BD" }}>
              Välj Kyckling, Fläskkött eller Biff • Valfri rätt från Curry- eller Wokrätter
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="rounded px-5 py-3 text-center"
              style={{ backgroundColor: "#C9A84C" }}
            >
              <span className="block text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: "#1A1A1A" }}>
                Inkl. dricka
              </span>
              <span className="block text-2xl font-mono font-bold" style={{ color: "#1A1A1A" }}>
                95:-
              </span>
            </div>
          </div>
        </div>

        {/* Protein pricing table */}
        <div
          className="rounded mb-8 p-5 md:p-6"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E9ECEF" }}
        >
          <h3
            className="text-xs font-mono font-bold uppercase tracking-widest mb-4"
            style={{ color: "#6B7280" }}
          >
            Välj Kött / Skaldjur — rätterna 1–24
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {proteinOptions.map((p) => (
              <div
                key={p.name}
                className="rounded px-3 py-3 text-center"
                style={{ backgroundColor: "#F8F9FA", border: "1px solid #E9ECEF" }}
              >
                <span
                  className="block text-xs font-mono font-semibold mb-1"
                  style={{ color: "#1A1A1A" }}
                >
                  {p.name}
                </span>
                <span
                  className="block text-base font-mono font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  {p.price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs font-mono" style={{ color: "#ADB5BD" }}>
            Välj först kött/skaldjur och sedan tillagning efter smak/tillbehör.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mb-6 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? "#1A1A1A" : "#E9ECEF",
                    color: isActive ? "#C9A84C" : "#6B7280",
                    borderRadius: "3px",
                    border: isActive ? "1px solid #1A1A1A" : "1px solid #CED4DA",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tag legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.entries(tagStyles).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span
                className="text-[10px] font-mono font-bold px-1.5 py-0.5 uppercase tracking-wider"
                style={{
                  backgroundColor: val.bg,
                  color: val.text,
                  borderRadius: "2px",
                }}
              >
                {val.label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <span
              className="text-[10px] font-mono font-bold px-1.5 py-0.5 uppercase tracking-wider"
              style={{ backgroundColor: "#E9ECEF", color: "#6B7280", borderRadius: "2px" }}
            >
              Stark → Mycket Stark: fråga personalen
            </span>
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {displayed.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        <p className="mt-8 text-xs font-mono text-center" style={{ color: "#ADB5BD" }}>
          Alla rätter kan anpassas efter allergier och önskemål. Fråga personalen.
          <br />
          Thai Take Away Vega · Nynäsvägen 3F, 136 47 Haninge · Tel. 0760-560777
        </p>
      </div>
    </section>
  );
}
