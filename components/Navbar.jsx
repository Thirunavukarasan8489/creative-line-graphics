"use client";

import { Menu, Moon, Printer, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function setTheme(mode) {
  const root = document.documentElement;
  const isDark =
    mode === "dark" ||
    (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  root.classList.toggle("dark", isDark);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setThemeState] = useState("system");

  useEffect(() => {
    const stored = localStorage.getItem("clg-theme");
    const saved =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    if (!stored) localStorage.setItem("clg-theme", "system");
    setThemeState(saved);
    setTheme(saved);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if ((localStorage.getItem("clg-theme") || "system") === "system") setTheme("system");
    };

    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cycleTheme = () => {
    const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setThemeState(next);
    localStorage.setItem("clg-theme", next);
    setTheme(next);
  };

  const themeLabel = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/70 transition-all ${
        scrolled ? "bg-background/70 shadow-lg backdrop-blur-xl" : "bg-background/95"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
            <Printer className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-extrabold tracking-wide">Creative Line Graphics</p>
            <p className="text-xs text-muted-foreground">Professional Printing</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button onClick={cycleTheme} type="button" className="theme-toggle" aria-label="Toggle theme mode">
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span>{themeLabel}</span>
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-border p-2 text-foreground md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-60 md:hidden">
          <div className="absolute inset-0 bg-slate-950/55" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 border-l border-border bg-card p-5 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold">Menu</span>
              <button
                type="button"
                className="rounded-xl border border-border p-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
            <button onClick={cycleTheme} type="button" className="theme-toggle mt-4 w-full justify-center">
              {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span>{themeLabel} mode</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
