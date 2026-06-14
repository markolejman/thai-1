"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hem", href: "#hero" },
  { label: "Meny", href: "#menu" },
  { label: "Kontakt", href: "#contact" },
  { label: "Hitta Hit", href: "#map" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div ref={menuRef} className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group max-w-[70%] sm:max-w-none"
            aria-label="Thai Take Away Vega - gå till toppen"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight font-mono truncate"
              style={{ color: "#C9A84C" }}>
              🌿 Thai Take Away Vega
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-mono font-medium tracking-wide transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: "#ADB5BD" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded transition-colors duration-200"
            style={{ color: "#ADB5BD" }}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul
            className="flex flex-col py-2 border-t"
            style={{ borderColor: "#2D2D2D" }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-mono font-medium tracking-wide transition-colors duration-200 hover:bg-zinc-800"
                  style={{ color: "#ADB5BD" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
