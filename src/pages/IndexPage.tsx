import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Dumbbell, Flame, HeartPulse, Users, Apple, Trophy,
  Clock, MapPin, Phone, Mail, Menu, X, ArrowUpRight, Check, Star,
} from "lucide-react";
import { toast } from "sonner";

import hero from "@/assets/gym-hero.jpg";
import gymClass from "@/assets/gym-class.jpg";
import gymFloor from "@/assets/gym-floor.jpg";
import gymTrainer from "@/assets/gym-trainer.jpg";
import gymNutrition from "@/assets/gym-nutrition.jpg";
import gymCardio from "@/assets/gym-cardio.jpg";
import gymHiit from "@/assets/gym-hiit.jpg";

const ease = [0.19, 1, 0.22, 1] as const;

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Whatsapp = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.84a11.77 11.77 0 0 0-3.49-8.44ZM12.06 21.5h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.83 9.83 0 0 1-1.5-5.2c0-5.44 4.43-9.86 9.88-9.86a9.81 9.81 0 0 1 6.98 2.9 9.78 9.78 0 0 1 2.89 6.98c0 5.45-4.43 9.85-9.86 9.85Zm5.41-7.38c-.3-.15-1.76-.86-2.03-.96s-.47-.15-.67.15-.77.96-.94 1.16-.35.22-.65.07a8.1 8.1 0 0 1-2.38-1.47 8.94 8.94 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5s.05-.37-.03-.52-.67-1.61-.92-2.21c-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.07 2.91 1.22 3.11c.15.2 2.11 3.22 5.12 4.52a17 17 0 0 0 1.71.63c.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

// ------------------ NAV ------------------
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { l: "Home", h: "#home" },
    { l: "About", h: "#about" },
    { l: "Programs", h: "#programs" },
    { l: "Trainers", h: "#trainers" },
    { l: "Pricing", h: "#pricing" },
    { l: "Contact", h: "#contact" },
  ];
  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-jet/85 backdrop-blur-xl border-b border-bone/10 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="size-9 grid place-items-center bg-blood text-bone font-display text-xl tracking-wider group-hover:rotate-[12deg] transition-transform duration-500">RB</div>
            <div className="leading-tight">
              <div className="font-display text-bone text-lg tracking-[0.18em]">RB FITNESS</div>
              <div className="text-[9px] uppercase tracking-[0.4em] text-blood -mt-0.5">Gym & Nutrition</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a key={l.h} href={l.h} className="text-[12px] uppercase tracking-[0.25em] text-bone/70 hover:text-blood transition-colors relative group">
                {l.l}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-blood transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden md:inline-flex items-center gap-2 bg-blood hover:bg-ember text-bone px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors">
              Join Now <ArrowUpRight className="size-3.5" />
            </a>
            <button onClick={() => setOpen(true)} className="lg:hidden text-bone p-2" aria-label="Open menu">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-0 z-[60] bg-jet flex flex-col"
          >
            <div className="flex justify-between items-center px-5 py-5 border-b border-bone/10">
              <div className="font-display text-bone text-lg tracking-[0.18em]">RB FITNESS</div>
              <button onClick={() => setOpen(false)} className="text-bone p-2"><X className="size-6" /></button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {links.map((l, i) => (
                <motion.a key={l.h} href={l.h} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-display text-5xl text-bone hover:text-blood transition-colors tracking-wider"
                >
                  {l.l}
                </motion.a>
              ))}
            </nav>
            <div className="p-6 border-t border-bone/10">
              <a href="#pricing" onClick={() => setOpen(false)} className="block text-center bg-blood text-bone py-4 uppercase tracking-[0.25em] text-sm">Join Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ------------------ HERO ------------------
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-jet">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={hero} alt="Athlete performing barbell deadlift" width={1920} height={1080} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/70 to-jet/30" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-end pb-20 md:pb-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}
            className="flex items-center gap-3 mb-6">
            <span className="size-2 rounded-full bg-blood animate-pulse-red" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-bone/70">Vasai-Virar · Maharashtra</span>
          </motion.div>

          <h1 className="font-display text-bone leading-[0.85] text-[clamp(3.5rem,11vw,11rem)]">
            <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease, delay: 0.1 }} className="block">
              Train.
            </motion.span>
            <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease, delay: 0.25 }} className="block text-blood">
              Transform.
            </motion.span>
            <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease, delay: 0.4 }} className="block text-stroke">
              Dominate.
            </motion.span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.7 }}
            className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-bone/70 max-w-md text-base md:text-lg leading-relaxed">
              The most equipped strength & conditioning facility in Vasai-Virar. Built for fighters,
              athletes, and anyone done with average.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#pricing" className="bg-blood hover:bg-ember text-bone px-8 py-4 uppercase tracking-[0.25em] text-xs font-semibold transition-colors">
                Start Free Trial
              </a>
              <a href="#programs" className="border border-bone/30 hover:border-blood hover:text-blood text-bone px-8 py-4 uppercase tracking-[0.25em] text-xs font-semibold transition-colors">
                Our Programs
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bone/40 text-[10px] uppercase tracking-[0.4em]">
        Scroll
      </motion.div>
    </section>
  );
}

