import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Announcement, Nav, FloatingWhatsApp } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/Reveal";
import craft from "@/assets/craft.jpg";
import ig6 from "@/assets/ig-6.jpg";
import ig3 from "@/assets/ig-3.jpg";

export default function AboutPage() {
  return (
    <main className="bg-ivory text-ink overflow-x-hidden">
      <Announcement />
      <Nav />

      <section className="pt-[160px] pb-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Our Story</span>
            <h1 className="text-5xl md:text-8xl font-serif mt-6 leading-[1]">
              A couture house <br />
              <span className="italic font-light">crafted in Virar.</span>
            </h1>
            <p className="text-ink/65 max-w-2xl mx-auto mt-8 leading-relaxed text-lg">
              Laviva Couture began in 2014 as a single tailoring room in Virar West. A decade later,
              we are a full atelier dressing grooms in heirloom sherwanis, brides in hand-embroidered
              lehengas, and the modern Indian woman in cuts that move between heritage and now.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <FadeIn><img src={craft} alt="Zardozi embroidery" width={800} height={1000} className="w-full aspect-[4/5] object-cover" /></FadeIn>
          <FadeIn delay={0.15}><img src={ig6} alt="Laviva couple campaign" width={800} height={1000} className="w-full aspect-[4/5] object-cover md:translate-y-12" /></FadeIn>
          <FadeIn delay={0.3}><img src={ig3} alt="Gold detailing" width={800} height={1000} className="w-full aspect-[4/5] object-cover" /></FadeIn>
        </div>
      </section>

      <section className="bg-nude py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "12+", l: "Years of craft" },
            { n: "240+", l: "Master artisans" },
            { n: "8,000+", l: "Clients dressed" },
          ].map((s) => (
            <FadeIn key={s.l}>
              <p className="font-serif text-5xl md:text-6xl text-gold">{s.n}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink/60 mt-3">{s.l}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-16 text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-6xl italic">Visit the atelier.</h2>
          <p className="text-ink/60 mt-6 max-w-md mx-auto">
            Shop 42, Heritage Plaza, Virar West, Mumbai. By appointment only.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 mt-10 bg-ink text-ivory px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-700">
            Book Consultation <ArrowRight className="size-4" strokeWidth={1.2} />
          </Link>
        </FadeIn>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
