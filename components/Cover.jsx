"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WHATSAPP_LINK } from "../lib/constants";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import NecklaceIcon from "./icons/NecklaceIcon";
import EarringIcon from "./icons/EarringIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import "./Cover.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cover-header">
      <div className="cover-header__bar">
        <button
          type="button"
          className="cover-header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon size={20} color="#1b3125" />
          ) : (
            <MenuIcon size={20} color="#1b3125" />
          )}
        </button>
      </div>

      {open && (
        <nav className="cover-header__panel">
          <a
            href="#brincos"
            className="cover-header__link"
            onClick={() => setOpen(false)}
          >
            <EarringIcon size={18} color="#f9f5ec" />
            Brincos
          </a>
          <a
            href="#colares"
            className="cover-header__link"
            onClick={() => setOpen(false)}
          >
            <NecklaceIcon size={18} color="#f9f5ec" />
            Colares
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cover-header__link"
          >
            <WhatsAppIcon size={18} color="#f9f5ec" />
            Peça já
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cover-header__contact"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <WhatsAppIcon size={18} color="#1b3125" />
          </a>
        </nav>
      )}
    </header>
  );
}

export default function Cover() {
  return (
    <section className="cover">
      <div className="cover__bg" aria-hidden="true">
        <Image
          className="cover__image"
          src="/images/capa.jpg"
          alt=""
          fill
          quality={100}
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.6 }}
        />
        <div className="cover__filter" />
      </div>

      <div className="cover__overlay">
        <div className="cover__logo-frame">
          <Image
            src="/images/logo claro.png"
            alt="Lo&Vi"
            width={280}
            height={120}
            quality={100}
            priority
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      <Header />
    </section>
  );
}
