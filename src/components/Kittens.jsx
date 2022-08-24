import React, { useState } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";

export default function Kittens() {
  const { availableKittens, setAvailableKittens } = useKittens();
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
    <div class="flex flex-col bg-gradient-to-b from-pink to-cultured">
      <div class="flex justify-center">
        <input
          class=" w-2/3 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-2"
          placeholder="Search kittens"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>

      <div class="flex justify-evenly p-3">
        <select
          class="text-black bg-cafe hover:bg-red font-medium rounded-lg text-sm text-center mr-1"
          onChange={sortKittens}
        >
          <option value="none">Sort by price:</option>
          <option value="ascending">Low to high</option>
          <option value="descending">High to low</option>
        </select>
      </div>

      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
      <div class="flex justify-center">
        <img src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661285927/160171-cute-kitten-free-png-hq_fwatnx.png" />
      </div>
    </div>
  );
}
