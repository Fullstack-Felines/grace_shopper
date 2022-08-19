import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="bg-red fixed inset-x-0 bottom-0 justify-evenly flex">
        <Link to="/faq">FAQ</Link>
        <Link to="/Contact">Contact Us!</Link>
      </footer>
    </div>
  );
}
