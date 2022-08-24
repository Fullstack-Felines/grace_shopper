import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authorization";
import useAuth from "../Hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  return (
    <div class="flex justify-center bg-gradient-to-b from-pink to-cultured">
      <div class="flex flex-col sm:flex-row max-w-xl rounded-lg bg-cardpaper shadow-lg">
        <img
          class="sm:w-80 object-cover bg-center bg-no-repeat bg-cover rounded-r-md opacity-90 "
          src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660944160/IMG_20180202_165400_965_u9nrgy.jpg"
        />
        {/* <div class="pt-16 pr-8 pb-16 pl-8 flex flex-wrap content-center justify-center rounded-l-md"> */}
        <div class="w-72">
          <h2 class="text-xl font-bold text-coral">Login </h2>
          <small class="text-black ">
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
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-coral"
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
                class="block w-full rounded-md border border-coral focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral py-1 px-1.5 text-coral"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              id="loginButton"
              type="submit"
              class="mb-1.5 block w-full text-center text-white bg-coral opacity-80 hover:bg-coral hover:opacity-100 px-2 py-1.5 rounded-md"
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
        {/* </div> */}
      </div>
    </div>
  );
}
