import { FAQ_ITEMS, type FaqItem } from "@/lib/faq";
import FadeIn from "./FadeIn";

// Native <details> statt React-State: der Inhalt steht immer im DOM, auch
// zugeklappt. Genau das verlangt Google fuer FAQ-Markup — und es funktioniert
// ohne JavaScript, was zum statischen Export passt.
function Item({ item, index }: { item: FaqItem; index: number }) {
  return (
    <FadeIn delay={index * 60} direction="up">
      <details
        className="group bg-white rounded-2xl border border-gray-100 transition-[border-color,box-shadow] duration-300 open:border-primary/20"
        style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 4px 12px rgba(26,26,46,0.05)" }}
      >
        <summary className="flex items-start gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
          <h3 className="font-heading font-bold text-[1.02rem] text-dark flex-1 leading-[1.45] group-open:text-primary-deep transition-[color] duration-300" style={{ letterSpacing: "-0.01em" }}>
            {item.q}
          </h3>
          <span
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 text-primary transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white"
            style={{ background: "rgba(37,171,214,0.10)" }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2.5v9M2.5 7h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
        </summary>
        <p className="font-body text-muted/70 text-[0.95rem] leading-[1.8] px-6 pb-6 pr-16">
          {item.a}
        </p>
      </details>
    </FadeIn>
  );
}

export default function FAQ({
  items = FAQ_ITEMS,
  title = "Häufige Fragen",
  intro = "Was Eltern uns am häufigsten fragen — von den Kosten über Bildung und Teilhabe bis zum Ablauf.",
}: {
  items?: FaqItem[];
  title?: string;
  intro?: string;
}) {
  return (
    <section id="faq" className="relative py-24 md:py-28 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Fragen &amp; Antworten
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-4" style={{ letterSpacing: "-0.03em" }}>
            {title}
          </h2>
          <p className="font-body text-muted/70 text-base md:text-lg leading-[1.7]">
            {intro}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Item key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
