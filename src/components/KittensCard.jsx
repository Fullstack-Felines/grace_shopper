import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { addKittenToCart } = useCart();
  return (
    <div>
      {kitten.available ? (
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
          <button
            onClick={() => {
              addKittenToCart({ kitten_id: kitten.id });
            }}
          >
            Add to Cart
          </button>
        </div>
      ) : null}
    </div>
  );
}
