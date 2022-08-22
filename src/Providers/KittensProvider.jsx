import React, { useState, useEffect } from "react";
import {
  fetchAvailableKittens,
  fetchAllKittens,
  fetchUnavailableKittens,
} from "../api/kittens";
import KittensContext from "../Context/KittensContext";

export default function KittensProvider({ children }) {
  const [allKittens, setAllKittens] = useState([]);
  const [availableKittens, setAvailableKittens] = useState([]);
  const [unavailableKittens, setUnavailableKittens] = useState([]);

  useEffect(() => {
    const getKittens = async () => {
      const result = await fetchAllKittens();
      setAllKittens(result);
    };
    getKittens();
  }, []);

  useEffect(() => {
    const getAvailableKittens = async () => {
      const result = await fetchAvailableKittens();
      setAvailableKittens(result);
    };
    getAvailableKittens();
  }, []);

  useEffect(() => {
    const getUnavailableKittens = async () => {
      const result = await fetchUnavailableKittens();
      setUnavailableKittens(result);
    };
    getUnavailableKittens();
  }, []);

  return (
    <KittensContext.Provider
      value={{
        allKittens,
        setAllKittens,
        availableKittens,
        setAvailableKittens,
        unavailableKittens,
        setUnavailableKittens,
      }}
    >
      {children}
    </KittensContext.Provider>
  );
}
