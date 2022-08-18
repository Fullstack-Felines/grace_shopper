import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks";
import { createOrder } from "../api/orders";
import Kittens from "./Kittens";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { cart, addKittenToCart } = useCart();

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
      <p>${kitten.price}.00</p>

      {kitten.available ? (
        <button
          onClick={() => {
            // addKittenToCart(cart.id, kitten.id);
          }}
        >
          Add to Cart
        </button>
      ) : null}
    </div>
  );
}
