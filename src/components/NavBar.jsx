import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { logoutUser } from "../api/authorization";

export default function NavBar() {
  const { user, setUser } = useAuth();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>

        <Link to="/Kittens">Kittens</Link>
        <Link to="/Cart">Cart</Link>

        {user.username ? (
          <button
            onClick={async () => {
              const result = await logoutUser();
              setUser({});
              console.log("User state after logout:", user);
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </nav>
    </div>
  );
}
