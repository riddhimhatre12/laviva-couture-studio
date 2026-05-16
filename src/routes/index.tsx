import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ShoppingBag,
  Heart,
  ArrowUpRight,
  ArrowRight,
  Eye,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import hero from "@/assets/hero.jpg";
import colBridal from "@/assets/col-bridal.jpg";
import colPret from "@/assets/col-pret.jpg";
import colIndoWestern from "@/assets/col-indowestern.jpg";
import iwMen from "@/assets/indowestern-men.png";
import iwWomen from "@/assets/indowestern-women.png";
import casualLuxe from "@/assets/casual-luxe.png";
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  
  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden bg-nude">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Modern Indian Groom — Laviva Couture"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-28 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-gold" />
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium">
            New Era of Indian Luxury
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease, delay: 0.4 }}
          className="text-ivory font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] italic max-w-5xl"
        >
          The Art of <br />
          <span className="not-italic font-light tracking-tight text-ivory/90">Contemporary Craft.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease, delay: 0.8 }}
          className="text-ivory/60 max-w-lg mt-8 leading-relaxed text-lg"
        >
          From bespoke wedding couture to elevated Indo-western separates — we bridge the heritage of India with the silhouettes of the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-5 mt-12"
        >
          <Link
            to="/mens"
            className="group relative overflow-hidden bg-ivory text-ink px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-medium transition-all duration-700"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Collections
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={1.2} />
            </span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 border border-ivory/40 text-ivory px-12 py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-ivory/10 hover:border-ivory transition-all duration-700"
          >
            Book a Private Consultation
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/50 group-hover:text-gold transition-colors">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold" 
          />
        </div>
      </motion.div>
    </section>
  );
}

