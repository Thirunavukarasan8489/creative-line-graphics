import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Get a Quote — Creative Line Graphics" };

export default function Order() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold">Get a Quote</h1>
        <p className="mt-2 text-zinc-600">
          Share details like size, quantity, paper/stock, color, and finish.
          We’ll reply quickly.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
