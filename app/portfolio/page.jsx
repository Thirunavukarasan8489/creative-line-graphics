import Gallery from "@/components/Gallery";

export const metadata = { title: "Portfolio — Creative Line Graphics" };

export default function Portfolio() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Portfolio / Gallery</h1>
          <p className="mt-2 text-zinc-600">Selected print samples.</p>
        </div>
      </section>
      <Gallery />
    </>
  );
}
