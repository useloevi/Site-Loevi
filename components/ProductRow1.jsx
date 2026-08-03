import React from "react";
import ProductCard from "./ProductCard";
import "./ProductRow.css";

// Imagens: coloque os arquivos com esses nomes exatos dentro de public/images/
// 001 a.jpg / 001 b.jpg / 002 a.jpg / 002 b.jpg
export default function ProductRow1() {
  return (
    <div className="product-row">
      <ProductCard
        code="001"
        name="Choker Rivieira Prata"
        description="Colar banhado a prata com pedrinhas de zircônia"
        price="R$ 49,80"
        imageSrcA="/images/001 a.jpg"
        imageSrcB="/images/001 b.jpg"
        variant="light"
      />
      <ProductCard
        code="002"
        name="Colar Navete Dourado"
        description="Colar banhado a ouro com pedrinhas de zircônia"
        price="R$ 49,00"
        imageSrcA="/images/002 a.jpg"
        imageSrcB="/images/002 b.jpg"
        variant="dark"
      />
    </div>
  );
}
