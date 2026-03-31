import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Was wir anbieten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Unsere Leistungen
          </h2>
          <p className="font-body text-dark/60 text-lg max-w-2xl mx-auto">
            Wir bieten die passende Lösung für jedes Kind — flexibel, fair und
            mit echtem Mehrwert.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading font-bold text-xl text-dark group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-dark/60 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stay in School Banner */}
        <div className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl">🏫</div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-dark mb-2">
              Stay in School — für Schulen & Vereine
            </h3>
            <p className="font-body text-dark/70">
              Unser innovatives Programm ist durch das Bildungspaket des
              Bundesministeriums{" "}
              <strong className="text-accent">vollständig kostenlos</strong>{" "}
              für Schulen und Vereine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
