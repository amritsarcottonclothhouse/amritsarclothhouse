import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Collection", to: "/collection" },
  { name: "About", to: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#ECE7DD] bg-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 md:px-3">

          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 no-underline"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
              <img src="/Logo.png" alt="" className="rounded-full"/>
            </div>

            <div className="leading-tight">
              <h1 className="font-sanserif text-xl font-semibold tracking-[0.03em] text-[#111]">
                Amritsar Cloth House
              </h1>

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#C8A04A]">
                Premium Fabrics
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                activeProps={{
                  className: "text-[#C8A04A] after:w-full",
                }}
                className="relative py-2 text-[15px] font-medium text-[#222] transition-all duration-300 hover:text-[#C8A04A] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#C8A04A] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => navigate({ to: '/store' })} className="cursor-pointer rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C8A04A] to-[#B8860B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
              Visit Shop →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-[#222] transition hover:bg-[#F5F5F5] lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-90 flex-col bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ECE7DD] px-4 py-3">

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition text-black hover:bg-[#F5F5F5]"
          >
            <X />
          </button>

          <div className="text-right">
            <h2 className="font-sanserif text-xl font-semibold tracking-[0.03em] text-[#111]">
              Amritsar Cloth House
            </h2>

            <p className="text-xs uppercase tracking-[0.3em] text-[#C8A04A]">
              Premium Fabrics
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-6 py-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-medium text-[#222] transition-all duration-300 hover:bg-[#FAF7F0] hover:text-[#C8A04A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-[#ECE7DD] p-6">
          <button onClick={() => navigate({ to: '/store' })} className="w-full rounded-xl cursor-pointer bg-gradient-to-r from-[#D4AF37] via-[#C8A04A] to-[#B8860B] py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            Visit Shop →
          </button>
        </div>
      </aside>
    </>
  );
}