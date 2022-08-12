import React, { useState } from "react";
import { registerUser } from "../api/authorization";
// import { useAuth } from "../Hooks";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const { setToken, user } = useAuth();

  return (
    <div>
      <h3>REGISTER HERE:</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(
            username,
            password,
            name,
            email,
            address,
            phonenumber
          );

          console.log("result", result);
          // if (result.user) {
          //   setErrorMessage("You are now registered.");
          //   localStorage

          // }
        }}
      >
        <input
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          value={phonenumber}
          placeholder="phonenumber"
          onChange={(e) => setPhonenumber(e.target.value)}
        />

        <input
          value={address}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
