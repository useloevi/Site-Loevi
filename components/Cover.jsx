import React from "react";
import Image from "next/image";
import "./Cover.css";

export default function Cover() {
  return (
    <section className="cover">
      <Image
        className="cover__image"
        src="/images/capa.jpg"
        alt="Joias Lo&Vi sobre tecido verde"
        fill
        quality={100}
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="cover__overlay">
        <h1 className="cover__logo">LO&amp;VI</h1>
      </div>
    </section>
  );
}
