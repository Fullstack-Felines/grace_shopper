import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav class="bg-red flex justify-evenly px-6 content-center">
        <Link to="/faq">FAQ</Link>
        <Link to="/Contact">Contact Us!</Link>
      </nav>
    </div>
  );
}
