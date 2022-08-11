import React, { useState, useEffect } from "react";
import { fetchAllKittens } from "../api/kittens";
import KittensContext from "../Context/KittensContext";

export default function KittensProvider({ children }) {
  const [kittens, setKittens] = useState([]);
  useEffect(() => {
    const getKittens = async () => {
      const kittens = await fetchAllKittens();
      setKittens(kittens);
    };
    getKittens();
  }, []);
  return (
    <KittensContext.Provider value={{ kittens, setKittens }}>
      {children}
    </KittensContext.Provider>
  );
}
