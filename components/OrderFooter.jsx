import React from "react";
import { WHATSAPP_LINK } from "../lib/constants";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
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
        <p className="order-card__whats">
          <WhatsAppIcon size={16} color="#f9f5ec" />
          11 97792-4815
        </p>
        <p className="order-card__insta">
          <InstagramIcon size={16} color="#1b3125" />
          @useloevi
        </p>
      </a>
    </div>
  );
}
