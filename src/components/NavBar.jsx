import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../api/authorization";
import { useCart } from "../Hooks";

export default function NavBar() {
  const { user, setUser } = useAuth();

  return (
    <div class="bg-pink  px-2 sm:px-4 py-2.5 rounded min-h-80">
      <nav class="container flex flex-wrap justify-evenly items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661282043/Fullstack_Felines_1_o93p2j.png"
            class="object-contain h-14  hover transition duration-300 hover:scale-125"
          />
        </Link>
        <Link
          to="/"
          class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          About
        </Link>
        <Link
          to="/Kittens"
          class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          Kittens
        </Link>
        <Link
          to="/Cart"
          class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          Cart
        </Link>

        {user.username ? (
          <button
            onClick={async () => {
              const result = await logoutUser();
              setUser({ loggedIn: false });
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/Login"
            class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
}
