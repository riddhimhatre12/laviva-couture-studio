import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ShoppingBag,
  Heart,
  ArrowUpRight,
  ArrowRight,
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

import { Nav, Announcement, FloatingWhatsApp } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const ease = [0.19, 1, 0.22, 1] as const;

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden bg-nude">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Indian groom in ivory wedding sherwani with gold zardozi — Laviva Couture campaign"
          className="w-full h-full object-cover animate-reveal"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />
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
          Wedding Couture · Volume IV
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.5 }}
          className="text-ivory font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.95] italic max-w-5xl"
        >
          Tailored for <br />
          <span className="not-italic font-light tracking-tight">the Modern Heir.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.85 }}
          className="text-ivory/70 max-w-md mt-6 leading-relaxed"
        >
          From hand-embroidered sherwanis to sculpted designer blazers — a couture house dedicated
          to the artistry of Indian celebration.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            to="/mens"
            className="group inline-flex items-center justify-center gap-3 bg-ivory text-ink px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ivory transition-all duration-700"
          >
            Explore Men's Couture
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.2} />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 border border-ivory/60 text-ivory px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-ivory hover:text-ink transition-all duration-700"
          >
            Book a Private Consultation
          </Link>
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

function Collections() {
  const items = [
    { name: "Bridal Lehengas", caption: "Ceremonial · Women", img: colBridal, count: "42 pieces", to: "/womens" as const },
    { name: "Wedding Sherwanis", caption: "Groom Couture · Men", img: colIndoWestern, count: "68 pieces", offset: true, to: "/mens" as const },
    { name: "Indo-Western", caption: "Fusion Edit · Unisex", img: colPret, count: "37 pieces", to: "/collections" as const },
  ];
  return (
    <section id="collections" className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium">— The Atelier</span>
              <h2 className="text-4xl md:text-6xl font-serif mt-4 italic">Curated Couture</h2>
            </div>
            <Link to="/collections" className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] border-b border-ink/20 pb-1 hover:border-gold hover:text-gold transition-all">
              View All <ArrowRight className="size-3" strokeWidth={1.2} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {items.map((it, i) => (
            <FadeIn key={it.name} delay={i * 0.15}>
              <Link to={it.to} className={`group block cursor-pointer ${it.offset ? "md:-translate-y-16" : ""}`}>
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
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MensCouture() {
  const looks = [
    { name: "Ivory Heritage Sherwani", price: "₹1,85,000", img: prod1, tag: "Bridal" },
    { name: "Royal Velvet Bandhgala", price: "₹1,42,000", img: ig4, tag: "Reception" },
    { name: "Sapphire Embroidered Sherwani", price: "₹2,10,000", img: prod3, tag: "Wedding" },
    { name: "Onyx Tuxedo Suit", price: "₹1,18,000", img: colIndoWestern, tag: "Cocktail" },
    { name: "Charcoal Designer Blazer", price: "₹68,000", img: prod4, tag: "Pret" },
  ];
  return (
    <section className="relative py-28 md:py-44 px-6 md:px-16 bg-ink text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0%, transparent 40%)" }}
      />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-end mb-16 md:mb-20">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium">— Men's Couture</span>
              <h2 className="text-4xl md:text-7xl font-serif italic mt-4 leading-[1]">
                The Groom's <br /> Atelier.
              </h2>
            </div>
            <p className="text-ivory/65 leading-relaxed max-w-md md:justify-self-end">
              Wedding sherwanis, hand-embroidered bandhgalas, sculpted tuxedos and designer blazers
              — tailored in our Virar atelier for the groom who values craft and presence.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {/* Large hero look */}
          <FadeIn className="col-span-12 md:col-span-7" delay={0.1}>
            <Link to="/mens" className="group block relative overflow-hidden aspect-[4/5] md:aspect-[5/6]">
              <img src={looks[0].img} alt={looks[0].name} loading="lazy" width={1200} height={1500}
                className="w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="text-gold text-[10px] uppercase tracking-[0.3em]">{looks[0].tag}</span>
                <h3 className="font-serif text-3xl md:text-5xl italic mt-2">{looks[0].name}</h3>
                <p className="text-ivory/80 mt-3 font-serif text-lg">{looks[0].price}</p>
              </div>
            </Link>
          </FadeIn>

          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-5 md:gap-6 md:grid-rows-2">
            {looks.slice(1, 5).map((l, i) => (
              <FadeIn key={l.name} delay={0.15 + i * 0.08}>
                <Link to="/mens" className="group block relative overflow-hidden aspect-[3/4] h-full">
                  <img src={l.img} alt={l.name} loading="lazy" width={600} height={800}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-[9px] uppercase tracking-[0.3em]">{l.tag}</span>
                    <h4 className="text-[12px] uppercase tracking-[0.15em] mt-1">{l.name}</h4>
                    <p className="font-serif text-gold text-sm mt-0.5">{l.price}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="flex justify-center mt-16">
            <Link to="/mens" className="group inline-flex items-center gap-3 border border-gold text-gold px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-all duration-700">
              View All Men's Couture
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.2} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WomensEdit() {
  // Pinterest-style masonry
  const pieces = [
    { name: "Champagne Drape Saree", price: "₹85,000", img: ig2, span: "row-span-2" },
    { name: "Onyx Couture Gown", price: "₹1,12,000", img: prod2, span: "" },
    { name: "Ivory Heritage Lehenga", price: "₹1,68,000", img: colBridal, span: "row-span-2" },
    { name: "Crystal Lace Cocktail", price: "₹92,000", img: ig5, span: "" },
    { name: "Etheric Indo-Western Gown", price: "₹98,000", img: colPret, span: "" },
  ];
  const [active, setActive] = useState(0);
  const tabs = ["Bridal", "Party Wear", "Indo-Western", "Festive"];
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-champagne/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Women's Wear</span>
            <h2 className="text-4xl md:text-7xl font-serif italic mt-4">The Boudoir Edit</h2>
            <p className="text-ink/60 max-w-xl mx-auto mt-6 leading-relaxed">
              Hand-crafted lehengas, draped silk gowns and Indo-western ensembles for the bride,
              the guest, and the woman who simply loves to dress beautifully.
            </p>
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[260px] gap-4 md:gap-6">
          {pieces.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08} className={p.span}>
              <Link to="/womens" className="group block relative overflow-hidden h-full">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={1024}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button
                  aria-label="Wishlist"
                  className="absolute top-3 right-3 size-9 bg-ivory/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-ivory"
                >
                  <Heart className="size-3.5" strokeWidth={1.2} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <h4 className="text-[11px] uppercase tracking-[0.2em]">{p.name}</h4>
                  <p className="font-serif text-gold mt-1">{p.price}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex justify-center mt-14">
            <Link to="/womens" className="group inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-700">
              Explore Women's Wear
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.2} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BestSellers() {
  const products = [
    { name: "Ivory Heritage Sherwani", price: "₹1,85,000", img: prod1, tag: "Groom" },
    { name: "Onyx Tuxedo Suit", price: "₹1,18,000", img: colIndoWestern, tag: "Reception" },
    { name: "Champagne Drape Gown", price: "₹1,12,000", img: prod2, tag: "Party" },
    { name: "Royal Velvet Bandhgala", price: "₹1,42,000", img: ig4, tag: "Wedding" },
  ];
  return (
    <section className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Edit of the Season</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mt-4">Most Coveted</h2>
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
                    aria-label="Wishlist"
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
    <section className="bg-nude py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <FadeIn>
          <div className="relative">
            <img
              src={craft}
              alt="Hands hand-embroidering gold zardozi onto ivory silk sherwani"
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
              Crafted in Virar, <br /> worn across India.
            </h2>
            <p className="text-ink/70 leading-relaxed text-base md:text-lg max-w-lg">
              From hand-embroidered groom sherwanis to draped party gowns, every Laviva piece is
              cut and finished by our master tailors in Virar. We pair the soul of Indian
              craftsmanship with a contemporary couture sensibility.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-ink/10">
              {[
                { n: "12+", l: "Years of craft" },
                { n: "240+", l: "Artisans" },
                { n: "8K+", l: "Clients dressed" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl md:text-4xl text-gold">{s.n}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-2">{s.l}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-ink text-ink px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-ink hover:text-ivory transition-all duration-700"
            >
              Read Our Story <ArrowRight className="size-4" strokeWidth={1.2} />
            </Link>
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
              hand-spun gold, and the quiet power of the modern Indian couple.
            </p>
            <Link to="/new-arrivals" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] border-b border-ink pb-1.5 hover:text-gold hover:border-gold transition-all">
              View Full Editorial <ArrowUpRight className="size-3.5" strokeWidth={1.2} />
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <img src={ig6} alt="Indian couple in coordinated couture" loading="lazy" width={640} height={853} className="w-full aspect-[3/4] object-cover" />
            <img src={ig1} alt="Groom in ivory sherwani" loading="lazy" width={640} height={853} className="w-full aspect-[3/4] object-cover translate-y-12" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Consult() {
  return (
    <section id="consult" className="relative py-32 md:py-48 px-6 md:px-16 bg-ink text-ivory overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Concierge Atelier</span>
          <h2 className="text-4xl md:text-7xl font-serif italic mt-6 mb-10 leading-[1.05]">
            A private appointment, <br /> reserved for you.
          </h2>
          <p className="text-ivory/65 leading-relaxed max-w-xl mx-auto mb-12">
            Step inside our Virar atelier or schedule a virtual fitting from anywhere in India.
            Our master tailors will guide you through wedding sherwanis, designer blazers, and
            couture gowns — fitted exactly to you.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <form className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
            <input placeholder="Full Name" className="bg-transparent border-b border-ivory/30 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors" />
            <input placeholder="Email Address" className="bg-transparent border-b border-ivory/30 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors" />
            <input placeholder="WhatsApp Number" className="bg-transparent border-b border-ivory/30 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors" />
            <select className="bg-transparent border-b border-ivory/30 py-3 text-sm text-ivory/60 focus:outline-none focus:border-gold transition-colors">
              <option className="bg-ink">Occasion · Groom Wedding</option>
              <option className="bg-ink">Occasion · Bride Wedding</option>
              <option className="bg-ink">Occasion · Reception / Cocktail</option>
              <option className="bg-ink">Occasion · Festive / Party</option>
            </select>
            <button type="button" className="sm:col-span-2 mt-6 bg-gold text-ink py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-ivory transition-all duration-500">
              Reserve Your Appointment
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function InstagramFeed() {
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
            <img src={img} alt="Laviva Couture editorial" loading="lazy" width={640} height={640} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
              <ShoppingBag className="size-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.2} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-ivory text-ink overflow-x-hidden">
      <Announcement />
      <Nav transparent />
      <Hero />
      <LogoBar />
      <Collections />
      <MensCouture />
      <WomensEdit />
      <BestSellers />
      <Story />
      <Editorial />
      <Consult />
      <InstagramFeed />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
