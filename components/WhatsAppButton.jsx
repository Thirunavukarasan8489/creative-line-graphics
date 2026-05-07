import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  const phone = "919876543210"; // ← change to your number (no +)
  const text = encodeURIComponent(
    "Hello MERAKI! I'd like to book a fitting for a custom outfit."
  );
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute -inset-2 rounded-full bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition" />
      <div className="relative flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:block text-sm font-semibold">
          Book on WhatsApp
        </span>
      </div>
    </a>
  );
}
