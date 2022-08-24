import React from "react";
import { useKittens } from "../Hooks";
import KittensCard from "./KittensCard";

export default function AdoptedKittens() {
  const { unavailableKittens } = useKittens();
  console.log("unavailable kits", unavailableKittens);
  // function displayAdoptedKittens(kittens) {
  //   if (!kittens.available) {
  //     return true;
  //   }
  // }

  // const filteredUnavailableKittens = unavailableKittens.filter((kittens) =>
  //   displayAdoptedKittens(kittens)
  // );

  // const AdoptedKittensToDisplay = !kittens.available
  //   ? filteredUnavailableKittens
  //   : null;

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

// return <KittensCard key={`${kittens.id}`} kitten={kittens} />;
