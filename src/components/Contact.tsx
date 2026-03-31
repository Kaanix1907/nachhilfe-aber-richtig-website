import { BUSINESS } from "@/lib/data";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Jetzt starten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Gratis Probestunde buchen
          </h2>
          <p className="font-body text-dark/60 text-lg max-w-2xl mx-auto">
            Kontaktiere uns — wir melden uns innerhalb eines Werktages bei dir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kontaktformular */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-heading font-bold text-2xl text-dark mb-6">
              Nachricht senden
            </h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="font-body text-dark/70 text-sm font-medium block mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="font-body text-dark/70 text-sm font-medium block mb-1.5">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+49 ..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="font-body text-dark/70 text-sm font-medium block mb-1.5">
                  Nachricht *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Welches Fach? Welche Klasse? Was sind eure Ziele?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-primary"
                />
                <span className="font-body text-dark/60 text-sm">
                  Ich stimme der Verarbeitung meiner Daten zu.*
                </span>
              </label>
              <button
                type="submit"
                className="w-full bg-primary text-white font-body font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-md mt-2"
              >
                Nachricht senden →
              </button>
            </form>
          </div>

          {/* Kontaktinfos */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-dark mb-4">
                Direkt kontaktieren
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 font-body text-dark hover:text-primary transition-colors"
                >
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    📞
                  </span>
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 font-body text-dark hover:text-primary transition-colors"
                >
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    ✉️
                  </span>
                  {BUSINESS.email}
                </a>
                <div className="flex items-center gap-3 font-body text-dark">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    📍
                  </span>
                  <div>
                    <div>{BUSINESS.addresses.lernort.street}</div>
                    <div className="text-dark/60 text-sm">
                      {BUSINESS.addresses.lernort.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-dark mb-4">
                Öffnungszeiten
              </h3>
              <div className="flex flex-col gap-2">
                {BUSINESS.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between font-body text-sm"
                  >
                    <span className="text-dark/70">{h.day}</span>
                    <span
                      className={`font-medium ${
                        h.time === "Geschlossen"
                          ? "text-dark/40"
                          : "text-dark"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
