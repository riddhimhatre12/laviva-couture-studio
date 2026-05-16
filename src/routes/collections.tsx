import { createFileRoute } from "@tanstack/react-router";
import { CoutureCollectionPage } from "@/components/site/CoutureCollectionPage";
import hero from "@/assets/hero.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";
import colBridal from "@/assets/col-bridal.jpg";
import colPret from "@/assets/col-pret.jpg";
import colIndoWestern from "@/assets/col-indowestern.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Couture Collections — Laviva Couture, Virar" },
      { name: "description", content: "Explore Laviva Couture's full edit — wedding sherwanis, designer blazers, bridal lehengas, party gowns and Indo-western ensembles." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <CoutureCollectionPage
      eyebrow="The Atelier"
      title="The Full"
      italicWord="Couture Edit."
      intro="Every piece from the Laviva atelier — from groom wedding sherwanis to draped party gowns, hand-cut and finished in Virar."
      heroImg={hero}
      items={[
        { name: "Ivory Heritage Sherwani", price: "₹1,85,000", tag: "Groom", img: prod1 },
        { name: "Champagne Drape Gown", price: "₹1,12,000", tag: "Party", img: prod2 },
        { name: "Sapphire Velvet Sherwani", price: "₹2,10,000", tag: "Wedding", img: prod3 },
        { name: "Charcoal Designer Blazer", price: "₹68,000", tag: "Pret", img: prod4 },
        { name: "Ivory Heritage Lehenga", price: "₹1,68,000", tag: "Bridal", img: colBridal },
        { name: "Etheric Indo-Western Gown", price: "₹98,000", tag: "Fusion", img: colPret },
        { name: "Onyx Tuxedo Suit", price: "₹1,18,000", tag: "Reception", img: colIndoWestern },
        { name: "Champagne Drape Saree", price: "₹85,000", tag: "Festive", img: ig2 },
        { name: "Royal Velvet Bandhgala", price: "₹1,42,000", tag: "Reception", img: ig4 },
        { name: "Crystal Lace Cocktail", price: "₹92,000", tag: "Cocktail", img: ig5 },
      ]}
    />
  );
}
