import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../api/authorization";
import { useCart } from "../Hooks";

export default function NavBar() {
  const { user, setUser } = useAuth();
  const { setCart, makeGuestCart } = useCart();
  // const guestCart = makeGuestCart();

  return (
    <div class="bg-red border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
      <nav class="container flex flex-wrap justify-evenly items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660334879/My_project_ddlcsz.png"
            class="mr-w h-7 sm:h-9"
            width="150px"
          />
        </Link>
        <Link
          to="/"
          class="text-brown  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          class="text-brown  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          About
        </Link>
        <Link
          to="/Kittens"
          class="text-brown  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          Kittens
        </Link>
        <Link
          to="/Cart"
          class="text-brown  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
        >
          Cart
        </Link>

        {user.username ? (
          <button
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
            class="text-brown  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 "
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
}
