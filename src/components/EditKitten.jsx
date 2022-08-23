import React, { useState } from "react";

export default function EditKitten(kittenToEdit) {
  const [kitten, setKitten] = useState({});
  const [kittenName, setKittenName] = useState(kittenToEdit.name);
  const [breed, setBreed] = useState(kittenToEdit.breed);
  const [description, setDescription] = useState(kittenToEdit.description);
  const [price, setPrice] = useState(kittenToEdit.price);
  const [imgUrl, setImgUrl] = useState(kittenToEdit.img_url);
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
          const editedKitten = await updateKitten(kitten);
          console.log("The kitten you created is:", newKitten);
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
