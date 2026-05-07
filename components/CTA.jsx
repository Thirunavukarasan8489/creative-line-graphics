import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section">
      <Reveal className="reveal-delay-100">
        <div className="container card p-8 sm:p-10 text-center bg-gradient-to-tr from-fuchsia-50 to-sky-50">
          <h3 className="text-2xl font-bold">Need prints fast?</h3>
          <p className="mt-2 text-zinc-600">
            Share your requirement — we’ll respond with a quick estimate and
            timeline.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link href="/order" className="btn btn-brand btn-bling floaty">
              Get a Quote
            </Link>
            <a
              href="https://wa.me/919344216902"
              target="_blank"
              className="btn btn-ghost floaty"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
