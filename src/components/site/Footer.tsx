import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-24 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-[0.3em] uppercase mb-6">Laviva</div>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs mb-8">
              Premium couture boutique crafting wedding sherwanis, designer blazers, Indo-western
              ensembles and elegant party wear from our atelier in Virar, Mumbai.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="size-10 border border-ivory/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-all">
                  <Icon className="size-4" strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Couture</h4>
            <ul className="space-y-3.5 text-sm text-ivory/70">
              <li><Link to="/mens" className="hover:text-gold transition-colors">Men's Couture</Link></li>
              <li><Link to="/womens" className="hover:text-gold transition-colors">Women's Wear</Link></li>
              <li><Link to="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-gold transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Atelier</h4>
            <ul className="space-y-3.5 text-sm text-ivory/70">
              <li><Link to="/contact" className="hover:text-gold transition-colors">Book Consultation</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Bespoke Orders</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Care</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Visit Our Boutique</h4>
            <address className="not-italic text-sm text-ivory/70 space-y-3 leading-relaxed">
              <p className="flex items-start gap-3">
                <MapPin className="size-4 text-gold shrink-0 mt-0.5" strokeWidth={1.2} />
                Shop 42, Heritage Plaza,<br /> Virar West, Mumbai, 401303
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 text-gold shrink-0" strokeWidth={1.2} />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 text-gold shrink-0" strokeWidth={1.2} />
                hello@lavivacouture.in
              </p>
            </address>
            <div className="mt-8 pt-8 border-t border-ivory/10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-4">
                Join the inner circle
              </p>
              <form className="flex border-b border-ivory/20 pb-2">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent w-full text-[11px] uppercase tracking-[0.2em] outline-none placeholder:text-ivory/30"
                />
                <button type="button" className="text-[11px] uppercase tracking-[0.25em] text-gold ml-4">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/40">
            © 2026 Laviva Couture · Virar, Mumbai · All Rights Reserved
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-ivory/40">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
