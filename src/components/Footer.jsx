import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks";

export default function Footer() {
  const { user } = useAuth();
  return (
    <div class="fixed bottom-1  bg-red border-gray-200 px-1 sm:px-8 py-3 rounded ">
      <footer class="container mx-auto">
        <Link
          to="/faq"
          class="text-brown  text-xl font-bold transform  p-3 hover:text-white transition duration-500 hover:scale-125 "
        >
          FAQ
        </Link>
        <Link
          to="/Contact"
          class="text-brown  text-xl font-bold transform   hover:text-white transition duration-500 hover:scale-125 "
        >
          Contact Us!
        </Link>

        {user.is_admin ? (
          <Link
            to="/Admin"
            class="text-brown  text-xl font-bold transform   hover:text-white transition duration-500 hover:scale-125 "
          >
            Admin
          </Link>
        ) : null}
      </footer>
    </div>
  );
}
