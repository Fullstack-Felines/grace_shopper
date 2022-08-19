import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks";
import { createOrder } from "../api/orders";
import Kittens from "./Kittens";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div>
      {kitten.available ? (
        <div class="bg-blue max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-1000 cursor-pointer">
          <div
            onClick={() => {
              navigate(`/Kittens/${kitten.id}`);
            }}
          >
            <img src={kitten.img_url} alt="picture of kitten" />
          </div>
          <div class="py-4 px-4 bg-pink">
            <h3 class="text-2xl font-bold text-brown flex justify-center m-2">
              {kitten.name}
            </h3>
            <p class="text-xl text-red flex justify-center m-2">
              {kitten.breed}
            </p>
            <p class="text-lg text-brown flex justify-center text-center m-2 leading-relaxed">
              {kitten.description}
            </p>
            <p class="mt-4 text-lg font-thin text-brown flex justify-center m-2">
              ${kitten.price}.00
            </p>

            <span class="flex items-center justify-center mt-4 w-full bg-pink hover:bg-red py-1 rounded">
              {" "}
              <button
                class="font-semibold text-brown"
                onClick={() => {
                  // const order = createOrder(kitten.id, cart.id);
                  // addToCart function from useCart
                }}
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
