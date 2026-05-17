import { CoutureCollectionPage } from "@/components/site/CoutureCollectionPage";
import hero from "@/assets/hero.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";
import colIndoWestern from "@/assets/col-indowestern.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig4 from "@/assets/ig-4.jpg";

export default function MensPage() {
  return (
    <CoutureCollectionPage
      eyebrow="Men's Couture"
      title="The Groom's"
      italicWord="Atelier."
      intro="Wedding sherwanis, hand-embroidered bandhgalas, sculpted tuxedos and designer blazers — tailored in our Virar atelier."
      heroImg={hero}
      items={[
        { name: "Ivory Heritage Sherwani", price: "₹1,85,000", tag: "Wedding", img: prod1 },
        { name: "Sapphire Velvet Sherwani", price: "₹2,10,000", tag: "Wedding", img: prod3 },
        { name: "Royal Velvet Bandhgala", price: "₹1,42,000", tag: "Reception", img: ig4 },
        { name: "Onyx Tuxedo Suit", price: "₹1,18,000", tag: "Reception", img: colIndoWestern },
        { name: "Charcoal Designer Blazer", price: "₹68,000", tag: "Pret", img: prod4 },
        { name: "Champagne Ceremonial Sherwani", price: "₹1,95,000", tag: "Groom", img: ig1 },
        { name: "Indo-Western Bandhgala", price: "₹98,000", tag: "Festive", img: prod1 },
        { name: "Midnight Tailored Blazer", price: "₹72,000", tag: "Cocktail", img: prod4 },
      ]}
      ctaLabel="Book Groom Styling"
    />
  );
}
