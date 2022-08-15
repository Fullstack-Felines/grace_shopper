import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav>
        <Link to="/faq">FAQ</Link>
        <Link to="/Contact">Contact Us!</Link>
      </nav>
    </div>
  );
}
