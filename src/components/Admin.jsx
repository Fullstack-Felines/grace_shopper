import React, { useState } from "react";
import { createKitten } from "../api/kittens";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [kittenName, setKittenName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const newKitten = await createKitten({
            name: kittenName,
            breed,
            description,
            price,
            img_url: imgUrl,
            available: true,
          });

          navigate("/Kittens");
          window.location.reload();
        }}
      >
        <h3>Create a New Kitten:</h3>
        <input
          value={kittenName}
          placeholder="Name of kitten"
          onChange={(e) => setKittenName(e.target.value)}
        />
        <input
          value={breed}
          placeholder="Breed"
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          value={imgUrl}
          placeholder="imgUrl"
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="submit">Create kitten!</button>
      </form>
    </div>
  );
}
