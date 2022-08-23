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
    <div class="flex flex-col">
      <div>
        <input
          class="
             form-control
             block
             w-2/3
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
           "
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>

      <div class="flex justify-evenly p-3">
        <select
          class="text-black bg-cafe hover:bg-red font-medium rounded-lg text-sm text-center mr-1"
          onChange={sortKittens}
        >
          <option value="none">Sort By Price</option>
          <option value="ascending">Low to high</option>
          <option value="descending">High to low</option>
        </select>
      </div>

      <div class=" px-10 py-20 bg-tan grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        {kittensToDisplay.map((kitten) => {
          return (
            <div>
              {kitten.available ? (
                <KittensCard key={`${kitten.id}`} kitten={kitten} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
