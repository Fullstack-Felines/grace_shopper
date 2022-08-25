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
    <div class="flex justify-between items-center py-6">
      <div class="flex items-center">
        <img class="w-28" src={order.order.kittens.img_url} />

        <div class="flex flex-col">
          <p class="p-2 font-medium text-lg">{order.order.kittens.name}</p>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <span class="font-light p-2">${order.order.kittens.price}.00</span>
      </div>

      <button
        class="p-2 text-coral opacity-80 cursor-pointer hover:opacity-100"
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
