import React, { useState, useEffect } from "react";
import { fetchAllKittens } from "../api/kittens";
import KittensContext from "../Context/KittensContext";

export default function KittensProvider({ children }) {
  const [kittens, setKittens] = useState([]);
  useEffect(() => {
    const getKittens = async () => {
      const kittensProvided = await fetchAllKittens(kittens);
      setKittens(kittensProvided);
    };
    getKittens();
  }, []);
  return (
    <KittensContext.Provider value={{ kittens, setKittens }}>
      {children}
    </KittensContext.Provider>
  );
}
