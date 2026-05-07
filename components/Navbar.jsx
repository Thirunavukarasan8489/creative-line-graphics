"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, Transition, Popover } from "@headlessui/react";
import { Menu, X, Printer, ChevronDown, ArrowRight, Phone } from "lucide-react";

/* Buttons */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition";
const btnPrimary = `${btnBase} bg-fuchsia-700 text-white hover:bg-fuchsia-800 active:translate-y-[1px]`;
const btnGhost = `${btnBase} border border-zinc-200 text-zinc-900 hover:bg-zinc-50 active:translate-y-[1px]`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Services",
      children: [
        { href: "/services#bill-books", label: "Bill Books & DC" },
        { href: "/services#invites", label: "Invitations & Visiting Cards" },
        { href: "/services#labels", label: "Tags & Labels (Clothing)" },
        { href: "/services#tshirts", label: "Custom T-Shirt Printing" },
      ],
    },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-fuchsia-700 to-sky-500">
            <Printer className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-wide text-zinc-900">
              Creative Line Graphics
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              Design & Printing
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((item) =>
            item.children ? (
              <Popover key={item.label} className="relative">
                {({ open: popOpen }) => (
                  <>
                    {/* Click to open — prevents navigation */}
                    <Popover.Button
                      className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1 ${
                        popOpen
                          ? "bg-zinc-100 text-zinc-900"
                          : "text-zinc-800 hover:bg-zinc-100"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          popOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-0 z-50 mt-2 w-80 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                          >
                            {c.label}
                          </Link>
                        ))}
                        <div className="mt-1 border-t border-zinc-100 pt-2">
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-fuchsia-700 hover:bg-fuchsia-50"
                          >
                            View all services →
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            )
          )}

          <div className="ml-2 flex items-center gap-2">
            <Link href="/order" className={btnPrimary}>
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/919344216902"
              target="_blank"
              className={btnGhost}
            >
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 ring-1 ring-zinc-200 text-zinc-900 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer (unchanged) */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-black/50" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition transform ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition transform ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 h-screen w-full max-w-sm overflow-y-auto border-l border-zinc-200 bg-white shadow-xl">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-semibold tracking-widest text-zinc-700">
                  MENU
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 ring-1 ring-zinc-200 text-zinc-900"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="px-2">
                <nav className="px-2">
                  {links.map((item) =>
                    item.children ? (
                      <details key={item.label} className="group rounded-lg">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-zinc-900 hover:bg-zinc-50">
                          <span className="font-semibold">{item.label}</span>
                          <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                        </summary>
                        <div className="pb-2 pl-2">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-zinc-100 px-3 py-3 font-semibold text-zinc-900 hover:bg-zinc-50"
                      >
                        {item.label}
                      </Link>
                    )
                  )}

                  <div className="p-3">
                    <Link
                      href="/order"
                      onClick={() => setOpen(false)}
                      className={`${btnPrimary} w-full`}
                    >
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="https://wa.me/919344216902"
                      target="_blank"
                      onClick={() => setOpen(false)}
                      className={`${btnGhost} mt-2 w-full`}
                    >
                      <Phone className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>

                  <div className="mx-3 mb-3 rounded-lg bg-zinc-50 p-3 text-xs text-zinc-700">
                    <p>
                      <strong>Hours:</strong> 10:00–20:00 (Mon–Sat)
                    </p>
                    <p className="mt-1">
                      <strong>Support:</strong> Calls & WhatsApp
                    </p>
                  </div>

                  <div className="border-t border-zinc-200 px-4 py-3 text-center text-xs text-zinc-500">
                    © {new Date().getFullYear()} Creative Line Graphics
                  </div>
                </nav>
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
