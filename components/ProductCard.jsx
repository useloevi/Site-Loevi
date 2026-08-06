import React from "react";
import Image from "next/image";
import "./ProductCard.css";

/**
 * ProductCard
 *
 * props:
 * - code, name, description, price, variant: "light" | "dark" | "olive"
 *
 * Imagem — dois modos:
 * 1) Estático:      imageSrc="/images/018.jpg"
 * 2) Com animação:  imageSrcA + imageSrcB (hover: "a" sai, "b" entra)
 *
 * As imagens usam o componente <Image> do Next.js com quality={100},
 * então não há perda de nitidez — o Next só gera tamanhos responsivos
 * (telas menores recebem uma versão menor do mesmo arquivo original,
 * telas grandes/Retina recebem a versão em resolução alta).
 */
export default function ProductCard({
  code,
  name,
  description,
  price,
  imageSrc,
  imageSrcA,
  imageSrcB,
  variant = "light",
}) {
  const hasSwap = Boolean(imageSrcA && imageSrcB);
  const imageSizes = "(max-width: 640px) 100vw, 500px";

  return (
    <div className={`product-card product-card--${variant}`}>
      <div className="product-card__image-wrap">
        {hasSwap ? (
          <div className="product-card__swap">
            <Image
              className="product-card__swap-img product-card__swap-img--a"
              src={imageSrcA}
              alt={`${name} - ${code}`}
              fill
              quality={100}
              sizes={imageSizes}
              style={{ objectFit: "cover" }}
            />
            <Image
              className="product-card__swap-img product-card__swap-img--b"
              src={imageSrcB}
              alt={`${name} - ${code} (variação)`}
              fill
              quality={100}
              sizes={imageSizes}
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : imageSrc ? (
          <div className="product-card__image">
            <Image
              src={imageSrc}
              alt={`${name} - ${code}`}
              fill
              quality={100}
              sizes={imageSizes}
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : (
          <div className="product-card__placeholder">
            FOTO {code}
            <br />
            {name}
          </div>
        )}
      </div>

      <div className="product-card__tag">
        <p className="product-card__name">
          {name} - {code}
        </p>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">{price}</p>
      </div>
    </div>
  );
}
