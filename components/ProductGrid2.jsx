import React from "react";
import ProductCard from "./ProductCard";
import "./ProductRow.css";

// Todas com imagem única e estática: "<código>.jpg" (sem espaço, sem a/b)
const products = [
  ["018", "Argola Dois Aros", "Brincos banhados a prata com pedrinhas de zircônia", "R$ 39,80"],
  ["019", "Argola Média", "Brincos de aço inoxidável dourado", "R$ 33,80"],
  ["020", "Argola Click Angular", "Brincos banhados a prata com pedrinhas de zircônia", "R$ 29,80"],
  ["021", "Argolinhas Estrela", "Brincos banhados a prata com pedrinhas de zircônia", "R$ 39,80"],
  ["022", "Trio Argolinhas Torcidas", "Kit 3 Brincos banhados a ouro", "R$ 47,80"],
  ["023", "Brincos Gotas de Zircônia", "Brincos banhados a prata com pedras de zircônia", "R$ 38,80"],
  ["024", "Brincos Zircônia Solar", "Brincos banhados a ouro com pedras de zircônia irregulares", "R$ 38,80"],
  ["025", "Brinco Asa de Fada Dourado", "Brincos banhados a ouro com pedrinhas de zircônia", "R$ 38,80"],
  ["026", "Brincos Flor de Zircônia", "Brincos banhados a prata com pedrinhas de zircônia", "R$ 37,80"],
  ["027", "Brinco Sol", "Brincos banhados a ouro", "R$ 33,80"],
  ["028", "Argola Tradicional G", "Brincos banhados a ouro com pedras de zircônia irregulares", "R$ 23,80"],
  ["029", "Argola Quadrada", "Brincos banhados a prata", "R$ 41,80"],
  ["030", "Piercing Fake Zig Zag", "Piercing fake banhado a prata com pedrinhas, 1 unidade", "R$ 19,90"],
  ["031", "Piercing Fake Torcido", "Piercing fake banhado a prata, 1 unidade", "R$ 19,90"],
  ["032", "Trio Turmalina", "3 Brincos banhados a prata com pedras", "R$ 39,80"],
  ["033", "Argola Achatada Dourada", "Brincos banhados a ouro", "R$ 49,80"],
];

const VARIANTS = ["olive", "light", "dark"];

export default function ProductGrid2() {
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push([products[i], products[i + 1]]);
  }

  return (
    <>
      {rows.map((pair, rowIndex) => (
        <div className="product-row" key={`row2-${rowIndex}`}>
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
                imageSrc={`/images/${code}.jpg`}
                variant={VARIANTS[variantIndex]}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
