import React, { useState } from "react";
import useKittens from "../Hooks/useKittens";

export default function SingleKitten() {
  const { kittens, setKittens } = useKittens();
  const [search, setSearch] = useState("");

  const searchMatches = (kitten) => {
    return (
      <div>
        `${kitten.name} ${kitten.breed}` .toLowerCase()
        .includes(search.toLowerCase())
      </div>
    );
  };

  return (
    <div>
      <h1>Kitten</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="search"
        placeholder="search"
      />
      <div>
        {kittens
          .filter((kitten) => {
            return searchMatches(kitten);
          })
          .map((kitten) => {
            return (
              <div>
                <p>{kitten.breed}</p>
                <p>{kitten.description}</p>
                <p>{kitten.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
