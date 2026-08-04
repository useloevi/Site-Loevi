import React from "react";
import "./IntroSection.css";

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="intro__about">
        <p>
          A Lo&amp;Vi nasceu da amizade entre duas amigas que sempre
          encontraram na criatividade uma forma de transformar ideias em
          realidade.
        </p>
        <p>
          Decidimos criar uma marca baseada em algo que acreditamos: beleza
          está nos detalhes e boas escolhas fazem toda a diferença.
        </p>
      </div>

      <div className="intro__title">
        <h2>FEITO PARA REFLETIR O QUE É SEU</h2>
        <p>
          Cada peça deste catálogo foi cuidadosamente selecionada entre
          diferentes fornecedores, priorizando qualidade, elegância e um
          design atemporal.
        </p>
        <p>
          Nossa curadoria é feita com carinho para levar até você semijoias
          que possam fazer parte de muitos momentos.
        </p>
      </div>
    </section>
  );
}
