import React, { useState, useEffect } from "react";
import CartContext from "../Context/CartContext";
import useAuth from "../Hooks/useAuth";
import { fetchCartByUserId } from "../api/orders";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    customer_id: 0,
    total_amount: 0,
    is_active: true,
    shipping_address: "No Address",
  });
  const { user } = useAuth();

  useEffect(() => {
    async function getCart() {
      const cartFromDb = await fetchCartByUserId(user.id);
      console.log(cartFromDb);
      setCart(cartFromDb);
    }
    getCart();
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
