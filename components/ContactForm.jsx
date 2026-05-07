"use client";

import { useState } from "react";

export default function ContactForm({
  heading = "Get a fast printing quote",
  subheading = "Share size, quantity, paper/stock and finish — we’ll reply quickly with price & timeline.",
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Inquiry — Creative Line Graphics");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:creativetpr@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputBase =
    "w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] bg-white";

  const ids = {
    name: "cf-name",
    email: "cf-email",
    phone: "cf-phone",
    message: "cf-message",
  };

  return (
    <form
      onSubmit={submit}
      className="card h-full flex flex-col p-0 overflow-hidden"
    >
      {/* Top banner */}
      <div className="bg-gradient-to-r from-fuchsia-600/15 via-fuchsia-400/10 to-sky-500/15 p-6 border-b border-zinc-200">
        <span className="inline-flex items-center rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
          Quick Estimate
        </span>
        <h3 className="mt-3 text-xl font-bold text-zinc-900">{heading}</h3>
        <p className="mt-1 text-sm text-zinc-600">{subheading}</p>
      </div>

      {/* Fields */}
      <div className="p-6 grid gap-4 sm:grid-cols-2 grow">
        <div className="space-y-1">
          <label
            htmlFor={ids.name}
            className="text-xs font-medium text-zinc-600"
          >
            Your Name
          </label>
          <input
            id={ids.name}
            required
            className={inputBase}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor={ids.email}
            className="text-xs font-medium text-zinc-600"
          >
            Email
          </label>
          <input
            id={ids.email}
            type="email"
            required
            className={inputBase}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label
            htmlFor={ids.phone}
            className="text-xs font-medium text-zinc-600"
          >
            Phone / WhatsApp
          </label>
          <input
            id={ids.phone}
            required
            className={inputBase}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label
            htmlFor={ids.message}
            className="text-xs font-medium text-zinc-600"
          >
            Project details
          </label>
          <textarea
            id={ids.message}
            rows={5}
            placeholder="Eg. 1000 bill books, A5, 2-part NCR, serial number, UV finish..."
            className={inputBase}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
      </div>

      {/* Actions & badges */}
      <div className="px-6 pb-5">
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-brand btn-bling" type="submit">
            Send Request
          </button>
          <a className="btn btn-ghost" href="/catalog.pdf" download>
            Download Catalog
          </a>
          <a
            href="https://wa.me/919344216902"
            target="_blank"
            className="btn btn-ghost"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="badge">Design proof included</span>
          <span className="badge">Foil / UV / Emboss options</span>
          <span className="badge">Bulk & retail friendly</span>
        </div>

        <p className="mt-3 text-[11px] text-zinc-500">
          Prefer a call? Dial{" "}
          <a className="underline" href="tel:+919344216902">
            +91 93442 16902
          </a>{" "}
          or{" "}
          <a className="underline" href="tel:+918489902902">
            +91 84899 02902
          </a>
          .
        </p>
      </div>
    </form>
  );
}
