import Reveal from "./Reveal";
import {
  SparklesIcon,
  BoltIcon,
  SwatchIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Premium print quality",
    desc: "Offset & screen printing with crisp details and color accuracy.",
    Icon: SparklesIcon,
  },
  {
    title: "Quick turnarounds",
    desc: "Same-day proofs and efficient production for urgent jobs.",
    Icon: BoltIcon,
  },
  {
    title: "Custom design support",
    desc: "Layouts, typesetting, and brand consistency included.",
    Icon: SwatchIcon,
  },
  {
    title: "Transparent pricing",
    desc: "Clear estimates that fit bulk and retail orders alike.",
    Icon: CurrencyRupeeIcon,
  },
];

export default function WhyUs() {
  return (
    <Reveal className="reveal-delay-100 h-full">
      {/* fill the column */}
      <div className="relative card h-full overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-fuchsia-50/70 to-sky-50/60">
        {/* soft decorative blobs */}
        <div className="pointer-events-none absolute -top-14 -left-10 h-48 w-48 rounded-full bg-[var(--brand)]/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-14 -right-10 h-48 w-48 rounded-full bg-[var(--accent)]/20 blur-2xl" />

        <div className="relative">
          <h3 className="text-xl font-semibold">Why choose us?</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Quality prints, friendly design help, and reliable delivery — every
            time.
          </p>

          {/* Equal-height tiles */}
          <div className="mt-6 grid gap-4 sm:grid-cols-1 items-stretch [grid-auto-rows:1fr]">
            {features.map(({ title, desc, Icon }, i) => (
              <Reveal
                key={i}
                className={`reveal-delay-${(i + 1) * 100} h-full`}
              >
                <div className="hover-ring floaty rounded-2xl h-full">
                  <div className="inner rounded-2xl border border-zinc-200 bg-white/90 p-5 h-full flex">
                    <div className="flex items-start gap-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-fuchsia-50 shrink-0">
                        <Icon className="h-6 w-6 text-[var(--brand)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold leading-tight">{title}</h4>
                        <p className="mt-1 text-sm text-zinc-600">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* trust badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge">Design proof included</span>
            <span className="badge">Foil / UV / Emboss options</span>
            <span className="badge">Bulk & retail friendly</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
