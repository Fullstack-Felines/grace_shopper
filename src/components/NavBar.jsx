import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../api/authorization";
import { useCart } from "../Hooks";

export default function NavBar() {
  const { user, setUser } = useAuth();

  return (
    <div class="bg-pink px-2 sm:px-4 py-2.5 rounded min-h-80 text-center">
      <nav class="sm:flex sm:flex-row sm:justify-evenly items-center mx-auto ">
        <Link to="/" class="flex justify-center">
          <img
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661282043/Fullstack_Felines_1_o93p2j.png"
            class="object-contain h-25 sm:h-16 xl:h-20 transition duration-300 hover:scale-125 sm:flex-1 sm:flex-row sm:ml-5 sm:justify-start m-2 "
          />
        </Link>
        {/* <div class="flex text-center sm:justify-center  sm:flex-row sm:w-1/3"> */}
        <Link
          to="/"
          class="text-coral  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 mx-2 inline-block"
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
        {/* </div> */}
      </nav>
    </div>
  );
}
