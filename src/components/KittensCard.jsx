import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks";
import { createOrder } from "../api/orders";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const cart = useCart();

  return (
    <div
      className="kitten-card"
      onClick={() => {
        navigate(`${kitten.id}`);
      }}
    >
      <h3>{kitten.name}</h3>
      <p>{kitten.breed}</p>
      <p>{kitten.description}</p>
      <p>{kitten.price}</p>
      <button
        onCLick={() => {
          const order = createOrder(kitten.id, cart.id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
