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
        return (
          <div>
            <div
              className="kitten-card"
              onClick={() => {
                navigate(`/Kittens/${kittens.id}`);
              }}
            >
              <img src={kittens.img_url} />
            </div>
            <h3>{kittens.name}</h3>
            <p>{kittens.breed}</p>
            <p>{kittens.description}</p>
            <p>${kittens.price}.00</p>
          </div>
        );
      })}
    </div>
  );
}

// return <KittensCard key={`${kittens.id}`} kitten={kittens} />;
