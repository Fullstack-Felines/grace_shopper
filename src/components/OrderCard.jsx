import React, { useState, useEffect } from "react";
import { fetchKittenById } from "../api/kittens";
import { useCart } from "../Hooks";

const OrderCard = (order) => {
  const [kitten, setKitten] = useState({});
  const kitten_id = order.order.kitten_id;
  const { removeKittenFromCart } = useCart();

  useEffect(() => {
    async function getKitten(kittenId) {
      const fetchedKitten = await fetchKittenById(kittenId);
      setKitten(fetchedKitten);
    }
    getKitten(kitten_id);
  }, []);

  return (
    <div>
      <img src={order.order.kittens.img_url} />
      <p>{order.order.kittens.name}</p>
      <p>{order.order.kittens.description}</p>
      <p>${order.order.kittens.price}.00</p>
      <button
        onClick={() => {
          removeKittenFromCart(order.order.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default OrderCard;
