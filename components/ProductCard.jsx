import React from "react";
import "./ProductCard.css";

/**
 * ProductCard
 *
 * props:
 * - code: string        -> product code, e.g. "001"
 * - name: string
 * - description: string
 * - price: string
 * - variant: "light" | "dark"  -> card background / tag color combo
 *
 * Imagem — dois modos:
 * 1) Estático:      imageSrc="/images/001.jpg"
 * 2) Com animação:  imageSrcA="/images/001 a.jpg"  imageSrcB="/images/001 b.jpg"
 *    -> "b" começa oculta; no hover desliza a "a" pra fora e a "b" entra
 *       (transição horizontal); ao tirar o mouse, "a" volta.
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

  return (
    <div className={`product-card product-card--${variant}`}>
      <div className="product-card__image-wrap">
        {hasSwap ? (
          <div className="product-card__swap">
            <img
              className="product-card__swap-img product-card__swap-img--a"
              src={imageSrcA}
              alt={`${name} - ${code}`}
            />
            <img
              className="product-card__swap-img product-card__swap-img--b"
              src={imageSrcB}
              alt={`${name} - ${code} (variação)`}
            />
          </div>
        ) : imageSrc ? (
          <img
            className="product-card__image"
            src={imageSrc}
            alt={`${name} - ${code}`}
          />
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
