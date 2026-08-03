import React from "react";
import "./ProductCard.css";

/**
 * ProductCard
 *
 * props:
 * - code: string        -> product code, e.g. "001"
 * - name: string         -> product name, e.g. "Choker Rivieira Prata"
 * - description: string  -> short description
 * - price: string        -> formatted price, e.g. "R$ 49,80"
 * - imageSrc: string     -> path/URL to the product photo (optional; shows a placeholder if empty)
 * - variant: "light" | "dark" -> controls the card background / tag color combo
 */
export default function ProductCard({
  code,
  name,
  description,
  price,
  imageSrc,
  variant = "light",
}) {
  return (
    <div className={`product-card product-card--${variant}`}>
      <div className="product-card__image-wrap">
        {imageSrc ? (
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
