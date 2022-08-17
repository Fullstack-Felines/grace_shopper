import React from "react";
import { useKittens } from "../Hooks";
import KittensCard from "./KittensCard";

export default function AdoptedKittens() {
  const { kittens } = useKittens();

  function displayAdoptedKittens(kittens) {
    if (!kittens.available) {
      return true;
    }
  }

  const filteredUnavailableKittens = kittens.filter((kittens) =>
    displayAdoptedKittens(kittens)
  );

  const AdoptedKittensToDisplay = !kittens.available
    ? filteredUnavailableKittens
    : null;

  return (
    <div>
      <h2>Recent Adoptions</h2>
      {AdoptedKittensToDisplay.map((kittens) => {
        return <KittensCard key={`${kittens.id}`} kitten={kittens} />;
      })}
    </div>
  );
}
