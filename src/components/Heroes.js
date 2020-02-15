import React from "react";
import Title from "./Title";
import Heroe from "./Heroe";

export default function Heroes({ herois }) {
  return (
    <section>
      <Title title="Super Heróis" />
      {herois.map(heroi => {
        return <Heroe key={heroi.id} heroi={heroi} />;
      })}
    </section>
  );
}
