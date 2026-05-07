import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative section overflow-hidden">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[var(--brand)]/15 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl"></div>

      <div className="container grid items-center gap-10 md:grid-cols-2">
        <Reveal className="reveal-delay-100">
          <span className="badge">
            Your One-Stop Solution for Design & Printing
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Creative Line Graphics
          </h1>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Bill books & delivery challans, invitations & visiting cards, tags &
            labels for clothing brands, and custom T-shirt printing — with
            quality, speed & fair pricing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/order" className="btn btn-brand btn-bling floaty">
              Get a Quote
            </Link>
            <Link href="/portfolio" className="btn btn-ghost floaty">
              View Portfolio
            </Link>
          </div>
          <div className="mt-6 text-sm text-zinc-500">
            Offset & Screen Printing • Tirupur, Tamil Nadu
          </div>
        </Reveal>

        <Reveal as="div" className="reveal-delay-200">
          <div className="hover-ring rounded-2xl">
            <div className="inner p-2">
              <img
                src="/entrance.webp"
                alt="Visiting card"
                className="w-full rounded-xl floaty transition-all duration-700 hover:rotate-1 hover:scale-[1.03]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
