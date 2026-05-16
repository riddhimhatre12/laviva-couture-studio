import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Announcement, Nav, FloatingWhatsApp } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/Reveal";

export interface PageItem {
  name: string;
  price: string;
  tag: string;
  img: string;
}

export function CoutureCollectionPage({
  eyebrow,
  title,
  italicWord,
  intro,
  heroImg,
  items,
  ctaLabel = "Book Consultation",
}: {
  eyebrow: string;
  title: string;
  italicWord: string;
  intro: string;
  heroImg: string;
  items: PageItem[];
  ctaLabel?: string;
}) {
  return (
    <main className="bg-ivory text-ink overflow-x-hidden">
      <Announcement />
      <Nav />
      {/* Page Hero */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden bg-nude pt-[88px]">
        <img
          src={heroImg}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover animate-reveal"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/40" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-end pb-16 md:pb-24">
          <FadeIn>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— {eyebrow}</span>
            <h1 className="text-ivory font-serif text-5xl md:text-8xl mt-4 leading-[0.95]">
              {title} <span className="italic font-light">{italicWord}</span>
            </h1>
            <p className="text-ivory/75 max-w-xl mt-6 leading-relaxed">{intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map((p, i) => (
              <FadeIn key={p.name + i} delay={(i % 4) * 0.08}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-champagne/30">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={1024}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-ivory/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em]">
                      {p.tag}
                    </span>
                    <button
                      aria-label="Wishlist"
                      className="absolute top-3 right-3 size-9 bg-ivory/90 flex items-center justify-center hover:bg-gold hover:text-ivory transition-colors"
                    >
                      <Heart className="size-3.5" strokeWidth={1.2} />
                    </button>
                  </div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em]">{p.name}</h3>
                  <p className="font-serif text-gold text-base mt-1">{p.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="flex justify-center mt-20">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-700"
              >
                {ctaLabel}
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.2} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
