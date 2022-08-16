import React, { useState, useEffect } from "react";
import { fetchCartById } from "../api/cart";
import Cart from "../Context/CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getCart = async (id) => {
      const result = await fetchCartById(id);
      setCart(result);
    };
    getCart(); //NEEDS CART ID
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
