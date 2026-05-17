import { CoutureCollectionPage } from "@/components/site/CoutureCollectionPage";
import ig6 from "@/assets/ig-6.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import colPret from "@/assets/col-pret.jpg";

export default function NewArrivalsPage() {
  return (
    <CoutureCollectionPage
      eyebrow="Just Landed"
      title="New Arrivals,"
      italicWord="Volume IV."
      intro="The latest cuts from our Virar atelier — limited pieces, hand-finished for the season's most coveted occasions."
      heroImg={ig6}
      items={[
        { name: "Ivory Heritage Sherwani", price: "₹1,85,000", tag: "New", img: prod1 },
        { name: "Sapphire Velvet Sherwani", price: "₹2,10,000", tag: "New", img: prod3 },
        { name: "Champagne Drape Gown", price: "₹1,12,000", tag: "New", img: prod2 },
        { name: "Royal Velvet Bandhgala", price: "₹1,42,000", tag: "New", img: ig4 },
        { name: "Etheric Indo-Western Gown", price: "₹98,000", tag: "New", img: colPret },
        { name: "Crystal Lace Cocktail", price: "₹92,000", tag: "New", img: ig5 },
      ]}
    />
  );
}
