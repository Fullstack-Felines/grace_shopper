import React, { useState, useEffect } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "./axios-services";
import {
  AboutUs,
  AdoptedKittens,
  Cart,
  Contact,
  Faq,
  Footer,
  Home,
  Kittens,
  Login,
  NavBar,
  Register,
  SingleKitten,
  SearchBar,
  KittensCard,
  KittensList,
} from "./components";
import useKittens from "./Hooks/useKittens";
import { Route, Routes } from "react-router-dom";

// import "../style/App.css";

const App = () => {
  const { kittens, setKittens } = useKittens();
  // const [APIHealth, setAPIHealth] = useState("");

  // useEffect(() => {
  //   // follow this pattern inside your useEffect calls:
  //   // first, create an async function that will wrap your axios service adapter
  //   // invoke the adapter, await the response, and set the data
  //   const getAPIStatus = async () => {
  //     const { healthy } = await getAPIHealth();
  //     setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
  //   };

  //   // second, after you've defined your getter above
  //   // invoke it immediately after its declaration, inside the useEffect callback
  //   getAPIStatus();
  // }, []);

  //   {/* <h1>Hello, World!</h1>
  // <p>API Status: {APIHealth}</p> */}

  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AdoptedKittens" element={<AdoptedKittens />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
        <Route path="/Kittens" element={<Kittens />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Kittens/:id" element={<SingleKitten />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
