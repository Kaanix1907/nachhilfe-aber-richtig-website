import type { ReactNode } from "react";
import Image from "next/image";

const CARD_STYLE = {
  borderColor: "rgba(101,92,158,0.18)",
  background: "rgba(101,92,158,0.04)",
  boxShadow: "0 1px 3px rgba(101,92,158,0.08), 0 4px 16px rgba(101,92,158,0.08)",
} as const;

type FoerderCardProps = {
  logo: { src: string; alt: string; width: number };
  children: ReactNode;
};

export function FoerderCard({ logo, children }: FoerderCardProps) {
  return (
    <div className="rounded-2xl p-7 border" style={CARD_STYLE}>
      <div className="mb-5 h-10 flex items-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={40}
          className="object-contain object-left"
          style={{ height: 36, width: "auto" }}
        />
      </div>
      <p className="font-body text-muted/70 leading-[1.7] text-[0.95rem]">{children}</p>
    </div>
  );
}
