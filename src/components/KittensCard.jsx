import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useAuth } from "../Hooks";
import { updateKitten, deleteKitten } from "../api/kittens";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { addKittenToCart } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  //use state for updating kittens
  const [kittenName, setKittenName] = useState(kitten.name);
  const [breed, setBreed] = useState(kitten.breed);
  const [description, setDescription] = useState(kitten.description);
  const [price, setPrice] = useState(kitten.price);
  const [imgUrl, setImgUrl] = useState(kitten.img_url);

  return (
    <div class="rounded-lg shadow-lg overflow-none h-full bg-cardpaper">
      <div
        onClick={() => {
          navigate(`/Kittens/${kitten.id}`);
        }}
      >
        <img
          class="w-full cursor-pointer rounded-t-lg"
          src={kitten.img_url}
          alt="picture of kitten"
        />
      </div>
      <div class="py-4 px-2 bg-cardpaper rounded-lg ">
        <h3 class="text-2xl font-bold text-darkbrown flex justify-center m-2 opacity-80">
          {kitten.name}
        </h3>
        <p class="text-xl text-coral flex justify-center m-2">{kitten.breed}</p>
        {kitten.available ? (
          <p class=" text-lg text-brass opacity-70 flex justify-center text-center m-2 leading-relaxed">
            {kitten.description}
          </p>
        ) : null}
        {kitten.available ? (
          <p class="mt-4 text-lg text-brown flex justify-center m-2 opacity-80">
            ${kitten.price}.00
          </p>
        ) : null}
        {kitten.available ? (
          <div class="flex justify-center mt-4 bg-coral opacity-90 w-full hover:bg-coral hover:opacity-100  py-1 rounded object-bottom">
            <button
              class="font-semibold text-white "
              onClick={() => {
                addKittenToCart({ kitten_id: kitten.id });
              }}
            >
              Add to Cart
            </button>
          </div>
        ) : null}

        {user.is_admin ? (
          <div>
            <div class="flex justify-center mt-4 bg-coral opacity-90 w-full hover:bg-coral hover:opacity-100  py-1 rounded object-bottom">
              <button
                class="font-semibold text-white "
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit Kitten
              </button>
            </div>
            <div class="flex justify-center mt-4 bg-coral opacity-90 w-full hover:bg-coral hover:opacity-100  py-1 rounded object-bottom">
              <button
                class="font-semibold text-white "
                onClick={() => {
                  deleteKitten(kitten.id);
                  alert("Kitten Deleted");
                  window.location.reload();
                }}
              >
                Delete Kitten
              </button>
            </div>
          </div>
        ) : null}

        {user.is_admin ? (
          isEditing ? (
            <div class="flex justify-center mt-4 bg-coral opacity-90 w-full hover:bg-coral hover:opacity-100  py-1 rounded object-bottom">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const updatedKitten = await updateKitten({
                    kittenId: kitten.id,
                    name: kittenName,
                    breed,
                    description,
                    price,
                    img_url: imgUrl,
                    available: true,
                  });

                  setIsEditing(false);
                  window.location.reload();
                }}
              >
                <input
                  class="appearance-none block w-full bg-red text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={kittenName}
                  placeholder="Name of kitten"
                  onChange={(e) => setKittenName(e.target.value)}
                />
                <input
                  class="appearance-none block w-full bg-red text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={breed}
                  placeholder="Breed"
                  onChange={(e) => setBreed(e.target.value)}
                />
                <input
                  class="appearance-none block w-full bg-red text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={description}
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  class="appearance-none block w-full bg-red text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={price}
                  placeholder="price"
                  onChange={(e) => {
                    setPrice(Number(e.target.value));
                  }}
                />
                <input
                  class="appearance-none block w-full bg-red text-coral border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={imgUrl}
                  placeholder="imgUrl"
                  onChange={(e) => setImgUrl(e.target.value)}
                />
                <button
                  type="Submit"
                  class="mb-1.5 block w-full text-center text-white bg-brass opacity-80 hover:bg-coral hover:opacity-100 px-2 py-1.5 rounded-md"
                >
                  Update kitten!
                </button>
              </form>
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
}
