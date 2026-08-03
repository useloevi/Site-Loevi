import React from "react";
import "./Cover.css";

export default function Cover() {
  return (
    <section className="cover">
      <img
        className="cover__image"
        src="/images/capa.jpg"
        alt="Joias Lo&Vi sobre tecido verde"
      />
      <div className="cover__overlay">
        <h1 className="cover__logo">LO&amp;VI</h1>
      </div>
    </section>
  );
}
