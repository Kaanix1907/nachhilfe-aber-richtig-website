"use client";

import { SERVICES } from "@/lib/data";

const serviceIcons: Record<string, JSX.Element> = {
  gruppe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17 20c0-2.21-2.24-4-5-4s-5 1.79-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 20c0-1.86-1.79-3.37-4.17-3.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 20c0-1.86 1.79-3.37 4.17-3.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  einzel: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 5l1.5 1.5L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  online: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 9l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  whatsapp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5 8.43 8.43 0 01-4.28-1.15L3 21l2.23-5.1A8.5 8.5 0 1121 11.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10.5s.5-1 1.5-1 1.5 1 1.5 1-.5 2 0 2.5 2 1.5 2 1.5 1-.5 1-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="leistungen" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/8 text-primary font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Was wir anbieten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Unsere Leistungen
          </h2>
          <p className="font-body text-muted/70 text-lg max-w-xl mx-auto leading-[1.7]">
            Wir bieten die passende Lösung für jedes Kind — flexibel, fair und
            mit echtem Mehrwert.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 cursor-default"
              style={{
                boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 4px 12px rgba(26,26,46,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 4px rgba(26,26,46,0.08), 0 8px 24px rgba(37,171,214,0.12), 0 24px 40px rgba(26,26,46,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,171,214,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 3px rgba(26,26,46,0.06), 0 4px 12px rgba(26,26,46,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgb(243,244,246)";
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-primary transition-[background-color] duration-300 group-hover:bg-primary group-hover:text-white"
                style={{ background: "rgba(37,171,214,0.10)" }}
              >
                {serviceIcons[service.id]}
              </div>

              <h3 className="font-heading font-bold text-lg text-dark mb-2.5 group-hover:text-primary transition-[color] duration-300">
                {service.title}
              </h3>
              <p className="font-body text-muted/65 text-sm leading-[1.7]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
