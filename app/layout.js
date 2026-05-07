import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creative Line Graphics | Designing & Printing Services",
  description:
    "Your one-stop solution for bill books, invitations, visiting cards, labels, tags, and custom T-shirt printing in Tirupur.",
  openGraph: {
    title: "Creative Line Graphics",
    description:
      "Designing & Printing Services — Offset & Screen Printing. Tirupur.",
    images: ["/visiting-card.jpg"],
    url: "https://your-domain.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
