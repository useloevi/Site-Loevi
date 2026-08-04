import React from "react";
import { WHATSAPP_LINK } from "../lib/constants";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
import "./ClosingFooter.css";

export default function ClosingFooter() {
  return (
    <>
      <div className="closing-footer">
        <a
          className="closing-footer__card"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fazer pedido pelo WhatsApp"
        >
          <p className="closing-footer__cta">Faça já o seu pedido</p>
          <p className="closing-footer__whats">
            <WhatsAppIcon size={16} color="#a9b485" />
            11 97792-4815
          </p>
          <p className="closing-footer__insta">
            <InstagramIcon size={16} color="#a9b485" />
            @useloevi
          </p>
        </a>

        <div className="closing-footer__spacer" />
        <p className="closing-footer__novidades">Novidades em breve...</p>
      </div>

      <section className="closing-logo">
        <h2 className="closing-logo__text">LO&amp;VI</h2>
      </section>
    </>
  );
}
