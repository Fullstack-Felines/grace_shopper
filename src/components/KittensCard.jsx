import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks";
import { createOrder } from "../api/orders";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div>
      <div
        className="kitten-card"
        onClick={() => {
          navigate(`/Kittens/${kitten.id}`);
        }}
      >
        <img src={kitten.img_url} />
      </div>
      <h3>{kitten.name}</h3>
      <p>{kitten.breed}</p>
      <p>{kitten.description}</p>
      <p>${kitten.price}</p>
      <button
        onClick={() => {
          // const order = createOrder(kitten.id, cart.id);
          // addToCart function from useCart
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
