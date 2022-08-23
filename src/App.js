import useKittens from "./Hooks/useKittens";
import { Route, Routes } from "react-router-dom";

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
  Payment,
  Admin,
  SearchBar,
  KittensCard,
  KittensList,
} from "./components";

import "./style/index.css";

const App = () => {
  return (
    <div class="bg-pink">
      <NavBar />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Admin" element={<Admin />} />
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
        <Route path="/Payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
