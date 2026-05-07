import Reveal from "./Reveal";
import {
  TagIcon,
  TicketIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    id: "bill-books",
    title: "Bill Books & Delivery Challans",
    desc: "Multi-part, serial-numbered, custom sizes & bindings. Clean layouts for GST.",
    icon: ClipboardDocumentListIcon,
  },
  {
    id: "invites",
    title: "Invitations & Visiting Cards",
    desc: "Premium stocks, special finishes (UV, foil, emboss) & elegant typography.",
    icon: TicketIcon,
  },
  {
    id: "labels",
    title: "Tags & Labels (Clothing)",
    desc: "Durable, color-accurate tags & adhesive labels tailored for apparel brands.",
    icon: TagIcon,
  },
  {
    id: "tshirts",
    title: "Custom T-Shirt Printing",
    desc: "Screen, DTF & vinyl. Bulk & on-demand with vibrant, lasting prints.",
    icon: SparklesIcon,
  },
];

export default function ServicesGrid({ withIds = false }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
        </Reveal>
        <Reveal className="reveal-delay-100">
          <p className="mt-2 text-zinc-600">
            Quality printing with custom designs and quick turnaround.
          </p>
        </Reveal>

        {/* items-stretch ensures tracks are the same height; each child fills with h-full */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 items-stretch">
          {items.map(({ id, title, desc, icon: Icon }, i) => (
            <Reveal key={id} className={`reveal-delay-${(i + 1) * 100} h-full`}>
              {" "}
              {/* NEW: h-full */}
              <div
                id={withIds ? id : undefined}
                className="hover-ring floaty h-full" /* NEW: h-full on wrapper */
              >
                <div className="inner card h-full p-6 flex flex-col">
                  {" "}
                  {/* NEW: h-full + flex */}
                  <div className="flex items-start gap-4 grow">
                    <div className="rounded-2xl p-3 bg-fuchsia-50 shrink-0">
                      <Icon className="h-6 w-6 text-[var(--brand)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group">
                        <span className="group-hover:text-[var(--brand)] transition-colors">
                          {title}
                        </span>
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
