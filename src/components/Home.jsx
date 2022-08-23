import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();

  return (
    <div class="bg-home-pattern flex-grow bg-cover bg-no-repeat">
      {/* <div class="fixed bottom-1 flex justify-center w-full text-2xl opacity-70">
        <h1>FILLER TEXTTTTTTTTTTTTT</h1>
      </div> */}
      {/* <Link to="/Kittens">
        <img
          class="w-full"
          src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661285874/169071-pic-domestic-kitten-free-download-png-hq_gw2ase.png"
        />
      </Link> */}
    </div>
  );
}
