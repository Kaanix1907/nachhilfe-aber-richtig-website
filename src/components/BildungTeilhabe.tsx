"use client";

import Image from "next/image";

export default function BildungTeilhabe() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">

        {/* Überschrift */}
        <div className="mb-10">
          <span className="inline-block bg-primary/8 text-primary font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Bildung &amp; Teilhabe
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark mb-3" style={{ letterSpacing: "-0.03em" }}>
            Nachhilfe kostenlos — für berechtigte Familien
          </h2>
          <p className="font-body text-muted/65 text-lg leading-[1.7] max-w-2xl">
            Über das staatliche Förderprogramm <strong className="text-dark font-semibold">Bildung &amp; Teilhabe</strong> können
            berechtigte Familien unsere Nachhilfe vollständig kostenlos in Anspruch nehmen.
          </p>
        </div>

        {/* Zwei Karten */}
        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Jobcenter */}
          <div
            className="rounded-2xl p-7 border"
            style={{
              borderColor: "rgba(30,40,100,0.10)",
              background: "rgba(30,40,100,0.025)",
              boxShadow: "0 1px 3px rgba(30,40,100,0.06), 0 4px 16px rgba(30,40,100,0.06)",
            }}
          >
            <div className="mb-5 h-10 flex items-center">
              <Image
                src="/logo-jobcenter.jpeg"
                alt="Jobcenter Duisburg"
                width={140}
                height={40}
                className="object-contain object-left"
                style={{ height: 36, width: "auto" }}
              />
            </div>
            <p className="font-body text-muted/70 leading-[1.7] text-[0.95rem]">
              Familien, die <strong className="text-dark font-semibold">Bürgergeld</strong> beziehen,
              sind über das Jobcenter Duisburg für Bildung &amp; Teilhabe berechtigt und können
              unsere Nachhilfe <strong className="text-dark font-semibold">kostenfrei</strong> nutzen.
            </p>
          </div>

          {/* Stadt Duisburg */}
          <div
            className="rounded-2xl p-7 border"
            style={{
              borderColor: "rgba(30,40,100,0.10)",
              background: "rgba(30,40,100,0.025)",
              boxShadow: "0 1px 3px rgba(30,40,100,0.06), 0 4px 16px rgba(30,40,100,0.06)",
            }}
          >
            <div className="mb-5 h-10 flex items-center">
              <Image
                src="/logo-stadt-duisburg.png"
                alt="Stadt Duisburg"
                width={120}
                height={40}
                className="object-contain object-left"
                style={{ height: 36, width: "auto" }}
              />
            </div>
            <p className="font-body text-muted/70 leading-[1.7] text-[0.95rem]">
              Wer <strong className="text-dark font-semibold">Wohngeld</strong> oder den{" "}
              <strong className="text-dark font-semibold">Kinderzuschlag</strong> von der Stadt
              Duisburg erhält, hat ebenfalls Anspruch auf Bildung &amp; Teilhabe — und damit
              auf kostenfreie Nachhilfe.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-white px-6 py-3 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #25abd6 0%, #1d8fb5 100%)",
              boxShadow: "0 4px 14px rgba(37,171,214,0.30)",
            }}
          >
            Jetzt anfragen
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="font-body text-sm text-muted/55">
            Wir helfen euch, den Antrag unkompliziert zu stellen.
          </p>
        </div>

      </div>
    </section>
  );
}
