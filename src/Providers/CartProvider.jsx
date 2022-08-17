import React, { useState, useEffect } from "react";
import { createCart } from "../api/orders";
import CartContext from "../Context/CartContext";
import { useAuth } from "../Hooks";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const { user } = useAuth();

  // useEffect(() => {
  //   if (user.id) {
  //     //check local storage
  //     if (localStorage.getItem("cart")) {
  //       const cart = localStorage.getItem("cart");
  //     } else {
  //       //if it doesn't exist yet, we'll create a cart
  //     }

  //     //if is in local storage, set user's cart to local storage cart
  //   }
  // }, [user]);

  // work on logic for loggedIn user's cart

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
