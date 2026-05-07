import Reveal from "./Reveal";

export default function Gallery() {
  // replace with real images later
  const imgs = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    "https://images.unsplash.com/photo-1514756331093-4c3b571d7b1a",
    "https://images.unsplash.com/photo-1503602642458-232111445657",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1520974735194-3d2c6dc8e9f5",
    "https://images.unsplash.com/photo-1487611459768-bd414656ea10",
  ];
  return (
    <section className="section bg-zinc-50">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Portfolio / Gallery
          </h2>
        </Reveal>
        <Reveal className="reveal-delay-100">
          <p className="mt-2 text-zinc-600">
            A glimpse of our recent print work.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imgs.map((src, i) => (
            <Reveal key={i} className={`reveal-delay-${((i % 3) + 1) * 100}`}>
              <div className="overflow-hidden rounded-xl border bg-white floaty">
                <img
                  src={`${src}?auto=format&fit=crop&w=1200&q=70`}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-[.5deg]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
