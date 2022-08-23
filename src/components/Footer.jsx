import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
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
      </footer>
    </div>
  );
}
