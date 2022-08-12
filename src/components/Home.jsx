import React from "react";
import useAuth from "../Hooks/useAuth";
// import homekitten from "https://wallpapercrafter.com/th800/180037-photo-beautiful-cat-animal-pet-feline-photography-wide-screen-kitten.jpg";

export default function Home() {
  const { user } = useAuth();
  console.log("user", user);
  return (
    <div>
      <h1>Home</h1>
      {/* <img src={homekitten} alt="this is car image" /> */}
    </div>
  );
}
