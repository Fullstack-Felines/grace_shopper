import React, { useEffect, useContext, useState } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";
// import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();
  const [searchText, setSearchText] = useState("");
  const [price, setPrice] = useState({});
  const [sortState, setSortState] = useState("");
  const sort = kittens.sort;

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

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };
  console.log(sortMethods);

  return (
    <div>
      <div>
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <select
          defaultValue={"Default"}
          onChange={(e) => setSortState(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            None
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        {/* <ul>
          {kittens.sort(sortMethods[sortState].method).map((kitten, index) => (
            <li key={index}>{kitten}</li>
          ))}
        </ul> */}
      </div>
      {kittensToDisplay.map((kitten, index) => {
        return <KittensCard key={`${kitten.id}`} kitten={kitten} />;
      })}
    </div>
  );
}
