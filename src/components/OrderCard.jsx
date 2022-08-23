import React, { useState, useEffect } from "react";
import { fetchKittenById } from "../api/kittens";
import { useCart } from "../Hooks";

const OrderCard = (order) => {
  const [kitten, setKitten] = useState({});
  const kitten_id = order.order.kitten_id;
  const { removeKittenFromCart } = useCart();
  // console.log("order in ordercard", order);
  // console.log("kittenid", kitten_id);
  useEffect(() => {
    async function getKitten(kittenId) {
      const fetchedKitten = await fetchKittenById(kittenId);
      setKitten(fetchedKitten);
    }
    getKitten(kitten_id);
  }, []);

  return (
    <div>
      <img src={kitten.img_url} />
      <p>{kitten.name}</p>
      <p>{kitten.description}</p>
      <p>${kitten.price}.00</p>
      <button
        onClick={() => {
          removeKittenFromCart(order.order.id);
          console.log("order from ordercard", order);
          console.log("orderid", order.order.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default OrderCard;
