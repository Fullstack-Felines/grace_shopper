import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useAuth } from "../Hooks";
import { updateKitten, deleteKitten } from "../api/kittens";

export default function KittensCard({ kitten }) {
  const navigate = useNavigate();
  const { addKittenToCart } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  //use state for updating kittens
  const [kittenToEdit, setKittenToEdit] = useState(kitten);
  const [kittenName, setKittenName] = useState(kitten.name);
  const [breed, setBreed] = useState(kitten.breed);
  const [description, setDescription] = useState(kitten.description);
  const [price, setPrice] = useState(kitten.price);
  const [imgUrl, setImgUrl] = useState(kitten.img_url);

  return (
    <div class="rounded-lg shadow-lg overflow-none ">
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
        <div class="py-4 px-6 bg-cardpaper">
          <h3 class="text-2xl font-bold text-darkbrown flex justify-center m-2 opacity-80">
            {kitten.name}
          </h3>
          <p class="text-xl text-coral flex justify-center m-2">
            {kitten.breed}
          </p>
          {kitten.available ? (
            <p class=" text-lg text-cafe flex justify-center text-center m-2 leading-relaxed">
              {kitten.description}
            </p>
          ) : null}
          {kitten.available ? (
            <p class="mt-4 text-lg text-brown flex justify-center m-2 opacity-80">
              ${kitten.price}.00
            </p>
          ) : null}
          {kitten.available ? (
            <div class="flex justify-center mt-4 bg-coral opacity-90 w-full hover:bg-coral hover:opacity-100  py-1 rounded">
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
                <button
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  Edit Kitten
                </button>

                <button
                  onClick={() => {
                    console.log("Deleting Kitting");
                    deleteKitten(kitten.id);
                    alert("Kitten Deleted");
                    window.location.reload();
                  }}
                >
                  Delete Kitten
                </button>
              </div>
            ) : null}

            {user.is_admin ? (
              isEditing ? (
                <div>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setKittenToEdit({
                        kittenId: kitten.id,
                        name: kittenName,
                        breed,
                        description,
                        price,
                        img_url: imgUrl,
                        available: true,
                      });
                      console.log("kitten.id:", kitten.id);

                      console.log("About to try updating kitten:", {
                        kittenId: kitten.id,
                        name: kittenName,
                        breed,
                        description,
                        price,
                        img_url: imgUrl,
                        available: true,
                      });
                      const updatedKitten = await updateKitten({
                        name: kittenName,
                        breed,
                        description,
                        price,
                        img_url: imgUrl,
                        available: true,
                      });
                      console.log("updatedKitten kitten card", updatedKitten);
                      // kitten = updatedKitten;

                      setIsEditing(false);
                    }}
                  >
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
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                    <input
                      value={imgUrl}
                      placeholder="imgUrl"
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                    <button type="Submit">Update kitten!</button>
                  </form>
                </div>
              ) : null
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}
