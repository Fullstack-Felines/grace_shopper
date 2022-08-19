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
    <div class="flex flex-wrap min-h-screen content-center justify-center py-10">
      <div class="flex shadow-md">
        <div class="pt-16 pr-8 pb-16 pl-8 flex flex-wrap content-center justify-center rounded-l-md bg-white">
          <div class="w-72">
            <h2 class="text-xl font-semibold text-brass">Welcome back</h2>
            <small class="text-brown">
              Welcome back! Please enter your details
            </small>

            <form
              class="mt-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const result = await loginUser(username, password);

                if (result.user) {
                  alert("You are now logged in!");
                  setUser({ loggedIn: true, ...result.user });
                  navigate("/");
                  window.location.reload();
                } else {
                  setErrorMessage("Incorrect Login");
                  alert(errorMessage);
                }
              }}
            >
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Username</label>
                <input
                  className="userinput"
                  value={username}
                  placeholder="Username"
                  class="block w-full rounded-md border border-red focus:border-brass focus:outline-none focus:ring-1 focus:ring-red py-1 px-1.5 text-brass"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Password</label>
                <input
                  className="userinput"
                  value={password}
                  placeholder="Password"
                  type="password"
                  class="block w-full rounded-md border border-red focus:border-brass focus:outline-none focus:ring-1 focus:ring-red py-1 px-1.5 text-brass"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                id="loginButton"
                type="submit"
                class="mb-1.5 block w-full text-center text-white bg-brass hover:bg-red px-2 py-1.5 rounded-md"
              >
                Login
              </button>
              <div class="mb-3 flex flex-wrap content-center">
                <Link id="registerClick" to="/register">
                  Don't have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap justify-center rounded-r-md">
          <img
            class="w-80 bg-center bg-no-repeat bg-cover rounded-r-md opacity-90"
            src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660944160/IMG_20180202_165400_965_u9nrgy.jpg"
          />
        </div>
      </div>
    </div>
  );
}
