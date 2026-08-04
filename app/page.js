import Cover from "../components/Cover";
import IntroSection from "../components/IntroSection";
import ProductGrid from "../components/ProductGrid";
import OrderFooter from "../components/OrderFooter";

export default function Home() {
  return (
    <main>
      <Cover />
      <IntroSection />
      <ProductGrid />
      <OrderFooter />
    </main>
  );
}
