import React from "react";
import ProductCard from "./ProductCard";
import "./ProductRow.css";

export default function ProductRow1() {
  return (
    <div className="product-row">
      <ProductCard
        code="001"
        name="Choker Rivieira Prata"
        description="Colar banhado a prata com pedrinhas de zircônia"
        price="R$ 49,80"
        imageSrc="/images/001-choker-rivieira-prata.jpg"
        variant="light"
      />
      <ProductCard
        code="002"
        name="Colar Navete Dourado"
        description="Colar banhado a ouro com pedrinhas de zircônia"
        price="R$ 49,00"
        imageSrc="/images/002-colar-navete-dourado.jpg"
        variant="dark"
      />
    </div>
  );
}
