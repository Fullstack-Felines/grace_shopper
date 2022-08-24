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
    <div class="flex justify-between items-center mt-6 pt-6">
      <div class="flex items-center">
        <img src={order.order.kittens.img_url} />

        <div class="flex flex-col ml-3">
          <p>{order.order.kittens.name}</p>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <span class="text-sm font-medium">${order.order.kittens.price}.00</span>
      </div>

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
