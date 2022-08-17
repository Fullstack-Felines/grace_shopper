import React, { useEffect, useContext, useState } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";
// import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();
  const [searchText, setSearchText] = useState("");
  const [price, setPrice] = useState({});
  const [sortState, setSortState] = useState("");

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

  // const priceFilter = () => {
  //   const ordered = kittens.sort((a, b) => (a.price > b.price ? 1 : -1));
  //   const lastElement = ordered.pop();
  //   return ordered.unshift(lastElement);
  // };

  const priceAscending = [...kittens].sort((a, b) => a.price - b.price);
  console.log("PRICE ASCENDING", priceAscending);

  const priceDescending = [...kittens].sort((a, b) => b.price - a.price);
  console.log("PRICE DESCENDING", priceDescending);

  // const sortKittens = (selectEvent) => {
  //   const options = {
  //     ascending: [...kittens].sort((a, b) => a.price - b.price),
  //     descending: [...kittens].sort((a, b) => b.price - a.price),
  //   };
  //   setKittens(options[selectEvent.target.value]);
  // };

  // return (
  //   <div>
  //     <select onChange={sortKittens}>
  //       <option value="ascending">Ascending</option>
  //       <option value="descending">Descending</option>
  //     </select>

  //     {kittens.map((kitten, index) => (
  //       <div key={index}>{kitten}</div>
  //     ))}

  //     {kittens.map((kitten, index) => {
  //       const kittenNum = `${kitten}${index}`;
  //       return (
  //         <div key={index}>
  //           {kitten}
  //           {kittenNum}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div>
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
