import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  Camera as Instagram,
  ThumbsUp as Facebook,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Eye,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import colBridal from "@/assets/col-bridal.jpg";
import colPret from "@/assets/col-pret.jpg";
import colIndoWestern from "@/assets/col-indowestern.jpg";
import craft from "@/assets/craft.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const ease = [0.19, 1, 0.22, 1] as const;

function Announcement() {
  const items = [
    "Complimentary Virtual Styling Sessions",
    "Festive Atelier Now Open",
    "Worldwide Express Shipping",
    "Bespoke Bridal Appointments — Virar Boutique",
  ];
  return (
    <div className="bg-ink text-ivory overflow-hidden py-2.5 text-[10px] uppercase tracking-[0.25em]">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="px-8 flex items-center gap-8">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Bridal", "Indo-Western", "Pret", "Party", "Festive", "Atelier"];
  return (
    <nav
      className={`fixed top-[33px] left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl py-4 border-b border-ink/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="px-6 md:px-12 flex justify-between items-center">
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium flex-1">
          {links.slice(0, 3).map((l) => (
            <a key={l} href="#" className="relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
        <button className="md:hidden">
          <Menu className="size-5" strokeWidth={1.2} />
        </button>

        <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.25em] uppercase font-medium">
          Laviva
        </a>

        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium flex-1 justify-end items-center">
          {links.slice(3).map((l) => (
            <a key={l} href="#" className="relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <span className="w-px h-4 bg-ink/20" />
          <button aria-label="Search"><Search className="size-4" strokeWidth={1.2} /></button>
          <button aria-label="Wishlist"><Heart className="size-4" strokeWidth={1.2} /></button>
          <button aria-label="Bag" className="flex items-center gap-1.5">
            <ShoppingBag className="size-4" strokeWidth={1.2} />
            <span>(0)</span>
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Search className="size-4" strokeWidth={1.2} />
          <ShoppingBag className="size-4" strokeWidth={1.2} />
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden bg-nude">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={hero}
          alt="Laviva Couture spring campaign — ivory and gold bridal lehenga"
          className="w-full h-full object-cover animate-reveal"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-ink/20" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-7xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="text-gold text-[10px] uppercase tracking-[0.4em] mb-6 block"
        >
          Campaign · Spring / Summer 2026
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.5 }}
          className="text-ivory font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.95] italic max-w-5xl"
        >
          The Art of <br />
          <span className="not-italic font-light tracking-tight">Modern Heritage</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="#collections"
            className="group inline-flex items-center justify-center gap-3 bg-ivory text-ink px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ivory transition-all duration-700"
          >
            Explore Collection
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.2} />
          </a>
          <a
            href="#consult"
            className="group inline-flex items-center justify-center gap-3 border border-ivory/60 text-ivory px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-ivory hover:text-ink transition-all duration-700"
          >
            Book Styling Consultation
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-4">
        <span className="rotate-90 origin-center text-[10px] tracking-[0.3em] uppercase text-ivory/70 translate-y-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ivory animate-[laviva-marquee_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}

function LogoBar() {
  const labels = ["VOGUE INDIA", "ELLE", "HARPER'S BAZAAR", "GRAZIA", "BRIDES TODAY", "VERVE"];
  return (
    <section className="py-12 border-b border-ink/10 overflow-hidden">
      <p className="text-center text-[10px] uppercase tracking-[0.4em] text-ink/40 mb-8">
        As featured in
      </p>
      <div className="flex justify-around items-center flex-wrap gap-y-6 gap-x-12 px-8 max-w-6xl mx-auto">
        {labels.map((l) => (
          <span key={l} className="font-serif text-base md:text-xl tracking-[0.2em] text-ink/40 hover:text-gold transition-colors">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Collections() {
  const items = [
    { name: "Bridal Couture", caption: "Timeless Ceremonial", img: colBridal, count: "42 pieces" },
    { name: "Luxury Pret", caption: "Designer Ready-to-Wear", img: colPret, count: "68 pieces", offset: true },
    { name: "Indo-Western", caption: "The Fusion Edit", img: colIndoWestern, count: "37 pieces" },
  ];
  return (
    <section id="collections" className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium">— The Atelier</span>
              <h2 className="text-4xl md:text-6xl font-serif mt-4 italic">Curated Categories</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] border-b border-ink/20 pb-1 hover:border-gold hover:text-gold transition-all">
              View All <ArrowRight className="size-3" strokeWidth={1.2} />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {items.map((it, i) => (
            <FadeIn key={it.name} delay={i * 0.15}>
              <div className={`group cursor-pointer ${it.offset ? "md:-translate-y-16" : ""}`}>
                <div className="overflow-hidden mb-5 relative aspect-[3/4]">
                  <img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    width={800}
                    height={1184}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-700" />
                  <div className="absolute bottom-4 right-4 size-10 rounded-full bg-ivory/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="size-4" strokeWidth={1.2} />
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-2xl">{it.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40">0{i + 1}</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-2">
                  {it.caption} · {it.count}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const products = [
    { name: "Zoya Champagne Lehenga", price: "₹1,45,000", img: prod1, tag: "Bridal" },
    { name: "Obsidian Silk Saree", price: "₹85,000", img: prod2, tag: "Festive" },
    { name: "Etheric Drape Gown", price: "₹1,12,000", img: prod3, tag: "Indo-Western" },
    { name: "Aurelia Couture Gown", price: "₹1,68,000", img: prod4, tag: "Bridal" },
  ];
  const tabs = ["New Arrivals", "Best Sellers", "Festive Edit", "Bridal"];
  const [active, setActive] = useState(0);
  return (
    <section className="bg-champagne/40 py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Edit of the Season</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mt-4">Most Coveted</h2>
            <div className="flex justify-center gap-8 mt-12 flex-wrap">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setActive(i)}
                  className={`text-[11px] uppercase tracking-[0.25em] pb-2 border-b transition-all ${
                    active === i ? "border-gold text-ink" : "border-transparent text-ink/50 hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-ivory">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-ivory/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-ink">
                    {p.tag}
                  </span>
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-3 right-3 size-9 bg-ivory/90 flex items-center justify-center hover:bg-gold hover:text-ivory transition-colors"
                  >
                    <Heart className="size-3.5" strokeWidth={1.2} />
                  </button>
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <button className="w-full bg-ink text-ivory text-[10px] uppercase tracking-[0.25em] py-3 flex items-center justify-center gap-2 hover:bg-gold">
                      <Eye className="size-3.5" strokeWidth={1.2} /> Quick View
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] mb-1.5">{p.name}</h4>
                  <p className="font-serif text-gold text-base">{p.price}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-ink text-ivory py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <FadeIn>
          <div className="relative">
            <img
              src={craft}
              alt="Hands hand-embroidering gold zardozi onto ivory silk"
              loading="lazy"
              width={1000}
              height={1248}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-56 md:h-56 border border-gold/40 hidden md:block" />
            <div className="absolute -top-6 -left-6 bg-gold text-ink px-6 py-3 hidden md:block">
              <p className="font-serif italic text-sm">est. 2014</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-8">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— The Laviva Philosophy</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-[1.05]">
              Woven in Virar, <br /> inspired by the soul.
            </h2>
            <p className="text-ivory/70 leading-relaxed text-base md:text-lg max-w-lg">
              At Laviva Couture, every stitch tells a story of heritage reimagined. Our boutique in
              Virar is a sanctuary for those who seek the extraordinary — where traditional Indian
              craftsmanship meets the sleek minimalism of contemporary fashion.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-ivory/10">
              {[
                { n: "12+", l: "Years of craft" },
                { n: "240+", l: "Artisans" },
                { n: "8K+", l: "Brides dressed" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl md:text-4xl text-gold">{s.n}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mt-2">{s.l}</p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-gold text-gold px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-all duration-700"
            >
              Read Our Story <ArrowRight className="size-4" strokeWidth={1.2} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-end">
        <FadeIn>
          <div className="md:col-span-5 space-y-6">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Editorial</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">
              The Lookbook,<br /> Reimagined
            </h2>
            <p className="text-ink/60 leading-relaxed">
              A study in restraint and opulence — our seasonal lookbook celebrates draped silk,
              hand-spun gold, and the quiet power of the modern woman.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] border-b border-ink pb-1.5 hover:text-gold hover:border-gold transition-all">
              View Full Editorial <ArrowUpRight className="size-3.5" strokeWidth={1.2} />
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <img src={ig6} alt="" loading="lazy" width={640} height={640} className="w-full aspect-[3/4] object-cover" />
            <img src={ig4} alt="" loading="lazy" width={640} height={640} className="w-full aspect-[3/4] object-cover translate-y-12" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Consult() {
  return (
    <section id="consult" className="relative py-32 md:py-48 px-6 md:px-16 bg-nude overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Concierge Services</span>
          <h2 className="text-4xl md:text-7xl font-serif italic mt-6 mb-10 leading-[1.05]">
            A private appointment, <br /> reserved for you.
          </h2>
          <p className="text-ink/60 leading-relaxed max-w-xl mx-auto mb-12">
            Step inside our Virar atelier — or schedule a virtual styling session from anywhere in
            the world. Our master stylists will guide you through the season's most extraordinary pieces.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <form className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <input placeholder="Full Name" className="bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors" />
            <input placeholder="Email Address" className="bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors" />
            <input placeholder="WhatsApp Number" className="bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors" />
            <select className="bg-transparent border-b border-ink/30 py-3 text-sm text-ink/60 focus:outline-none focus:border-gold transition-colors">
              <option>Occasion · Bridal</option>
              <option>Occasion · Festive</option>
              <option>Occasion · Cocktail</option>
              <option>Occasion · Pret</option>
            </select>
            <button type="button" className="sm:col-span-2 mt-6 bg-ink text-ivory py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500">
              Reserve Your Appointment
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Instagram2() {
  const grid = [ig1, ig2, ig3, ig4, ig5, ig6];
  return (
    <section className="py-24 md:py-32">
      <FadeIn>
        <div className="text-center mb-12 px-6">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— @LavivaCouture</span>
          <h2 className="text-3xl md:text-5xl font-serif italic mt-4">As Seen on Instagram</h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
        {grid.map((img, i) => (
          <a key={i} href="#" className="relative aspect-square overflow-hidden group">
            <img src={img} alt="Instagram post" loading="lazy" width={640} height={640} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
              <Instagram className="size-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.2} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-24 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-[0.25em] uppercase mb-6">Laviva</div>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs mb-8">
              Defining modern Indian luxury. Visit our flagship boutique in Virar for a private
              styling experience.
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
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Shop</h4>
            <ul className="space-y-3.5 text-sm text-ivory/70">
              {["Bridal", "Indo-Western", "Pret", "Festive", "New Arrivals"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Concierge</h4>
            <ul className="space-y-3.5 text-sm text-ivory/70">
              {["Book Appointment", "Virtual Styling", "Bespoke Orders", "Shipping & Returns", "Fabric Care"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Visit Our Atelier</h4>
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
            © 2026 Laviva Couture · All Rights Reserved
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

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 size-14 bg-gold rounded-full flex items-center justify-center shadow-2xl shadow-ink/20 hover:scale-110 transition-transform duration-500 group"
      aria-label="WhatsApp Laviva"
    >
      <MessageCircle className="size-6 text-ivory" strokeWidth={1.5} />
      <span className="absolute -top-1 -right-1 size-3 bg-ivory rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 size-3 bg-ivory rounded-full" />
    </a>
  );
}

function Index() {
  return (
    <main className="bg-ivory text-ink overflow-x-hidden">
      <Announcement />
      <Nav />
      <Hero />
      <LogoBar />
      <Collections />
      <BestSellers />
      <Story />
      <Editorial />
      <Consult />
      <Instagram2 />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
