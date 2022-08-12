import React, { useEffect, useContext } from "react";
import useKittens from "../Hooks/useKittens";

export default function Kittens() {
  const { kittens, setKittens } = useKittens();

  useEffect(() => {
    const getAllTheKittens = async () => {
      const result = await fetchAllKittens();
      setKittens(result);
    };
    getAllTheKittens();
  }, []);

  const kittensToRender = kittens.map((kitten, index) => {
    return (
      <div>
        <p>{kittens.name}</p>
        <p>{kittens.breed}</p>
        <p>{kittens.description}</p>
        <p>{kittens.price}</p>
      </div>
    );
  });
  return <div>{kittensToRender}</div>;
}
