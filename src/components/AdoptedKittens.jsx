import React from "react";
import { useKittens } from "../Hooks";
import KittensCard from "./KittensCard";

export default function AdoptedKittens() {
  const { unavailableKittens } = useKittens();

  return (
    <div>
      <h2 class="">Recent Adoptions</h2>
      {unavailableKittens.map((kitten) => {
        return (
          <div>
            <KittensCard key={`${kitten.id}`} kitten={kitten} />
          </div>
        );
      })}
    </div>
  );
}
