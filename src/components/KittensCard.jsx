import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useKittens from "../Hooks/useKittens";

export default function KittensCard() {
  const { kittens } = useKittens();
  return (
    <div className="kitten-card">
      <figure className="kitten-img">
        <img src="" alt="" />
      </figure>
      <h3>{kittens.name}</h3>
      <p>{kittens.breed}</p>
      <p>{kittens.description}</p>
      <p>{kittens.price}</p>
    </div>
  );
}