// ------------------ MARQUEE ------------------
function Marquee() {
  const items = ["Strength", "Cardio", "CrossFit", "HIIT", "Powerlifting", "Nutrition", "Personal Training", "Boxing"];
  const row = [...items, ...items, ...items];
  return (
    <section className="bg-blood text-bone py-6 border-y border-bone/10 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-3xl md:text-5xl tracking-[0.1em]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="text-bone/40">★</span>
          </span>
        ))}
      </div>
    </section>
  );
}

// ------------------ ABOUT ------------------
function About() {
  return (
    <section id="about" className="relative bg-jet text-bone py-24 md:py-36 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease }}
          className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={gymFloor} alt="RB Fitness gym floor" width={1600} height={1100} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-jet/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blood text-bone p-6 hidden md:block">
            <div className="font-display text-5xl leading-none">10+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] mt-2">Years strong</div>
          </div>
        </motion.div>

        <div className="md:col-span-7 md:pl-10">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-blood text-[11px] uppercase tracking-[0.4em]">— About RB Fitness</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}
            className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
            Where weak <br />becomes <span className="text-blood">unstoppable.</span>
          </motion.h2>
          <p className="text-bone/65 mt-7 max-w-xl leading-relaxed">
            RB Fitness Gym & Nutrition is Vasai-Virar's most serious training facility — built for
            people who refuse to settle. Premium equipment, certified coaches, and a culture that
            pushes you past every plateau.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { i: Dumbbell, t: "Pro Equipment", d: "Hammer Strength, Rogue, Life Fitness" },
              { i: Users, t: "Expert Coaches", d: "Certified strength & nutrition pros" },
              { i: Apple, t: "Nutrition Plans", d: "Custom diets engineered for results" },
              { i: HeartPulse, t: "24/7 Support", d: "Track progress, stay accountable" },
            ].map((f, i) => (
              <motion.div key={f.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="border-l-2 border-blood pl-4">
                <f.i className="size-5 text-blood mb-3" strokeWidth={1.6} />
                <div className="font-display text-xl tracking-wider">{f.t}</div>
                <div className="text-sm text-bone/60 mt-1">{f.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------ STATS ------------------
function Stats() {
  const stats = [
    { n: "2,500+", l: "Active Members" },
    { n: "25+", l: "Expert Trainers" },
    { n: "10k+", l: "Sq ft Facility" },
    { n: "98%", l: "Goals Achieved" },
  ];
  return (
    <section className="bg-onyx text-bone py-16 border-y border-bone/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center md:text-left">
            <div className="font-display text-5xl md:text-7xl text-blood">{s.n}</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-bone/60 mt-2">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ------------------ PROGRAMS ------------------
function Programs() {
  const programs = [
    { t: "Strength & Power", d: "Heavy compounds, progressive overload, raw strength built for life.", img: hero, icon: Dumbbell },
    { t: "HIIT & CrossFit", d: "High-intensity circuits that torch fat and forge mental toughness.", img: gymHiit, icon: Flame },
    { t: "Cardio Conditioning", d: "Treadmills, rowers, bikes — engineered endurance.", img: gymCardio, icon: HeartPulse },
    { t: "Personal Training", d: "1-on-1 coaching with custom programming and nutrition.", img: gymTrainer, icon: Trophy },
    { t: "Women's Fit Club", d: "Strong, sculpted, confident — coached in a focused environment.", img: gymClass, icon: Users },
    { t: "Nutrition & Diet", d: "Macro-based meal plans crafted by certified dietitians.", img: gymNutrition, icon: Apple },
  ];
  return (
    <section id="programs" className="bg-jet text-bone py-24 md:py-36 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-blood text-[11px] uppercase tracking-[0.4em]">— What we offer</span>
            <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
              Programs built<br />to <span className="text-blood">break limits.</span>
            </h2>
          </div>
          <p className="text-bone/60 max-w-sm">
            Six core disciplines. One mission: become the strongest version of yourself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.article key={p.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-onyx"
            >
              <img src={p.img} alt={p.t} width={800} height={1000} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/40 to-transparent" />

              <div className="absolute top-5 left-5 size-12 grid place-items-center border border-bone/30 text-blood group-hover:bg-blood group-hover:text-bone group-hover:border-blood transition-all">
                <p.icon className="size-5" strokeWidth={1.6} />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 md:p-7">
                <h3 className="font-display text-3xl md:text-4xl mb-2 tracking-wider">{p.t}</h3>
                <p className="text-bone/65 text-sm leading-relaxed mb-4 max-w-[28ch]">{p.d}</p>
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-blood">
                  Explore <ArrowUpRight className="size-4" />
                </div>
              </div>
              <div className="absolute inset-0 border border-bone/0 group-hover:border-blood/60 transition-colors" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------ FEATURE STRIP ------------------
function FeatureStrip() {
  return (
    <section className="relative bg-onyx text-bone py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="text-blood text-[11px] uppercase tracking-[0.4em]">— Nutrition Lab</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.9]">
            Train hard. <br /><span className="text-stroke-red">Fuel smarter.</span>
          </h2>
          <p className="text-bone/65 mt-6 max-w-md leading-relaxed">
            Our in-house nutrition lab builds custom meal plans, supplement protocols and recovery
            stacks — engineered to match your training and goals.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "1-on-1 dietitian consultation",
              "Body composition analysis",
              "Whey, mass-gainer & supplement counter",
              "Weekly check-ins & adjustments",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-bone/80">
                <span className="size-5 grid place-items-center bg-blood text-bone shrink-0"><Check className="size-3" strokeWidth={3} /></span>
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 mt-10 bg-blood hover:bg-ember text-bone px-7 py-3.5 uppercase tracking-[0.25em] text-[11px] font-semibold transition-colors">
            Book Consultation <ArrowUpRight className="size-4" />
          </a>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }}
          className="relative aspect-[4/5]">
          <img src={gymNutrition} alt="Nutrition supplements" width={1280} height={1600} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute -bottom-5 -left-5 bg-jet border border-blood p-5 max-w-[200px]">
            <div className="font-display text-3xl text-blood">100%</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-bone/60 mt-1">Authentic supplements</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ------------------ TRAINERS ------------------
function Trainers() {
  const trainers = [
    { n: "Rohit Bhoir", r: "Founder · Head Coach", img: gymTrainer, sp: "Strength · Powerlifting" },
    { n: "Priya Sharma", r: "Women's Fitness Lead", img: gymClass, sp: "HIIT · Transformation" },
    { n: "Aditya Kale", r: "Performance Coach", img: gymCardio, sp: "Cardio · Endurance" },
  ];
  return (
    <section id="trainers" className="bg-jet text-bone py-24 md:py-36 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blood text-[11px] uppercase tracking-[0.4em]">— Meet the team</span>
          <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
            Coached by <span className="text-blood">the best.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div key={t.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-onyx mb-5">
                <img src={t.img} alt={t.n} width={1280} height={1600} loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-blood">0{i + 1}</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl tracking-wider">{t.n}</h3>
                  <p className="text-bone/60 text-[11px] uppercase tracking-[0.25em] mt-1">{t.r}</p>
                </div>
                <span className="text-blood text-xs">{t.sp}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------ PRICING ------------------
function Pricing() {
  const plans = [
    { n: "Starter", p: "1,499", per: "/month", f: ["Gym access (off-peak)", "Locker room", "Basic equipment", "1 group class /week"], hl: false },
    { n: "Pro", p: "2,499", per: "/month", f: ["24/7 gym access", "All group classes", "Free body assessment", "1 PT session /month", "Nutrition guide"], hl: true },
    { n: "Elite", p: "4,999", per: "/month", f: ["Everything in Pro", "8 PT sessions /month", "Custom diet plan", "Supplement discount", "Priority booking"], hl: false },
  ];
  return (
    <section id="pricing" className="bg-onyx text-bone py-24 md:py-36 px-5 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-blood text-[11px] uppercase tracking-[0.4em]">— Memberships</span>
          <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
            Choose your <span className="text-blood">battle plan.</span>
          </h2>
          <p className="text-bone/60 mt-6 max-w-md mx-auto">All plans include a free trial day. No commitment, no joining fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((pl, i) => (
            <motion.div key={pl.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative p-8 md:p-10 border ${pl.hl ? "bg-blood border-blood text-bone scale-[1.02] md:scale-105" : "bg-jet border-bone/15"}`}>
              {pl.hl && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-jet text-blood px-4 py-1 text-[10px] uppercase tracking-[0.3em] border border-blood">
                  Most Popular
                </div>
              )}
              <h3 className={`font-display text-3xl tracking-wider ${pl.hl ? "text-bone" : "text-blood"}`}>{pl.n}</h3>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-2xl font-light">₹</span>
                <span className="font-display text-6xl">{pl.p}</span>
                <span className={`mb-2 text-sm ${pl.hl ? "text-bone/80" : "text-bone/50"}`}>{pl.per}</span>
              </div>
              <div className={`h-px my-6 ${pl.hl ? "bg-bone/30" : "bg-bone/15"}`} />
              <ul className="space-y-3 mb-8">
                {pl.f.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check className={`size-4 mt-0.5 shrink-0 ${pl.hl ? "text-bone" : "text-blood"}`} strokeWidth={2.5} />
                    <span className={pl.hl ? "text-bone/95" : "text-bone/75"}>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3.5 uppercase tracking-[0.25em] text-[11px] font-semibold transition-colors ${pl.hl ? "bg-jet text-bone hover:bg-bone hover:text-jet" : "bg-blood text-bone hover:bg-ember"}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------ TESTIMONIALS ------------------
function Testimonials() {
  const reviews = [
    { n: "Karan Mehta", r: "Lost 22 kg in 6 months. The coaches at RB don't let you settle for less. Best gym in Vasai.", role: "Member · 2 yrs" },
    { n: "Sneha Patil", r: "Joined for weight loss, stayed for the strength. Real coaching, real community.", role: "Member · 1 yr" },
    { n: "Vivek Naik", r: "Powerlifting setup is on point. Squat racks, deadlift platforms — everything a serious lifter needs.", role: "Powerlifter" },
  ];
  return (
    <section className="bg-jet text-bone py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blood text-[11px] uppercase tracking-[0.4em]">— Real results</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4">Voices from the floor</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rv, i) => (
            <motion.div key={rv.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="border border-bone/15 p-8 hover:border-blood transition-colors">
              <div className="flex gap-1 mb-5 text-blood">
                {[...Array(5)].map((_, k) => <Star key={k} className="size-4 fill-blood" />)}
              </div>
              <p className="text-bone/80 leading-relaxed mb-6 text-[15px]">"{rv.r}"</p>
              <div className="font-display text-xl tracking-wider">{rv.n}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mt-1">{rv.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------ CTA ------------------
function CTA() {
  return (
    <section className="relative py-28 md:py-40 px-5 md:px-10 overflow-hidden bg-jet">
      <img src={gymFloor} alt="" width={1600} height={1100} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-jet via-jet/85 to-jet/40" />
      <div className="max-w-5xl mx-auto relative text-center">
        <h2 className="font-display text-5xl md:text-9xl leading-[0.85]">
          Your <span className="text-blood">excuses</span><br />end here.
        </h2>
        <p className="text-bone/65 mt-8 max-w-lg mx-auto">
          Walk in for a free trial day. Tour the facility. Feel the energy. Decide afterwards.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="bg-blood hover:bg-ember text-bone px-10 py-5 uppercase tracking-[0.3em] text-xs font-semibold">
            Claim Free Trial
          </a>
          <a href="tel:+919876543210" className="border border-bone/30 hover:border-blood text-bone px-10 py-5 uppercase tracking-[0.3em] text-xs font-semibold">
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ------------------ CONTACT ------------------
function Contact() {
  return (
    <section id="contact" className="bg-onyx text-bone py-24 md:py-36 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-blood text-[11px] uppercase tracking-[0.4em]">— Visit · Call · Join</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.9]">Find us in <span className="text-blood">Vasai-Virar.</span></h2>
          <p className="text-bone/65 mt-6 max-w-md">Walk in any day for a no-strings tour. Or drop a message — we'll get back within 12 hours.</p>

          <div className="mt-10 space-y-5">
            {[
              { i: MapPin, l: "Address", v: "RB Fitness Gym & Nutrition, Near Station Road, Virar West, Vasai-Virar, Maharashtra 401303" },
              { i: Phone, l: "Phone", v: "+91 98765 43210" },
              { i: Mail, l: "Email", v: "hello@rbfitness.in" },
              { i: Clock, l: "Hours", v: "Mon–Sat · 5 AM – 11 PM  |  Sun · 6 AM – 10 PM" },
            ].map((c) => (
              <div key={c.l} className="flex items-start gap-4 border-l-2 border-blood pl-4">
                <c.i className="size-5 text-blood mt-1 shrink-0" strokeWidth={1.6} />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50">{c.l}</div>
                  <div className="text-bone/90 text-sm mt-1">{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-10">
            {[Instagram, Facebook, Whatsapp].map((Icon, i) => (
              <a key={i} href="#" className="size-11 grid place-items-center border border-bone/20 hover:bg-blood hover:border-blood transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <form className="bg-jet border border-bone/10 p-8 md:p-10 space-y-5" onSubmit={(e) => { e.preventDefault(); toast.success("Request received — we'll call you shortly."); }}>
          <h3 className="font-display text-3xl tracking-wider mb-2">Start your journey</h3>
          <input required placeholder="Full Name" className="w-full bg-transparent border-b border-bone/20 py-3 text-sm placeholder:text-bone/40 focus:outline-none focus:border-blood transition-colors" />
          <input required type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-bone/20 py-3 text-sm placeholder:text-bone/40 focus:outline-none focus:border-blood transition-colors" />
          <input type="email" placeholder="Email (optional)" className="w-full bg-transparent border-b border-bone/20 py-3 text-sm placeholder:text-bone/40 focus:outline-none focus:border-blood transition-colors" />
          <select className="w-full bg-transparent border-b border-bone/20 py-3 text-sm text-bone/70 focus:outline-none focus:border-blood transition-colors">
            <option className="bg-jet">Interested in · Free Trial</option>
            <option className="bg-jet">Membership · Starter</option>
            <option className="bg-jet">Membership · Pro</option>
            <option className="bg-jet">Membership · Elite</option>
            <option className="bg-jet">Personal Training</option>
            <option className="bg-jet">Nutrition Plan</option>
          </select>
          <textarea rows={3} placeholder="Tell us your goal (optional)" className="w-full bg-transparent border-b border-bone/20 py-3 text-sm placeholder:text-bone/40 focus:outline-none focus:border-blood transition-colors resize-none" />
          <button type="submit" className="w-full mt-3 bg-blood hover:bg-ember text-bone py-4 uppercase tracking-[0.3em] text-[11px] font-semibold transition-colors">
            Book My Free Trial
          </button>
        </form>
      </div>
    </section>
  );
}

// ------------------ FOOTER ------------------
function Footer() {
  return (
    <footer className="bg-jet text-bone border-t border-bone/10 pt-16 pb-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="size-10 grid place-items-center bg-blood text-bone font-display text-xl tracking-wider">RB</div>
              <div>
                <div className="font-display text-bone text-lg tracking-[0.18em]">RB FITNESS</div>
                <div className="text-[9px] uppercase tracking-[0.4em] text-blood -mt-0.5">Gym & Nutrition</div>
              </div>
            </div>
            <p className="text-bone/55 text-sm max-w-sm leading-relaxed">
              Vasai-Virar's premier strength, conditioning & nutrition facility. Built for those who
              chase progress, not comfort.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-blood mb-5">Explore</h4>
            <ul className="space-y-2.5 text-sm text-bone/70">
              <li><a href="#about" className="hover:text-blood">About</a></li>
              <li><a href="#programs" className="hover:text-blood">Programs</a></li>
              <li><a href="#trainers" className="hover:text-blood">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-blood">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-blood mb-5">Reach Us</h4>
            <ul className="space-y-2.5 text-sm text-bone/70">
              <li>Virar West, Vasai-Virar</li>
              <li>+91 98765 43210</li>
              <li>hello@rbfitness.in</li>
              <li>5 AM – 11 PM Daily</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-bone/40">
          <p>© 2026 RB Fitness Gym & Nutrition · All Rights Reserved</p>
          <p>Made with iron & sweat in Vasai-Virar</p>
        </div>
      </div>
    </footer>
  );
}

// ------------------ FLOATING WHATSAPP ------------------
function FloatingWA() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 size-14 grid place-items-center bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform animate-pulse-red">
      <Whatsapp className="size-6" />
    </a>
  );
}

export default function IndexPage() {
  return (
    <main className="bg-jet text-bone overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Programs />
      <FeatureStrip />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWA />
    </main>
  );
}
