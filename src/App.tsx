import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import IndexPage from "@/pages/IndexPage";
import AboutPage from "@/pages/AboutPage";
import CollectionsPage from "@/pages/CollectionsPage";
import ContactPage from "@/pages/ContactPage";
import MensPage from "@/pages/MensPage";
import WomensPage from "@/pages/WomensPage";
import NewArrivalsPage from "@/pages/NewArrivalsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
      </Routes>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  );
}
