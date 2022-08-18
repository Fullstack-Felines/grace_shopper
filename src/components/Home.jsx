import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();
  console.log("user from home", user);
  return (
    <div>
      <h1>Welcome to Fullstack Felines</h1>
      <Link to="/Kittens">
        <img src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660336580/oscar-marie-_SeJeTqSbLw-unsplash_qkcvn7.jpg" />
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
