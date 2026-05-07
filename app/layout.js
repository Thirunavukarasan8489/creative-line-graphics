import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Creative Line Graphics | Professional Printing Services",
  description:
    "Creative Line Graphics provides high-quality printing services including visiting cards, flex printing, labels, wedding invitations, bill books, binding works, and more.",
  openGraph: {
    title: "Creative Line Graphics | Professional Printing Services",
    description:
      "High-quality printing for visiting cards, flex banners, labels, invitations, bill books, and binding works.",
    url: "https://creative-line-graphics.vercel.app/",
    siteName: "Creative Line Graphics",
    images: [
      {
        url: "/entrance.webp",
        width: 1200,
        height: 630,
        alt: "Creative Line Graphics printing showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-screen bg-background text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}