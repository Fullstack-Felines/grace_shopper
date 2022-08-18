import React, { useState, useEffect } from "react";
import fetchKittenById from "../api/kittens";

const OrderCard = ({ order_id, kitten_id }) => {
  const [kitten, setKitten] = useState({});

  useEffect(() => {
    async function getKitten(kittenId) {
      const fetchedKitten = await fetchKittenById(kittenId);
      setKitten(fetchedKitten);
    }
    getKitten(kitten_id);
  }, []);

  return (
    <div>
      <p>${kitten.name}</p>
      <p>${kitten.description}</p>
    </div>
  );
};

export default OrderCard;
