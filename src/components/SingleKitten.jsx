import React, { useState, useEffect } from "react";
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
    <div class="bg-gradient-to-b from-pink to-cultured">
      <div class="flex justify-center mt-10 mb-20 container mx-auto bg-cardpaper rounded-t-lg w-2/3">
        <div>
          <KittensCard key={`${params.id}`} kitten={kitten} />
        </div>
      </div>
    </div>
  );
}
