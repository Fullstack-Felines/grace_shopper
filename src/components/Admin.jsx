import React, { useState } from "react";
import { createKitten } from "../api/kittens";

export default function Admin() {
  const [kitten, setKitten] = useState({});
  const [kittenName, setKittenName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setKitten({
            name: kittenName,
            breed,
            description,
            price,
            img_url: imgUrl,
            available: true,
          });
          const newKitten = await createKitten(kitten);
        }}
      >
        create a new kitten!
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
          onChange={(e) => setPrice(e.target.value)}
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
