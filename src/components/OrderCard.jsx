import React, { useState, useEffect } from "react";
import fetchKittenById from "../api/kittens";

const OrderCard = ({ order }) => {
  const [kitten, setKitten] = useState({});

  useEffect(() => {
    async function getKitten(kittenId) {
      const kitten = await fetchKittenById(kittenId);
      setKitten(kitten);
    }
    getKitten(order.kitten_id);
  }, []);

  return <div>getting things done still</div>;
};

export default OrderCard;
