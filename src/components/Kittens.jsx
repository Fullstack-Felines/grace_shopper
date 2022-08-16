import React, { useEffect, useContext, useState } from "react";
import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();
  const [searchText, setSearchText] = useState("");
  // console.log("the kittens provider has rendered", ({kittens})
  console.log("Kittens: ", kittens);

  function searchMatches(kitten, text) {
    if (kitten.name.includes(text) || kitten.breed.includes(text)) {
      return true;
    }
    return false;
  }

  const filteredKittens = kittens.filter((kitten) =>
    searchMatches(kitten, searchText)
  );

  const kittensToDisplay = searchText.length ? filteredKittens : kittens;

  // const kittensToRender = kittens.map((kittens, index) => {
  //   return (
  //     <div key={`Key: ${index}`} kittens={kittens}>
  //       <h3>{kittens.name}</h3>
  //       <p>{kittens.breed}</p>
  //       <p>{kittens.description}</p>
  //       <p>{kittens.price}</p>
  //     </div>
  //   );
  // });
  return (
    <div>
      {/* <div className="kitten-result">
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
      </div> */}

      <div>
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      {kittensToRender}
    </div>
  );
}
