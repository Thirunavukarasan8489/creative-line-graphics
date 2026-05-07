import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      {/* Why choose us + Contact */}
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2 items-stretch">
          <WhyUs /> {/* <-- new fancy section */}
          <Reveal className="reveal-delay-200 h-full">
            <ContactForm compact />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-zinc-50">
        <div className="container">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold">How it works</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Share requirement", "Size, quantity, paper, finish…"],
              ["Design proof", "We prepare layout & get your approval"],
              ["Print & deliver", "Fast production & dispatch"],
            ].map(([title, desc], i) => (
              <Reveal key={i} className={`reveal-delay-${(i + 1) * 100}`}>
                <div className="hover-ring floaty">
                  <div className="inner card p-6 text-center">
                    <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-fuchsia-50 grid place-items-center text-[var(--brand)] font-bold">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ServicesGrid />
      <Gallery />
      <CTA />
    </>
  );
}
