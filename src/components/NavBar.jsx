import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660334879/My_project_ddlcsz.png"
            width="150px"
            onClick
          />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Kittens">Kittens</Link>
        <Link to="/Cart">Cart</Link>
      </nav>
    </div>
  );
}
