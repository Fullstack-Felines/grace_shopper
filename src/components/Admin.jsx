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
    <div class="bg-gradient-to-b from-pink to-cultured flex flex-col flex-grow p-2 justify-center text-center">
      <h1 class=" text-admin rounded-lg text-2xl font-extrabold p-2">
        Welcome, Administrator
      </h1>
      <div class="flex flex-col w-1/2 justify-center bg-cardpaper p-2 rounded-lg">
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
            <h3 class=" p-2 text-center mb-2 font-bold">
              Create a New Kitten:
            </h3>
            <input
              class="appearance-none block w-full bg-white text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={kittenName}
              placeholder="Name of kitten"
              onChange={(e) => setKittenName(e.target.value)}
            />
            <input
              class="appearance-none block w-full bg-white text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={breed}
              placeholder="Breed"
              onChange={(e) => setBreed(e.target.value)}
            />
            <input
              class="appearance-none block w-full bg-white text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              class="appearance-none block w-full bg-white text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={price}
              placeholder="price"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <input
              class="appearance-none block w-full bg-white text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={imgUrl}
              placeholder="imgUrl"
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <button
              type="submit"
              class="bg-white rounded-sm font-bold p-2 hover:bg-coral"
            >
              Create kitten!
            </button>
          </form>
        </div>
      </div>
      <div>
        <br />
        <div class="flex flex-col justify-center">
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
    </div>
  );
}
