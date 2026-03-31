import { UPSPS } from "@/lib/data";

export default function USPs() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Warum Nachhilfe, aber richtig!?
          </h2>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
            Wir gehen weit über das schlichte Notenverbessern hinaus — und
            begleiten dein Kind ganzheitlich.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {UPSPS.map((usp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white font-bold font-body">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {usp.title}
                  </h3>
                  <p className="font-body text-white/70 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
