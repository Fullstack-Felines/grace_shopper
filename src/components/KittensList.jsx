import React, { useState } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";

export default function KittensList() {
  const { kittens, setKittens } = useKittens();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="kitten-result">
      <input
        className="search-bar"
        placeholder="Search Kittens"
        onChange={(e) => setSearchText(e.target.value)}
      />

      {kittens
        .filter(() => {
          if (searchText === "") {
            return kittens;
          } else if (
            kittens.name.toLowerCase().includes(searchText.toLowerCase()) ||
            kittens.breed.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return kittens;
          }
        })
        .map((kitten, index) => {
          return <KittensCard key={`Key: ${index}`} post={post} />;
        })}
    </div>
  );
}
