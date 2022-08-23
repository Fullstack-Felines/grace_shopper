import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="bg-red border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
      <footer class="container flex flex-wrap justify-evenly items-center mx-auto">
        <Link
          to="/faq"
          class="text-brown  text-xl font-bold dark:text-white hover:underline"
        >
          FAQ
        </Link>
        <Link
          to="/Contact"
          class="text-brown  text-xl font-bold dark:text-white hover:underline"
        >
          Contact Us!
        </Link>
      </footer>
    </div>
  );
}
