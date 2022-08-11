import React, { useEffect, useContext } from "react";
import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens } = useKittens();

  const displayedKittens = kittens.map((kittens) => {
    return (
      <div>
        <div>
          <h1>{kittens.image_url}</h1>
          <p>{kittens.name}</p>
          <p>{kittens.breed}</p>
          <p>{kittens.description}</p>
          <p>{kittens.price}</p>
        </div>
      </div>
    );
  });
  return <div>{displayedKittens} </div>;
}
