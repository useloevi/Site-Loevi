import React from "react";
import ProductCard from "./ProductCard";
import "./ProductRow.css";

// Imagens: "<código> a.jpg" e "<código> b.jpg" dentro de public/images/
// Cards 001–016: animação de hover (a some, b desliza da direita)
// Card 017: card único, estático, ocupa a linha inteira — usa só "017 a.jpg"
const products = [
  ["001", "Choker Rivieira Prata", "Colar banhado a prata com pedrinhas de zircônia", "Indisponível"],
  ["002", "Colar Navete Dourado", "Colar banhado a ouro com pedrinhas de zircônia", "R$ 49,00"],
  ["003", "Choker Florença", "Colar banhado a prata", "Indisponível"],
  ["004", "Choker Amendoada", "Colar banhado a prata", "R$ 41,80"],
  ["005", "Choker Elos", "Colar banhado a prata com elos quadrados", "R$ 37,80"],
  ["006", "Colar V Cristais", "Colar banhado a prata com cristais em zircônia", "R$ 37,80"],
  ["007", "Colar Espírito Santo", "Colar banhado a ouro com pedrinhas de zircônia", "R$ 39,80"],
  ["008", "Choker Solar", "Colar banhado a ouro", "Indisponível"],
  ["009", "Colar Bolinhas", "Colar banhado a prata", "Indisponível"],
  ["010", "Colar Gota", "Colar banhado a ouro", "Indisponível"],
  ["011", "Colar Gota Cristal", "Colar banhado a ouro com pedra de zircônia", "R$ 37,80"],
  ["012", "Colar Arco", "Colar banhado a ouro com pedrinhas de zircônia", "R$ 35,80"],
  ["013", "Colar Mini Corações", "Colar banhado a ouro", "R$ 39,80"],
  ["014", "Colar Duplo Coração", "Colar banhado a ouro", "Indisponível"],
  ["015", "Colar Gota Glow", "Colar banhado a prata com pedra de zircônia", "R$ 41,80"],
  ["016", "Conjunto Turmalina", "Conjunto de colar e brincos banhados a prata com pedra verde", "R$ 63,80"],
];

// Card 017 vem separado: agora é único e estático (sem hover, sem "b")
const featuredProduct = [
  "017",
  "Conjunto Aparecida",
  "Conjunto de colar e brincos banhados a prata com pedrinhas de zircônia",
  "R$ 49,80",
];

// Mesmo mosaico diagonal de cores usado no Figma: branco / verde escuro / oliva
const VARIANTS = ["light", "dark", "olive"];

export default function ProductGrid() {
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push([products[i], products[i + 1]]);
  }

  return (
    <div id="colares" className="product-grid product-grid--necklaces">
      {rows.map((pair, rowIndex) => (
        <div className="product-row" key={`row-${rowIndex}`}>
          {pair.map((product, colIndex) => {
            if (!product) return null;
            const [code, name, description, price] = product;
            const variantIndex = (rowIndex * 2 + colIndex) % 3;
            return (
              <ProductCard
                key={code}
                code={code}
                name={name}
                description={description}
                price={price}
                imageSrcA={`/images/${code} a.jpg`}
                imageSrcB={`/images/${code} b.jpg`}
                variant={VARIANTS[variantIndex]}
              />
            );
          })}
        </div>
      ))}

      {/* Card 017: linha só com ele, ocupa a largura inteira */}
      <div className="product-row">
        <ProductCard
          code={featuredProduct[0]}
          name={featuredProduct[1]}
          description={featuredProduct[2]}
          price={featuredProduct[3]}
          imageSrc={`/images/${featuredProduct[0]} a.jpg`}
          variant={VARIANTS[(rows.length * 2) % 3]}
        />
      </div>
    </div>
  );
}
