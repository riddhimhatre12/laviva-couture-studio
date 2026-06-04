import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import IndexPage from "@/pages/IndexPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<IndexPage />} />
      </Routes>
      <Toaster position="bottom-right" theme="dark" richColors />
    </BrowserRouter>
  );
}
