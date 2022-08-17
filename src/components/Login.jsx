import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authorization";
import { fetchCartByUserId } from "../api/orders";
import { useCart } from "../Hooks";
import useAuth from "../Hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  return (
    <div>
      <h2>LOGIN HERE</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);

          if (result.user) {
            alert("You are now logged in!");
            setUser(result.user);
            navigate("/");
            window.location.reload();
          } else {
            setErrorMessage("Incorrect Login");
            alert(errorMessage);
          }
        }}
      >
        <input
          className="userinput"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="userinput"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="loginButton" type="submit">
          Login
        </button>
        <Link id="registerClick" to="/register">
          Don't have an account?
        </Link>
      </form>
    </div>
  );
}
