import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const serviceLinks = [
  "Bill Books Printing",
  "Visiting Cards",
  "Flex Banners",
  "Wedding Invitations",
  "Labels & Tags",
  "Binding Works",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-section-bg">
      <div className="section-wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">Creative Line Graphics</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium printing services with quality materials, modern design, and dependable delivery.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="#" className="rounded-lg border border-border p-2" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-lg border border-border p-2" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map(([label, href]) => (
              <li key={label}><a href={href} className="transition hover:text-primary">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Contact</h4>
          <div className="mt-4 space-y-3 text-sm">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> No.63, ABT Main Road, Karuvampalayam, Tirupur - 641604</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 93442 16902</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> creativetpr@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        Copyright {new Date().getFullYear()} Creative Line Graphics. All rights reserved.
      </div>
    </footer>
  );
}