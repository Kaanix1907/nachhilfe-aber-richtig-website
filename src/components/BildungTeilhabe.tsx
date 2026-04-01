"use client";

// Platzhalter-Logos bis echte Dateien in /public/ liegen
const JobcenterLogo = () => (
  <div className="flex items-center gap-2">
    <div
      className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shrink-0"
      style={{ background: "linear-gradient(135deg, #004B87 0%, #0069B4 100%)" }}
    >
      JC
    </div>
    <div>
      <div className="font-body font-bold text-[0.7rem] leading-tight" style={{ color: "#004B87" }}>Jobcenter</div>
      <div className="font-body text-[0.65rem] leading-tight text-gray-500">Duisburg</div>
    </div>
  </div>
);

const StadtDuisburgLogo = () => (
  <div className="flex items-center gap-2">
    <div
      className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shrink-0"
      style={{ background: "linear-gradient(135deg, #C8102E 0%, #A50D25 100%)" }}
    >
      DU
    </div>
    <div>
      <div className="font-body font-bold text-[0.7rem] leading-tight" style={{ color: "#C8102E" }}>Stadt Duisburg</div>
      <div className="font-body text-[0.65rem] leading-tight text-gray-500">Bildung &amp; Teilhabe</div>
    </div>
  </div>
);

export default function BildungTeilhabe() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">

        {/* Sticker-Zeile */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest mr-1">
            Gefördert durch
          </span>
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border bg-white"
            style={{ borderColor: "rgba(0,75,135,0.2)", boxShadow: "0 1px 4px rgba(0,75,135,0.08)" }}
          >
            <JobcenterLogo />
          </div>
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border bg-white"
            style={{ borderColor: "rgba(200,16,46,0.2)", boxShadow: "0 1px 4px rgba(200,16,46,0.08)" }}
          >
            <StadtDuisburgLogo />
          </div>
        </div>

        {/* Inhalt */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Jobcenter */}
          <div
            className="rounded-2xl p-7 border"
            style={{
              borderColor: "rgba(0,75,135,0.12)",
              background: "linear-gradient(135deg, rgba(0,75,135,0.03) 0%, rgba(0,105,180,0.05) 100%)",
              boxShadow: "0 1px 3px rgba(0,75,135,0.06), 0 4px 16px rgba(0,75,135,0.06)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: "linear-gradient(135deg, #004B87 0%, #0069B4 100%)" }}
              >
                JC
              </div>
              <h3 className="font-heading font-bold text-lg text-dark">Jobcenter Duisburg</h3>
            </div>
            <p className="font-body text-muted/70 leading-[1.7] text-[0.95rem]">
              Familien, die <strong className="text-dark font-semibold">Bürgergeld</strong> beziehen,
              sind automatisch über das Jobcenter Duisburg für Bildung &amp; Teilhabe berechtigt —
              und können unsere Nachhilfe <strong className="text-dark font-semibold">kostenfrei</strong> in Anspruch nehmen.
            </p>
          </div>

          {/* Stadt Duisburg */}
          <div
            className="rounded-2xl p-7 border"
            style={{
              borderColor: "rgba(200,16,46,0.12)",
              background: "linear-gradient(135deg, rgba(200,16,46,0.03) 0%, rgba(165,13,37,0.05) 100%)",
              boxShadow: "0 1px 3px rgba(200,16,46,0.06), 0 4px 16px rgba(200,16,46,0.06)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: "linear-gradient(135deg, #C8102E 0%, #A50D25 100%)" }}
              >
                DU
              </div>
              <h3 className="font-heading font-bold text-lg text-dark">Stadt Duisburg</h3>
            </div>
            <p className="font-body text-muted/70 leading-[1.7] text-[0.95rem]">
              Wer <strong className="text-dark font-semibold">Wohngeld</strong> oder{" "}
              <strong className="text-dark font-semibold">Kinderzuschlag</strong> von der Stadt Duisburg erhält,
              hat ebenfalls Anspruch auf Bildung &amp; Teilhabe — inklusive kostenfreier Nachhilfe.
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
