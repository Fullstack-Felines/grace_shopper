import React, { useEffect, useState } from "react";
import { createKitten } from "../api/kittens";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../api/authorization";
import UserCard from "./UserCard";

export default function Admin() {
  const [usersList, setUsersList] = useState([]);

  const [kittenName, setKittenName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllUsers() {
      const users = await fetchAllUsers();
      setUsersList(users);
    }
    getAllUsers();
  }, []);

  return (
    <div class="bg-gradient-to-b from-pink to-cultured flex flex-grow">
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

      <br />
      <div>
        <h3>Created Users:</h3>
        {usersList.map((user) => {
          return (
            <div>
              {<UserCard key={`${user.id}`} user={user} />}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
