import React, { useState, useEffect } from "react";
import { createCart } from "../api/orders";
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

    // if (!user) {
    //   //if is in local storage, set user's cart to local storage cart
    //   if (localStorage.getItem("cart")) {
    //     const guestcart = localStorage.getItem("cart");
    //     setCart(guestcart);
    //   } else {
    //     //if it doesn't exist yet, we'll create a cart
    //     localStorage.setItem(
    //       "cart",
    //       JSON.stringify({
    //         customer_id: 0,
    //         total_amount: 0,
    //         is_active: true,
    //         shipping_address: "No Address",
    //       })
    //     );

    //     setCart({
    //       customer_id: 0,
    //       total_amount: 0,
    //       is_active: true,
    //       shipping_address: "No Address",
    //     });
    //   }
    //   //check local storage
    // } else {
    //first we check database to see if this user has a cart.
    getCart();
    // }
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
