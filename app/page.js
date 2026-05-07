"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUp,
  BadgeCheck,
  BookOpen,
  Brush,
  CalendarHeart,
  CheckCircle2,
  ClipboardList,
  FileText,
  Handshake,
  ImageIcon,
  Layers,
  Mail,
  MapPin,
  Phone,
  Printer,
  ScrollText,
  Send,
  Sparkles,
  Star,
  Sticker,
  Tags,
  Truck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const services = [
  [
    ClipboardList,
    "DC & Bill Books Printing",
    "Multi-part books with clear layout and durable binding.",
  ],
  [
    BadgeCheck,
    "Visiting Cards",
    "Premium cards with matte, gloss, and textured options.",
  ],
  [
    ImageIcon,
    "Flex & Wall Posters",
    "Vivid, large-format prints for events and promotions.",
  ],
  [
    Sticker,
    "Labels Printing",
    "High-adhesion custom labels for packaging and products.",
  ],
  [
    Tags,
    "Tags Printing",
    "Retail and apparel tags with sharp color consistency.",
  ],
  [
    CalendarHeart,
    "Wedding Invitations",
    "Elegant invitation sets with custom finishing.",
  ],
  [
    FileText,
    "Letter Pad Printing",
    "Professional branded letterheads for business use.",
  ],
  [
    BookOpen,
    "Record Note Printout",
    "Academic printing with clean formatting and fast turnaround.",
  ],
  [
    Layers,
    "Binding Works",
    "Spiral, thermal, and hard binding for projects and reports.",
  ],
];

const features = [
  [
    Printer,
    "High Quality Printing",
    "Consistent colors, clear details, and premium materials.",
  ],
  [
    Truck,
    "Fast Delivery",
    "Reliable production workflow for urgent and scheduled jobs.",
  ],
  [
    Sparkles,
    "Affordable Pricing",
    "Value-driven pricing for both small and bulk orders.",
  ],
  [
    Brush,
    "Professional Design",
    "Design support to make every print look polished.",
  ],
  [
    ScrollText,
    "Custom Printing Solutions",
    "Tailored formats and finishes for your exact needs.",
  ],
  [
    Handshake,
    "Customer Satisfaction",
    "Friendly service with transparent communication.",
  ],
];

const testimonials = [
  [
    "Arun Prakash",
    "Quick response, excellent card quality, and on-time delivery.",
  ],
  [
    "Divya Enterprises",
    "Our bill books and labels always come out perfect here.",
  ],
  [
    "Meena & Family",
    "Wedding invitation prints were beautiful and very professional.",
  ],
];

