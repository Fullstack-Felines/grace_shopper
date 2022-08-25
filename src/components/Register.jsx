import React, { useState } from "react";
import { registerUser } from "../api/authorization";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  return (
    <div class=" flex flex-grow flex-row  justify-center items-center bg-gradient-to-b from-pink to-cultured ">
      <div class="flex flex-col sm:flex-row sm:h-6/8 rounded-lg bg-cardpaper shadow-lg mt-10 mb-20">
        <img
          class="h-100 w-80 object-cover bg-center bg-no-repeat bg-cover rounded-t-lg sm:rounded-l-lg opacity-90 "
          src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661434289/the-lucky-neko-55ClwmQyNiU-unsplash_t3302c.jpg"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-coral">Register </h2>
          <small class="text-black ">Welcome! Enter your details below.</small>
          <form
            class="mt-4"
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
              if (result.user) {
                alert("You are registered!");
                setUser({ loggedIn: true, ...result.user });
                navigate("/");
              } else {
                setErrorMessage("Username already taken");
                alert(errorMessage);
              }
            }}
          >
            <div>
              <label class="mb-2 block text-xs font-semibold">Name</label>
              <input
                value={name}
                placeholder="Name"
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-black mb-2"
                onChange={(e) => setName(e.target.value)}
              />
              <label class="mb-2 block text-xs font-semibold">Username</label>
              <input
                value={username}
                placeholder="Username"
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-black mb-2"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label class="mb-2 block text-xs font-semibold">Password</label>

              <input
                value={password}
                placeholder="Password"
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-black mb-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label class="mb-2 block text-xs font-semibold">Email</label>

              <input
                value={email}
                placeholder="Email"
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-black mb-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label class="mb-2 block text-xs font-semibold">
                Phone Number
              </label>

              <input
                value={phonenumber}
                placeholder="Phone Number"
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-black mb-2"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <label class="mb-2 block text-xs font-semibold">Address</label>
              <input
                value={address}
                placeholder="Address"
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-black mb-2"
                onChange={(e) => setAddress(e.target.value)}
              />
              <button
                class="mb-1.5 block w-full text-center text-white bg-coral opacity-80 hover:bg-coral hover:opacity-100 px-2 py-1.5 rounded-md"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
