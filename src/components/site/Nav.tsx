import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Heart, Calendar } from "lucide-react";

const Whatsapp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.1-1.1a7.94 7.94 0 0 0 3.9 1h.01c4.38 0 7.95-3.57 7.95-7.96a7.91 7.91 0 0 0-2.36-5.64Zm-5.6 12.2a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.43.64.65-2.37-.16-.25a6.6 6.6 0 0 1 10.25-8.16 6.55 6.55 0 0 1 1.93 4.66c0 3.65-2.97 6.54-6.64 6.54Zm3.64-4.9c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.62.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34-.12-.01-.25-.01-.39-.01a.75.75 0 0 0-.54.25c-.18.2-.71.69-.71 1.68 0 .99.73 1.94.83 2.07.1.13 1.44 2.2 3.49 3.08.49.21.87.34 1.17.43.49.16.94.13 1.29.08.4-.06 1.18-.48 1.34-.95.17-.46.17-.86.12-.95-.05-.08-.18-.13-.38-.23Z"/>
  </svg>
);

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/mens", label: "Couture" },
  { to: "/womens", label: "Women's" },
  { to: "/collections", label: "Fusion" },
  { to: "/new-arrivals", label: "New In" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Announcement() {
  const items = [
    "Bespoke Bridal & Groom Atelier — Virar",
    "Indo-Western & Casual Luxe Collections Now Live",
    "Complimentary Styling Consultation",
    "Pan-India Express Delivery",
  ];
  return (
    <div className="bg-ink text-ivory overflow-hidden py-2.5 text-[10px] uppercase tracking-[0.25em] relative z-[60]">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="px-8 flex items-center gap-8 font-medium">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = !transparent || scrolled;

  return (
    <>
      <nav
        className={`fixed top-[33px] left-0 right-0 z-50 transition-all duration-700 ease-out ${
          solid
            ? "bg-ivory/85 backdrop-blur-2xl py-3.5 border-b border-ink/5 shadow-[0_1px_30px_-20px_rgba(0,0,0,0.15)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className={`px-4 xl:px-8 grid grid-cols-[1fr_auto_1fr] items-center transition-colors duration-700 ${solid ? "text-ink" : "text-ivory"}`}>
          {/* Left Column: Essential Collections */}
          <div className="flex items-center min-w-0">
            {/* Desktop Left Links */}
            <div className="hidden xl:flex gap-4 text-[9px] uppercase tracking-[0.22em] font-medium whitespace-nowrap">
              {LINKS.slice(1, 5).map((l, i) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="relative group py-1.5"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="xl:hidden relative size-8 flex flex-col justify-center items-start gap-[5px] group"
            >
              <span className="block h-px w-6 bg-current transition-transform duration-500" />
              <span className="block h-px w-4 bg-current transition-all duration-500 group-hover:w-6" />
              <span className="block h-px w-5 bg-current transition-all duration-500 group-hover:w-6" />
            </button>
          </div>

          {/* Center Column: Logo */}
          <div className="flex justify-center px-8 xl:px-12 min-w-max">
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.35em] uppercase font-medium z-10 whitespace-nowrap">
              Laviva
            </Link>
          </div>

          {/* Right Column: About, Contact, Utilities & CTA */}
          <div className="flex items-center justify-end gap-3 md:gap-4 text-[9px] uppercase tracking-[0.22em] font-medium min-w-0">
            {/* Desktop Right Links */}
            <div className="hidden xl:flex gap-4 mr-1 whitespace-nowrap">
              {LINKS.slice(6).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="relative group py-1.5 transition-colors duration-500"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <span className="hidden xl:block w-px h-4 bg-current opacity-20" />

            {/* Utilities */}
            <div className="flex items-center gap-3 md:gap-4 shrink-0">
              <button aria-label="Search" className="hidden sm:block hover:text-gold transition-colors"><Search className="size-4" strokeWidth={1.1} /></button>
              <button aria-label="Wishlist" className="hidden sm:block hover:text-gold transition-colors"><Heart className="size-4" strokeWidth={1.1} /></button>
              <a aria-label="WhatsApp" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                <Whatsapp className="size-4" />
              </a>
              <button aria-label="Bag" className="hover:text-gold transition-colors flex items-center gap-1.5">
                <ShoppingBag className="size-4" strokeWidth={1.1} />
                <span className="hidden md:inline text-[8px]">(0)</span>
              </button>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center gap-2 ml-1 px-4 py-2.5 text-[8.5px] uppercase tracking-[0.3em] font-medium border transition-all duration-500 shrink-0 ${
                solid
                  ? "border-ink bg-ink text-ivory hover:bg-gold hover:border-gold"
                  : "border-ivory/70 text-ivory hover:bg-ivory hover:text-ink"
              }`}
            >
              <Calendar className="size-3.5" strokeWidth={1.2} />
              Book Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-700 xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-ivory text-ink p-8 flex flex-col transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-2xl tracking-[0.3em] uppercase">Laviva</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="size-9 relative">
              <span className="absolute inset-0 m-auto h-px w-6 bg-ink rotate-45" />
              <span className="absolute inset-0 m-auto h-px w-6 bg-ink -rotate-45" />
            </button>
          </div>
          <ul className="flex-1 space-y-1">
            {LINKS.map((l, i) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block font-serif text-3xl py-3 hover:text-gold hover:translate-x-2 transition-all duration-500"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  activeProps={{ className: "text-gold italic" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-ink/10 space-y-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-ink text-ivory py-3.5 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-all"
            >
              <Calendar className="size-3.5" strokeWidth={1.4} /> Book Consultation
            </Link>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center justify-center gap-2 w-full border border-ink/30 py-3.5 text-[11px] uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-all"
            >
              <Whatsapp className="size-4" /> WhatsApp Quick Connect
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 size-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-ink/30 hover:scale-110 transition-transform duration-500"
      aria-label="WhatsApp Laviva Couture"
    >
      <Whatsapp className="size-7 text-ivory" />
      <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-60" />
    </a>
  );
}
