import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../api/authorization";
import { useCart } from "../Hooks";

export default function NavBar() {
  const { user, setUser } = useAuth();

  return (
    <div class="bg-pink px-2 sm:px-4 py-2.5 rounded min-h-80">
      <nav class="flex flex-wrap justify-evenly flex-col sm:flex-row items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661282043/Fullstack_Felines_1_o93p2j.png"
            class="object-contain h-25 sm:h-16 lg:h-24 transition duration-300 hover:scale-125"
          />
        </Link>
        <div class="flex text-center">
          <Link
            to="/"
            class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2"
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2"
          >
            About
          </Link>
          <Link
            to="/Kittens"
            class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2"
          >
            Kittens
          </Link>
          <Link
            to="/Cart"
            class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2"
          >
            Cart
          </Link>

          {user.username ? (
            <button
              class="text-coral text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2"
              onClick={async () => {
                const result = await logoutUser();
                setUser({ loggedIn: false });

                // setCart(guestCart);
                console.log("User state after logout:", user);
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
