import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to Fullstack Felines</h1>
      <Link to="/Kittens">
        <img src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660336580/oscar-marie-_SeJeTqSbLw-unsplash_qkcvn7.jpg" />
      </Link>

      <p>
        “Every day with every connection, Fullstack Feline’s passionate
        associates help bring pet parents closer to their pets so they can live
        more fulfilled lives.”
      </p>
    </div>
  );
}
