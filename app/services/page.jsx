import ServicesGrid from "@/components/ServicesGrid";

export const metadata = { title: "Services — Creative Line Graphics" };

export default function Services() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="mt-2 text-zinc-600">
            From print-ready design to high-quality production.
          </p>
        </div>
      </section>
      <ServicesGrid withIds />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold">Printing Methods</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Offset • Screen • DTF • Vinyl
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Finishes</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Matte/Gloss, UV, Foil, Emboss/Deboss
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Design Help</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Templates, layout & typesetting included
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
