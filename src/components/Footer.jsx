import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks";

export default function Footer() {
  const { user } = useAuth();
  return (
    <div class="fixed bottom-1 w-14 h-8 hover:w-72 hover:opacity-90 overflow-clip bg-coral  px-1 sm:px-1 py-1 rounded opacity-50 ">
      <footer class="container mx-auto">
        <Link
          to="/faq"
          class="text-white  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 px-2 "
        >
          FAQ
        </Link>
        <Link
          to="/Contact"
          class="text-white  text-xl font-bold transform  hover:text-white transition duration-300 hover:scale-125 px-2"
        >
          Contact Us!
        </Link>

        {user.is_admin ? (
          <Link
            to="/Admin"
            class="text-admin rounded-lg bg-white text-xl font-bold transform transition duration-500 hover:scale-125 px-2 opacity-100"
          >
            ADMIN
          </Link>
        ) : null}
      </footer>
    </div>
  );
}
