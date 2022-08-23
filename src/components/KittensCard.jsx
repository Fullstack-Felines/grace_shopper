import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { addKittenToCart } = useCart();
  return (
    <div class="max-w-xs rounded shadow-lg overflow-hidden">
      <div>
        <div
          onClick={() => {
            navigate(`/Kittens/${kitten.id}`);
          }}
        >
          <img
            class="w-full cursor-pointer"
            src={kitten.img_url}
            alt="picture of kitten"
          />
        </div>
        <div class="py-4 px-6 bg-pink">
          <h3 class="text-2xl font-bold text-brown flex justify-center m-2">
            {kitten.name}
          </h3>
          <p class="text-xl text-red flex justify-center m-2">{kitten.breed}</p>
          <p class=" text-lg text-brown flex justify-center text-center m-2 leading-relaxed">
            {kitten.description}
          </p>
          {kitten.available ? (
            <p class="mt-4 text-lg font-thin text-brown flex justify-center m-2">
              ${kitten.price}.00
            </p>
          ) : null}
          <span class="flex justify-center mt-4 bg-azure w-1/2 hover:bg-red py-1 rounded">
            {kitten.available ? (
              <button
                class="font-semibold text-brown"
                onClick={() => {
                  addKittenToCart({ kitten_id: kitten.id });
                }}
              >
                Add to Cart
              </button>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}
