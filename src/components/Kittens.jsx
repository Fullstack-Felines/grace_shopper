import React, { useEffect, useContext } from "react";
import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();
  console.log("the kittens provider has rendered", { kittens });

  const kittensToRender = kittens.map((kittens, index) => {
    return (
      <div key={`Key: ${index}`} kittens={kittens}>
        <h3>{kittens.name}</h3>
        <p>{kittens.breed}</p>
        <p>{kittens.description}</p>
        <p>{kittens.price}</p>
      </div>
    );
  });
  return <div>{kittensToRender}</div>;
}
