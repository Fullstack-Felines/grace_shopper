import React, { useState, useEffect } from "react";
import fetchKittenById from "../api/kittens";

const OrderCard = ({ orders_kitten }) => {
  const [kitten, setKitten] = useState({});

  useEffect(() => {
    async function getKitten(kittenId) {
      const kitten = await fetchKittenById(kittenId);
      setKitten(kitten);
    }
    getKitten(orders_kitten.kitten_id);
  }, []);

  return <div>getting things done still</div>;
};

export default OrderCard;
