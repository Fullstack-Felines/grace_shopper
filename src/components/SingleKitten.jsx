import React, { useState, useEffect } from "react";
import useKittens from "../Hooks/useKittens";
import KittensCard from "./KittensCard";
import { fetchKittenById } from "../api/kittens";
import { useParams } from "react-router-dom";

export default function SingleKitten() {
  const [kitten, setKitten] = useState({});
  const params = useParams();

  useEffect(() => {
    const getKittenById = async (kittenId) => {
      const result = await fetchKittenById(kittenId);
      setKitten(result);
    };
    getKittenById(params.id);
  }, []);

  return (
    <div class="flex justify-center p-5 m-8 container mx-auto">
      <div>
        <KittensCard key={`${params.id}`} kitten={kitten} />
      </div>
    </div>
  );
}
