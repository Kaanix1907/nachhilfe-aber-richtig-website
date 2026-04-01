"use client";

import Image from "next/image";
import { useState } from "react";
import { BUSINESS } from "@/lib/data";

const navLinks = [
  { href: "#hero", label: "Startseite" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md"
      style={{
        boxShadow: "0 1px 0 rgba(26,26,46,0.08), 0 4px 24px rgba(26,26,46,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={BUSINESS.name}
            width={120}
            height={48}
            className="object-contain h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-muted hover:text-primary transition-[color] duration-200 font-medium text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
            boxShadow: "0 2px 10px rgba(0,170,0,0.35), 0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Gratis Probestunde
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-dark rounded-lg transition-[background-color] duration-200 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          aria-label="Menü öffnen"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="5" width="16" height="1.5" rx="0.75" fill="currentColor"
              className={`transition-[transform,opacity] duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
            />
            <rect x="2" y="9.25" width="16" height="1.5" rx="0.75" fill="currentColor"
              className={`transition-[opacity] duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <rect x="2" y="13.5" width="16" height="1.5" rx="0.75" fill="currentColor"
              className={`transition-[transform,opacity] duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-muted hover:text-primary transition-[color] duration-200 font-medium text-base py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center text-white font-body font-semibold px-5 py-3 rounded-full mt-2 transition-[transform,box-shadow] duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
              boxShadow: "0 2px 10px rgba(0,170,0,0.35)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Gratis Probestunde buchen
          </a>
        </div>
      )}
    </header>
  );
}
