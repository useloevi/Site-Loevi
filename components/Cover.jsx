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
    </section>
  );
}
