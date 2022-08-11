import React, { useEffect, useContext } from "react";
import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens } = useKittens();

  const kittensToRender = kittens.map((kitten, index) => {
    return (
      <div key={`Key: ${index}`} kitten={kitten}>
        <div>
          <p>{kittens.name}</p>
          <p>{kittens.breed}</p>
          <p>{kittens.description}</p>
          <p>{kittens.price}</p>
        </div>
        <div>{kittensToRender} </div>;
      </div>
    );
  });
}
