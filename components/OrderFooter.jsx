import React from "react";
import { WHATSAPP_LINK } from "../lib/constants";
import "./OrderFooter.css";

export default function OrderFooter() {
  return (
    <div className="order-footer">
      <a
        className="order-card"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <p className="order-card__cta">Faça já o seu pedido</p>
        <p className="order-card__whats">📱 11 97792-4815</p>
        <p className="order-card__insta">📷 @useloevi</p>
      </a>

      <h2 className="order-footer__title">BRINCOS</h2>
    </div>
  );
}
