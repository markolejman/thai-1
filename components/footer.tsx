"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 md:py-14"
      style={{ backgroundColor: "#111111", borderTop: "1px solid #2D2D2D" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — brand */}
          <div className="text-center md:text-left">
            <p
              className="text-base font-mono font-bold mb-1"
              style={{ color: "#C9A84C" }}
            >
              🌿 Thai Take Away Vega
            </p>
            <p className="text-xs font-mono" style={{ color: "#6B7280" }}>
              Thai Take Away Vega © {new Date().getFullYear()}
            </p>
            <p
              className="text-xs font-mono mt-1"
              style={{ color: "#4B5563" }}
            >
              Äkta thaimat — tillagad med hjärta
            </p>
          </div>

          {/* Center — links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Hem", href: "#hero" },
                { label: "Meny", href: "#menu" },
                { label: "Kontakt", href: "#contact" },
                { label: "Hitta Hit", href: "#map" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-widest transition-colors duration-200 hover:text-yellow-400"
                    style={{ color: "#6B7280" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider border transition-all duration-200 hover:bg-zinc-800"
            style={{
              color: "#ADB5BD",
              borderColor: "#3A3A3A",
              borderRadius: "3px",
            }}
            aria-label="Tillbaka till toppen"
          >
            <ArrowUp size={14} />
            Tillbaka upp
          </button>
        </div>
      </div>
    </footer>
  );
}