function Collections() {
  const items = [
    { name: "Bridal Couture", caption: "Ceremonial · Hand-crafted", img: colBridal, count: "42 pieces", to: "/womens" as const },
    { name: "Groom Atelier", caption: "Heritage · Tailored", img: colIndoWestern, count: "68 pieces", offset: true, to: "/mens" as const },
    { name: "Indo-Western Fusion", caption: "Modern Edit · Separates", img: iwWomen, count: "37 pieces", to: "/collections" as const },
  ];
  return (
    <section id="collections" className="py-24 md:py-44 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32">
            <div className="max-w-2xl">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">— The Portfolio</span>
              <h2 className="text-5xl md:text-8xl font-serif mt-6 leading-[0.9]">The Fine <br /> <span className="italic ml-8 md:ml-20">Edit.</span></h2>
            </div>
            <Link to="/collections" className="group mt-10 md:mt-0 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-medium border-b border-ink/10 pb-2 hover:border-gold transition-all duration-500">
              View All Series <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.2} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
          {items.map((it, i) => (
            <FadeIn key={it.name} delay={i * 0.15}>
              <Link to={it.to} className={`group block relative ${it.offset ? "md:mt-24" : ""}`}>
                <div className="overflow-hidden mb-8 relative aspect-[4/5] bg-nude">
                  <motion.img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease }}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="bg-ivory/95 px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] text-ink font-medium">New Series</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-3xl group-hover:text-gold transition-colors duration-500">{it.name}</h3>
                  <span className="font-serif text-gold italic text-lg">0{i + 1}</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-medium">
                  {it.caption} <span className="mx-2 text-gold/30">|</span> {it.count}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndoWesternFeature() {
  return (
    <section className="py-24 md:py-48 bg-ink text-ivory overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <FadeIn direction="left">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">— The Fusion Edit</span>
              <h2 className="text-5xl md:text-8xl font-serif mt-6 mb-10 leading-[0.9]">
                Modern <br /> <span className="italic">Indo-Western.</span>
              </h2>
              <p className="text-ivory/60 text-lg leading-relaxed max-w-md mb-12">
                Breaking the conventions of occasion wear. We combine structured Western tailoring with the intricate textures of Indian hand-embroidery. Designed for the modern cosmopolitan lifestyle.
              </p>
              <div className="space-y-6 mb-14">
                {[
                  "Sculpted Bandhgala Blazers",
                  "Asymmetric Kurta Separates",
                  "Draped Silk Fusion Gowns",
                  "Contemporary Festive Casuals"
                ].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-medium group cursor-default"
                  >
                    <span className="size-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-gold transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/collections" className="group inline-flex items-center gap-4 bg-gold text-ink px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-ivory transition-all duration-700">
                Explore Fusion Series
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-500" />
              </Link>
            </FadeIn>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 md:gap-8 h-[600px] md:h-[800px]">
            <FadeIn direction="up" delay={0.2} className="h-full">
              <div className="h-full overflow-hidden relative group">
                <img src={iwMen} alt="Indo-Western Men" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-all duration-700" />
              </div>
            </FadeIn>
            <div className="flex flex-col gap-4 md:gap-8 pt-12 md:pt-24">
              <FadeIn direction="up" delay={0.4} className="h-2/3">
                <div className="h-full overflow-hidden relative group">
                  <img src={iwWomen} alt="Indo-Western Women" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-all duration-700" />
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.6} className="h-1/3">
                <div className="h-full overflow-hidden relative group">
                  <img src={casualLuxe} alt="Casual Luxury" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-all duration-700" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasualSection() {
  return (
    <section className="py-24 md:py-44 px-6 md:px-16 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <div className="w-full md:w-1/2 aspect-[4/5] relative">
            <FadeIn>
              <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 hidden md:block" />
              <img src={casualLuxe} alt="Casual Indian Luxe" className="w-full h-full object-cover relative z-10" />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="size-5 text-gold animate-pulse" />
                <span className="text-gold text-[11px] uppercase tracking-[0.5em] font-bold">Elevated Everyday</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-10">Casual Luxe <br /> <span className="italic">Sensibility.</span></h2>
              <p className="text-ink/60 text-lg leading-relaxed mb-12 max-w-lg">
                Who says luxury is only for the grand altar? Our 'Casual Indian' range focuses on premium natural fabrics, subtle hand-craft, and effortless elegance for your daily celebrations.
              </p>
              <div className="grid grid-cols-2 gap-10 mb-14">
                <div>
                  <h4 className="font-serif text-2xl text-gold italic mb-2">The Linen Edit</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40">Hand-spun organic linens</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-gold italic mb-2">Minimal Pret</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40">Daily designer essentials</p>
                </div>
              </div>
              <Link to="/collections" className="group inline-flex items-center gap-3 border border-ink text-ink px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ink hover:text-ivory transition-all duration-700">
                Shop The Casual Range <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MensCouture() {
  const looks = [
    { name: "Ivory Heritage Sherwani", price: "₹1,85,000", img: prod1, tag: "Wedding" },
    { name: "Royal Velvet Bandhgala", price: "₹1,42,000", img: ig4, tag: "Reception" },
    { name: "Fusion Kurta Jacket", price: "₹85,000", img: iwMen, tag: "Indo-Western" },
    { name: "Sapphire Silk Sherwani", price: "₹2,10,000", img: prod3, tag: "Couture" },
    { name: "Luxe Linen Tunic", price: "₹28,000", img: casualLuxe, tag: "Casual" },
  ];
  return (
    <section className="relative py-28 md:py-48 px-6 md:px-16 bg-ink text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0%, transparent 40%)" }}
      />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-end mb-20 md:mb-28">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">— Men's Series</span>
              <h2 className="text-5xl md:text-8xl font-serif italic mt-6 leading-[0.9]">
                The Modern <br /> <span className="not-italic">Gentleman.</span>
              </h2>
            </div>
            <p className="text-ivory/65 text-lg leading-relaxed max-w-md md:justify-self-end">
              From ceremonial wedding masterpieces to contemporary Indo-western fusion. We define the silhouette of the new Indian man.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <FadeIn className="col-span-12 md:col-span-7" delay={0.1}>
            <Link to="/mens" className="group block relative overflow-hidden aspect-[4/5] md:aspect-[5/6] bg-ink/50">
              <img src={looks[0].img} alt={looks[0].name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">{looks[0].tag}</span>
                <h3 className="font-serif text-4xl md:text-6xl italic leading-tight">{looks[0].name}</h3>
                <div className="flex items-center gap-6 mt-6">
                  <p className="text-ivory/80 font-serif text-xl">{looks[0].price}</p>
                  <span className="w-12 h-px bg-gold/50" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Inquire</span>
                </div>
              </div>
            </Link>
          </FadeIn>

          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-6 md:gap-8 md:grid-rows-2">
            {looks.slice(1, 5).map((l, i) => (
              <FadeIn key={l.name} delay={0.15 + i * 0.1}>
                <Link to="/mens" className="group block relative overflow-hidden aspect-[3/4] h-full bg-ink/50">
                  <img src={l.img} alt={l.name} loading="lazy" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold">{l.tag}</span>
                    <h4 className="text-[13px] uppercase tracking-[0.2em] font-medium mt-2 leading-snug">{l.name}</h4>
                    <p className="font-serif text-gold text-base mt-1.5">{l.price}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WomensEdit() {
  const pieces = [
    { name: "Organza Fusion Saree", price: "₹85,000", img: ig2, span: "row-span-2" },
    { name: "Modern Indo Gown", price: "₹1,12,000", img: iwWomen, span: "" },
    { name: "Bridal Heritage Lehenga", price: "₹1,68,000", img: colBridal, span: "row-span-2" },
    { name: "Silk Draped Casual", price: "₹42,000", img: colPret, span: "" },
    { name: "Crystal Cocktail Sari", price: "₹92,000", img: ig5, span: "" },
  ];
  const [active, setActive] = useState(0);
  const tabs = ["Couture", "Indo-Western", "Casual Luxe", "Festive"];
  return (
    <section className="py-24 md:py-44 px-6 md:px-16 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-24">
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">— The Boutique Edit</span>
            <h2 className="text-5xl md:text-8xl font-serif italic mt-6">The Modern Muse.</h2>
            <div className="flex justify-center gap-10 mt-16 flex-wrap">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setActive(i)}
                  className={`text-[11px] uppercase tracking-[0.4em] font-bold pb-3 border-b-2 transition-all duration-500 ${
                    active === i ? "border-gold text-ink" : "border-transparent text-ink/30 hover:text-ink/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-4 md:gap-10">
          {pieces.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1} className={p.span}>
              <Link to="/womens" className="group block relative overflow-hidden h-full bg-nude">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-700">
                  <div className="bg-ivory/95 p-6 text-center max-w-[80%] shadow-2xl">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">{p.name}</h4>
                    <p className="font-serif text-gold text-lg italic">{p.price}</p>
                    <div className="mt-4 pt-4 border-t border-ink/10">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-ink/60">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const products = [
    { name: "Ivory Heritage Sherwani", price: "₹1,85,000", img: prod1, tag: "Couture" },
    { name: "Indo-Western Tuxedo", price: "₹1,18,000", img: iwMen, tag: "Fusion" },
    { name: "Champagne Drape Gown", price: "₹1,12,000", img: prod2, tag: "Modern" },
    { name: "Minimal Silk Kurta", price: "₹32,000", img: casualLuxe, tag: "Casual" },
  ];
  return (
    <section className="py-24 md:py-48 px-6 md:px-16 bg-nude/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-24">
            <div className="max-w-xl">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">— Season Essentials</span>
              <h2 className="text-5xl md:text-7xl font-serif italic mt-6 leading-[0.95]">The Most <br /> <span className="not-italic">Coveted Pieces.</span></h2>
            </div>
            <Link to="/collections" className="group hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-ink/60 hover:text-gold transition-colors">
              Explore All <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-10">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-ivory shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ink text-ivory px-3 py-1 text-[8px] uppercase tracking-[0.3em] font-bold">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full bg-ivory text-ink text-[10px] uppercase tracking-[0.3em] font-bold py-4 shadow-xl hover:bg-gold hover:text-ivory transition-all">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-[12px] uppercase tracking-[0.25em] font-medium mb-2">{p.name}</h4>
                  <p className="font-serif text-gold text-lg italic">{p.price}</p>
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
    <section className="bg-ink text-ivory py-32 md:py-56 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: `url(${craft})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) brightness(0.5)' }} 
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 md:gap-32 items-center relative z-10">
        <FadeIn direction="left">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={craft}
                alt="Heritage Craftsmanship"
                loading="lazy"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3000ms]"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 size-48 md:size-72 border-2 border-gold/20 hidden md:block" />
            <motion.div 
              initial={{ rotate: -90 }}
              whileInView={{ rotate: 0 }}
              className="absolute -top-10 -left-10 bg-gold text-ink p-8 hidden lg:block"
            >
              <p className="font-serif italic text-xl leading-none">Since 2014</p>
            </motion.div>
          </div>
        </FadeIn>
        <div className="space-y-12">
          <FadeIn direction="right">
            <span className="text-gold text-[11px] uppercase tracking-[0.6em] font-bold">— The Laviva Narrative</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.85] mt-8 mb-12">
              Heritage. <br /> <span className="italic ml-12">Modernity.</span> <br /> Soul.
            </h2>
            <p className="text-ivory/60 text-lg leading-relaxed max-w-lg mb-12">
              Every Laviva creation is a dialogue between the past and the present. Born in our Virar atelier, our pieces are a testament to the hands that sew them and the people who wear them to celebrate life's finest moments.
            </p>
            <div className="flex flex-wrap gap-12 mb-16">
              {[
                { n: "10k+", l: "Dressed" },
                { n: "240+", l: "Artisans" },
                { n: "Virar", l: "Rooted" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-5xl text-gold italic leading-none">{s.n}</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/40 mt-4 font-bold">{s.l}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-4 border border-gold text-gold px-12 py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-ink transition-all duration-700"
            >
              Discover Our Origin <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Consult() {
  return (
    <section id="consult" className="relative py-32 md:py-56 px-6 md:px-16 bg-ivory text-ink overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <span className="text-gold text-[11px] uppercase tracking-[0.6em] font-bold">— Atelier Concierge</span>
          <h2 className="text-5xl md:text-8xl font-serif italic mt-8 mb-12 leading-[0.9]">
            Begin Your <br /> Couture Journey.
          </h2>
          <p className="text-ink/60 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Schedule a personal styling session at our flagship Virar atelier or experience our world-class digital concierge service from anywhere globally.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <form className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-left bg-nude/30 p-10 md:p-16 shadow-2xl">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink/40 ml-1">Identity</label>
              <input placeholder="Full Name" className="w-full bg-transparent border-b border-ink/20 py-4 text-sm placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink/40 ml-1">Connection</label>
              <input placeholder="Email Address" className="w-full bg-transparent border-b border-ink/20 py-4 text-sm placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink/40 ml-1">WhatsApp</label>
              <input placeholder="+91 00000 00000" className="w-full bg-transparent border-b border-ink/20 py-4 text-sm placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink/40 ml-1">The Occasion</label>
              <select className="w-full bg-transparent border-b border-ink/20 py-4 text-sm text-ink/60 focus:outline-none focus:border-gold transition-colors">
                <option className="bg-ivory">Groom's Wedding</option>
                <option className="bg-ivory">Bride's Wedding</option>
                <option className="bg-ivory">Indo-Western / Fusion</option>
                <option className="bg-ivory">Elevated Casual / Pret</option>
              </select>
            </div>
            <button 
              type="button" 
              onClick={() => toast.success("Inquiry Received. A stylist will reach out shortly.")}
              className="sm:col-span-2 mt-8 bg-ink text-ivory py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-ink transition-all duration-700 shadow-xl"
            >
              Request A Private Session
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
    <section className="py-24 md:py-32 bg-ivory border-t border-ink/5">
      <FadeIn>
        <div className="text-center mb-16 px-6">
          <span className="text-gold text-[11px] uppercase tracking-[0.6em] font-bold">— Our Community</span>
          <h2 className="text-4xl md:text-6xl font-serif italic mt-6">Dressed in Laviva</h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 px-2">
        {grid.map((img, i) => (
          <motion.a 
            key={i} 
            href="#" 
            whileHover={{ y: -10 }}
            className="relative aspect-[4/5] overflow-hidden group shadow-lg"
          >
            <img src={img} alt="Laviva Community" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <ShoppingBag className="size-6 text-ivory" strokeWidth={1.2} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function LogoBar() {
  const labels = ["vogue india", "elle", "harper's bazaar", "grazia", "brides today", "verve", "the hindu", "mint lounge", "the wedding brigade"];
  return (
    <section className="py-20 md:py-32 border-y border-ink/5 overflow-hidden bg-nude/20 relative">
      <FadeIn>
        <p className="text-center text-[9px] uppercase tracking-[0.6em] text-ink/40 mb-16 font-bold">
          Industry Recognition
        </p>
      </FadeIn>
      
      <div className="relative group">
        {/* Cinematic Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-nude/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-nude/20 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee [animation-duration:80s] whitespace-nowrap hover:[animation-play-state:paused] transition-all">
          {[...labels, ...labels, ...labels].map((l, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-28 px-8 md:px-14">
              <span className="font-serif text-2xl md:text-4xl tracking-wide text-ink/25 hover:text-gold transition-all duration-700 cursor-default italic lowercase font-light hover:scale-105 transform inline-block">
                {l}
              </span>
              <span className="text-gold/20 text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-ivory text-ink overflow-x-hidden selection:bg-gold selection:text-ivory">
      <Announcement />
      <Nav transparent />
      <Hero />
      <LogoBar />
      <Collections />
      <IndoWesternFeature />
      <CasualSection />
      <MensCouture />
      <WomensEdit />
      <BestSellers />
      <Story />
      <Consult />
      <InstagramFeed />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default Index;
