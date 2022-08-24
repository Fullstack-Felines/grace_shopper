import React from "react";
import { useKittens } from "../Hooks";
import KittensCard from "./KittensCard";

export default function AdoptedKittens() {
  const { unavailableKittens } = useKittens();

  return (
    <div class="grid grid-cols-3 gap-5 mb-8">
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
