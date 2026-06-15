import { Link, useNavigate } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Collection", to: "/collection" },
  { name: "About", to: "/about" },
  { name: "Visit Shop", to: "/store" },
] as const;

const categories = [
  "Cotton",
  "Linen",
  "Silk",
  "Rayon",
  "Denim",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className=" border-t border-[#E7E1D6] bg-[#2b2b2b] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#D4AF37] to-[#B8860B] text-lg font-bold text-white">
              <img src="/Logo.png" alt="" className="rounded-full" />
            </div>

            <div>
              <h2 className="font-sanserif text-lg font-semibold tracking-[0.03em] text-white">
                Amritsar Cloth House
              </h2>

              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A04A]">
                Premium Fabrics
              </p>
            </div>
          </div>

          <p className="max-w-xs text-sm leading-7 text-neutral-400">
            Premium fabric collections for fashion designers,
            boutiques, wholesalers, and textile businesses with
            exceptional quality and timeless elegance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#D4AF37]">
            Navigation
          </h3>

          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate({ to: item.to as any })}
                  className="cursor-pointer text-neutral-400 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#D4AF37]">
            Categories
          </h3>

          <ul className="space-y-3">
            {categories.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-neutral-400 transition hover:text-[#D4AF37]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#D4AF37]">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <MapPin className="mt-1 text-[#D4AF37]" size={18} />
              <p className="text-sm text-neutral-400">
                Amritsar Cotton Cloth House Nagar palika,
                <br />
                Kashipur, Uttarakhand, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#D4AF37]" />
              <span className="text-neutral-400">
                +91 8532085547
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#D4AF37]" />
              <span className="text-neutral-400">
                amritsarcottonclothhouse@gmail.com
              </span>
            </div>

            {/* Social */}
            <div className="text-neutral-400 flex items-center gap-3 pt-4">
              Follow Us on Instagram:
              <a
                href="https://www.instagram.com/amritsar_cotton_cloth786/"
                target="_blank"
                className="rounded-full border border-[#3A3A3A] p-3 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                <Instagram size={18} />
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[#232323]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500 md:flex-row">

          <p>
            © {year} Amritsar Cloth House. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <a className="font-semibold text-[#D4AF37] underline" href="https://www.instagram.com/_4y4nn" target="_blank" rel="noopener noreferrer cursor-pointer">
              Ayaan
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}