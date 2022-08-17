import React, { useEffect, useContext, useState } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();
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

  const filteredKittens = kittens.filter((kitten) =>
    searchMatches(kitten, searchText)
  );

  const kittensToDisplay = searchText.length ? filteredKittens : kittens;

  const priceAscending = [...kittens].sort((a, b) => a.price - b.price);
  console.log("PRICE ASCENDING", priceAscending);

  const priceDescending = [...kittens].sort((a, b) => b.price - a.price);
  console.log("PRICE DESCENDING", priceDescending);

  const sortKittens = (selectEvent) => {
    const options = {
      none: [...kittens],
      ascending: [...kittens].sort((a, b) => a.price - b.price),
      descending: [...kittens].sort((a, b) => b.price - a.price),
    };
    setKittens(options[selectEvent.target.value]);
  };

  return (
    <div>
      <label>Sort By Price:</label>
      <select onChange={sortKittens}>
        <option value="none" selected="selected">
          None
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <div>
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      {kittensToDisplay.map((kitten, index) => {
        return <KittensCard key={`${kitten.id}`} kitten={kitten} />;
      })}
    </div>
  );
}
