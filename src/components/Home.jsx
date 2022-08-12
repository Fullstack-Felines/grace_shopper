import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Fullstack Felines</h1>
      <Link to="/Kittens">
        <img
          src="https://res.cloudinary.com/dg5jk9pui/image/upload/v1660331378/cGc_ssozlu.jpg"
          onClick
        />
      </Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi
        non, sint perferendis ab in facilis deleniti, at, natus cupiditate
        possimus quia minima aliquid dolor vero adipisci! Magni, sit!
        Consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sunt quasi non, sint perferendis ab in facilis deleniti, at, natus
        cupiditate possimus quia minima aliquid dolor vero adipisci! Magni, sit!
        Consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sunt quasi non, sint perferendis ab in facilis deleniti, at, natus
        cupiditate possimus quia minima aliquid dolor vero adipisci! Magni, sit!
        Consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sunt quasi non, sint perferendis ab in facilis deleniti, at, natus
        cupiditate possimus quia minima aliquid dolor vero adipisci! Magni, sit!
        Consequatur?
      </p>
    </div>
  );
}
