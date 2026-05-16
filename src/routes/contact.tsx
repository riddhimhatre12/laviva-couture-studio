import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { Announcement, Nav, FloatingWhatsApp } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Consultation — Laviva Couture, Virar" },
      { name: "description", content: "Book a private styling consultation at the Laviva Couture atelier in Virar West, Mumbai. WhatsApp, call or email our concierge." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="bg-ivory text-ink overflow-x-hidden">
      <Announcement />
      <Nav />

      <section className="pt-[160px] pb-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em]">— Concierge Atelier</span>
            <h1 className="text-5xl md:text-8xl font-serif mt-6 leading-[1]">
              Book your <span className="italic font-light">private appointment.</span>
            </h1>
            <p className="text-ink/65 max-w-xl mx-auto mt-8 leading-relaxed">
              Whether it's a wedding sherwani, a bridal lehenga or a one-off couture piece — our
              master tailors will guide you through a private fitting at our Virar boutique.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16">
          <FadeIn className="md:col-span-3">
            <form className="grid sm:grid-cols-2 gap-6">
              <input placeholder="Full Name" className="bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors" />
              <input placeholder="Email Address" className="bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors" />
              <input placeholder="WhatsApp Number" className="bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors" />
              <select className="bg-transparent border-b border-ink/30 py-3 text-sm text-ink/60 focus:outline-none focus:border-gold transition-colors">
                <option>Occasion · Groom Wedding</option>
                <option>Occasion · Bride Wedding</option>
                <option>Occasion · Reception / Cocktail</option>
                <option>Occasion · Indo-Western</option>
                <option>Occasion · Festive / Party</option>
                <option>Occasion · Bespoke / Other</option>
              </select>
              <input placeholder="Preferred Date" type="date" className="sm:col-span-2 bg-transparent border-b border-ink/30 py-3 text-sm text-ink/60 focus:outline-none focus:border-gold transition-colors" />
              <textarea placeholder="Tell us about your occasion" rows={4} className="sm:col-span-2 bg-transparent border-b border-ink/30 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors resize-none" />
              <button 
                type="button" 
                onClick={() => toast.success("Appointment Request Received")}
                className="sm:col-span-2 mt-4 bg-ink text-ivory py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500"
              >
                Reserve Appointment
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-2">
            <div className="bg-nude p-8 md:p-10 space-y-7">
              <h3 className="font-serif text-2xl italic">The Boutique</h3>
              <div className="space-y-5 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="size-4 text-gold shrink-0 mt-0.5" strokeWidth={1.4} />
                  <span>Shop 42, Heritage Plaza,<br />Virar West, Mumbai 401303</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-4 text-gold shrink-0" strokeWidth={1.4} />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="size-4 text-gold shrink-0" strokeWidth={1.4} />
                  hello@lavivacouture.in
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="size-4 text-gold shrink-0 mt-0.5" strokeWidth={1.4} />
                  <span>Mon–Sat · 11:00 AM – 9:00 PM<br />Sundays by appointment</span>
                </p>
              </div>
              <a
                href="https://wa.me/919876543210"
                className="block text-center w-full bg-[#25D366] text-ivory py-3.5 text-[11px] uppercase tracking-[0.3em] hover:opacity-90 transition-opacity"
              >
                Quick connect on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
