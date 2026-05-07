import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const href = "https://wa.me/919344216902?text=Hello%20Creative%20Line%20Graphics%2C%20I%20need%20printing%20support.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.03]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}