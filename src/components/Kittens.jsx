import React, { useEffect, useContext } from "react";
import { KittensContext } from "../Context/KittensContext";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();

  const displayedKittens = kittens.map((kittens, index) => {
    return <div></div>;
  });

  return <div>Kittens</div>;
}
