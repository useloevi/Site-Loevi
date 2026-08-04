import Cover from "../components/Cover";
import IntroSection from "../components/IntroSection";
import ProductGrid from "../components/ProductGrid";
import OrderFooter from "../components/OrderFooter";
import ProductGrid2 from "../components/ProductGrid2";
import ClosingFooter from "../components/ClosingFooter";

export default function Home() {
  return (
    <main>
      {/* Página 1 — Colares (001–017) */}
      <Cover />
      <IntroSection />
      <ProductGrid />
      <OrderFooter />

      {/* Página 2 — Brincos (018–033) */}
      <ProductGrid2 />
      <ClosingFooter />
    </main>
  );
}
