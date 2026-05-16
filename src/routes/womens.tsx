import { createFileRoute } from "@tanstack/react-router";
import { CoutureCollectionPage } from "@/components/site/CoutureCollectionPage";
import colBridal from "@/assets/col-bridal.jpg";
import colPret from "@/assets/col-pret.jpg";
import prod2 from "@/assets/prod-2.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig5 from "@/assets/ig-5.jpg";

export const Route = createFileRoute("/womens")({
  head: () => ({
    meta: [
      { title: "Women's Wear — Bridal Lehengas, Party Gowns & Indo-Western | Laviva" },
      { name: "description", content: "Hand-crafted bridal lehengas, draped silk gowns, Indo-western ensembles and elegant party wear from Laviva Couture, Virar." },
    ],
  }),
  component: WomensPage,
});

function WomensPage() {
  return (
    <CoutureCollectionPage
      eyebrow="Women's Wear"
      title="The Boudoir"
      italicWord="Edit."
      intro="From ceremonial lehengas to Indo-western drapes and party-ready gowns — boutique couture for every occasion."
      heroImg={colBridal}
      items={[
        { name: "Ivory Heritage Lehenga", price: "₹1,68,000", tag: "Bridal", img: colBridal },
        { name: "Champagne Drape Gown", price: "₹1,12,000", tag: "Party", img: prod2 },
        { name: "Etheric Indo-Western Gown", price: "₹98,000", tag: "Fusion", img: colPret },
        { name: "Champagne Drape Saree", price: "₹85,000", tag: "Festive", img: ig2 },
        { name: "Crystal Lace Cocktail", price: "₹92,000", tag: "Cocktail", img: ig5 },
        { name: "Gilded Reception Gown", price: "₹1,28,000", tag: "Reception", img: prod2 },
        { name: "Heritage Anarkali", price: "₹78,000", tag: "Festive", img: colPret },
        { name: "Obsidian Couture Saree", price: "₹1,05,000", tag: "Party", img: ig5 },
      ]}
      ctaLabel="Book Bridal Consultation"
    />
  );
}
