import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>LOGIN HERE</h2>
      <form>
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
