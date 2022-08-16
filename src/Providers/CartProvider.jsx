import React, { useState, useEffect } from "react";
import { createCart } from "../api/cart";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getCart = async () => {
      const guestCart = await createCart(10000000, 0, true, "");
      setCart(guestCart);
    };
    getCart(); //NEEDS CART ID
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
