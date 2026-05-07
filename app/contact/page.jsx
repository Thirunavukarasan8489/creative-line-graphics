import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Creative Line Graphics" };

export default function Contact() {
  return (
    <div className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="mt-2 text-zinc-600">
            No.63, ABT Main Road, Karuvampalayam, Tirupur — 641 604.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <div>
              Phone:{" "}
              <a className="underline" href="tel:+919344216902">
                +91 93442 16902
              </a>
            </div>
            <div>
              Alt:{" "}
              <a className="underline" href="tel:+918489902902">
                +91 84899 02902
              </a>
            </div>
            <div>
              Email:{" "}
              <a className="underline" href="mailto:creativetpr@gmail.com">
                creativetpr@gmail.com
              </a>
            </div>
          </div>
          <iframe
            className="mt-6 w-full h-64 rounded-xl border"
            loading="lazy"
            src={
              "https://www.google.com/maps?q=No.63,+ABT+Main+Road,+Karuvampalayam,+Tirupur+641604&output=embed"
            }
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
