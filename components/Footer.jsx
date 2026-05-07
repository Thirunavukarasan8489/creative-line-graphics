export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.svg" alt="" className="h-6 mb-3" />
          <p className="text-sm text-zinc-600">
            Designing & Printing Services — Offset & Screen Printing.
          </p>
          <div className="mt-3">
            <img
              src="/visiting-card.jpg"
              alt="Visiting card"
              className="rounded-lg border w-56"
            />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Bill Book & Delivery Challan</li>
            <li>Invitations & Visiting Cards</li>
            <li>Tags & Labels (Clothing)</li>
            <li>Custom T-Shirt Printing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">
            <span className="font-medium">D.P. Ayyadurai</span>
            <br />
            <a href="tel:+919344216902" className="underline">
              +91 93442 16902
            </a>
            <br />
            <a href="tel:+918489902902" className="underline">
              +91 84899 02902
            </a>
            <br />
            <a className="underline" href="mailto:creativetpr@gmail.com">
              creativetpr@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <p className="text-sm">
            No.63, ABT Main Road, Karuvampalayam,
            <br /> Tirupur – 641 604.
          </p>
          <a className="btn btn-ghost mt-3" href="/catalog.pdf" download>
            Download Catalog
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Creative Line Graphics. All rights
        reserved.
      </div>
    </footer>
  );
}
