import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();

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
      <p>{kitten.price}</p>
    </div>
  );
}
