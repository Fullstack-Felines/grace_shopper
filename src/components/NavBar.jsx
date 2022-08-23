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
      <nav class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660334879/My_project_ddlcsz.png"
            class="mr-w h-7 sm:h-9"
            width="150px"
          />
        </Link>
        <Link
          to="/"
          class="text-black  text-xl font-bold dark:text-white hover:underline"
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          class="text-black text-xl font-bold dark:text-white hover:underline"
        >
          About
        </Link>
        <Link
          to="/Kittens"
          class="text-black text-xl font-bold dark:text-white hover:underline"
        >
          Kittens
        </Link>
        <Link
          to="/Cart"
          class="text-black text-xl font-bold dark:text-white hover:underline"
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
            class="text-black text-xl font-bold dark:text-white hover:underline"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
}
