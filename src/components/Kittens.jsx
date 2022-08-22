import React, { useEffect, useContext, useState } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";

export default function Kittens() {
  const { allKittens, setAllKittens, availableKittens, setAvailableKittens } =
    useKittens();
  const [searchText, setSearchText] = useState("");

  function searchMatches(kitten, text) {
    text = text.toLowerCase();
    if (
      kitten.name.toLowerCase().includes(text) ||
      kitten.breed.toLowerCase().includes(text)
    ) {
      return true;
    }
    return false;
  }

  let filteredKittens;
  if (availableKittens.length) {
    filteredKittens = availableKittens.filter((kitten) =>
      searchMatches(kitten, searchText)
    );
  }

  const kittensToDisplay = searchText.length
    ? filteredKittens
    : availableKittens;

  const sortKittens = (selectEvent) => {
    const options = {
      none: [...availableKittens].sort((a, b) => (a.name > b.name ? 1 : -1)),
      ascending: [...availableKittens].sort((a, b) => a.price - b.price),
      descending: [...availableKittens].sort((a, b) => b.price - a.price),
    };
    setAvailableKittens(options[selectEvent.target.value]);
  };

  return (
    <div>
      <label>Sort By Price:</label>
      <select onChange={sortKittens}>
        <option value="none">None</option>
        <option value="ascending">Low to high</option>
        <option value="descending">High to low</option>
      </select>
      <div>
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>

      <div class=" px-10 py-20 bg-tan grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        {/* {if(kittensToDisplay.length){ */}
        {kittensToDisplay.map((kitten) => {
          return (
            <div>
              {kitten.available ? (
                <KittensCard key={`${kitten.id}`} kitten={kitten} />
              ) : null}
            </div>
          );
        })}
        {/* } */}
      </div>
    </div>
  );
}