const gallery = [
  ["/entrance.webp", "Creative Line Graphics storefront and sample prints"],
  ["/entrance.webp", "Visiting card print samples"],
  ["/entrance.webp", "Wedding invitation sample set"],
  ["/entrance.webp", "Flex banner production"],
  ["/entrance.webp", "Labels and tags print works"],
  ["/entrance.webp", "Poster and marketing print samples"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [showTop, setShowTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const errors = useMemo(() => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter your name";
    if (!/^\d{10,13}$/.test(form.phone.replace(/\s+/g, "")))
      next.phone = "Enter a valid phone number";
    if (!form.service.trim()) next.service = "Choose a service";
    if (form.message.trim().length < 8)
      next.message = "Message must be at least 8 characters";
    return next;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, service: true, message: true });
    if (!isValid) return;

    const text = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`,
    );
    window.open(
      `https://wa.me/919344216902?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section id="home" className="section relative overflow-hidden">
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" /> */}
        <div className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25" />
        <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl dark:bg-secondary/25" />
        <div className="section-wrap grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Trusted by businesses, students, and families
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              Professional Printing Solutions for Your Business
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              We provide high-quality printing services including visiting
              cards, flex printing, wedding invitations, labels, bill books,
              binding works, and more.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/35 transition hover:scale-[1.02]"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="rounded-xl border border-border bg-card px-6 py-3 font-semibold transition hover:border-secondary hover:text-secondary"
              >
                View Services
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="glass-card"
            >
              <Image
                src="/entrance.webp"
                alt="Creative Line Graphics print studio"
                width={900}
                height={620}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </motion.div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
              <p className="text-sm font-semibold">Fast Turnaround</p>
              <p className="text-xs text-muted-foreground">
                Reliable quality with timely delivery
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="section-wrap">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Services We Offer
          </motion.h2>
          <p className="section-text">
            Complete printing services with premium materials and attention to
            detail.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([Icon, title, desc], i) => (
              <motion.article
                key={title}
                className="glass-card group"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.05, duration: 0.45 }}
              >
                <div className="mb-4 inline-flex rounded-2xl bg-primary/12 p-3 text-primary transition group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-wrap grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">About Creative Line Graphics</h2>
            <p className="section-text">
              Creative Line Graphics is a professional printing shop providing
              high-quality printing solutions for businesses, students, and
              personal events. We focus on quality, fast delivery, and customer
              satisfaction.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["12+", "Years Experience"],
                ["3K+", "Orders Completed"],
                ["24h", "Fast Delivery"],
                ["99%", "Happy Clients"],
              ].map(([count, label]) => (
                <div key={label} className="glass-card text-center">
                  <p className="text-3xl font-extrabold text-primary">
                    {count}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card"
          >
            <Image
              src="/entrance.webp"
              alt="Team preparing printing materials"
              width={900}
              height={700}
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-wrap">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([Icon, title, desc], i) => (
              <motion.div
                key={title}
                className="glass-card"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.04 }}
              >
                <Icon className="h-7 w-7 text-secondary" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-wrap">
          <h2 className="section-title">Gallery</h2>
          <p className="section-text">
            Recent visiting cards, flex banners, invitations, labels, and print
            works.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map(([src, alt], i) => (
              <motion.button
                key={`${alt}-${i}`}
                onClick={() => setSelectedImage(src)}
                className="group overflow-hidden rounded-2xl border border-border bg-card text-left"
                whileHover={{ y: -3 }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-wrap">
          <h2 className="section-title">Testimonials</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map(([name, text]) => (
              <motion.article
                key={name}
                className="glass-card"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="mb-3 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &quot;{text}&quot;
                </p>
                <p className="mt-4 font-semibold">{name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-wrap grid gap-8 lg:grid-cols-2">
          <div className="glass-card">
            <h2 className="section-title text-2xl">Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              Reach us for pricing, design help, and order timelines.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" /> +91 93442 16902
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" /> creativetpr@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> No.63, ABT Main
                Road, Karuvampalayam, Tirupur - 641604
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/919344216902"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
              <a
                href="tel:+919344216902"
                className="rounded-xl border border-border px-4 py-2 text-sm font-semibold"
              >
                Call Now
              </a>
            </div>
            {/* <iframe
              className="mt-6 h-64 w-full rounded-2xl border border-border"
              loading="lazy"
              title="Creative Line Graphics location"
              src="https://www.google.com/maps?q=No.63,+ABT+Main+Road,+Karuvampalayam,+Tirupur+641604&output=embed"
            /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.6881200337834!2d77.3424162!3d11.095019500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9070071e4c6dd%3A0x20561467dc89fa95!2sCreative%20Line%20Graphics!5e1!3m2!1sen!2sin!4v1778136837184!5m2!1sen!2sin"
              className="mt-6 h-64 w-full rounded-2xl border border-border"
              loading="lazy"
              title="Creative Line Graphics location"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form onSubmit={onSubmit} className="glass-card">
            <h3 className="text-2xl font-bold">Request a Quote</h3>
            <div className="mt-5 space-y-4">
              {[
                ["name", "Name"],
                ["phone", "Phone Number"],
                ["service", "Service Required"],
              ].map(([key, label]) => (
                <div key={key}>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor={key}
                  >
                    {label}
                  </label>
                  <input
                    id={key}
                    value={form[key]}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, [key]: true }))
                    }
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 outline-none transition focus:border-primary"
                  />
                  {touched[key] && errors[key] ? (
                    <p className="mt-1 text-xs text-primary">{errors[key]}</p>
                  ) : null}
                </div>
              ))}
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, message: true }))
                  }
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 outline-none transition focus:border-primary"
                />
                {touched.message && errors.message ? (
                  <p className="mt-1 text-xs text-primary">{errors.message}</p>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.02]"
            >
              Send Enquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-wrap">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-primary to-secondary px-8 py-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold">
              Ready to print your next idea?
            </h2>
            <p className="mt-3 max-w-xl text-white/90">
              From business essentials to event prints, we deliver quality that
              represents your brand.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 font-semibold text-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.button
            className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/85 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="max-w-4xl"
            >
              <Image
                src={selectedImage}
                alt="Gallery preview"
                width={1400}
                height={900}
                className="h-auto w-full rounded-2xl"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-50 rounded-full bg-secondary p-3 text-white shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
