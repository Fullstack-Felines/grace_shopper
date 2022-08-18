import React, { useState, useEffect } from "react";
import { createCart } from "../api/orders";
import CartContext from "../Context/CartContext";
import useAuth from "../Hooks/useAuth";
import { fetchCartByUserId } from "../api/orders";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const { user } = useAuth();
  console.log("1st print user from cartProvider", user);

  useEffect(() => {
    console.log("user from cartProvider", user);
    if (!user) {
      //if is in local storage, set user's cart to local storage cart
      if (localStorage.getItem("cart")) {
        const guestcart = localStorage.getItem("cart");
        setCart(guestcart);
      } else {
        //if it doesn't exist yet, we'll create a cart
        localStorage.setItem("cart", JSON.stringify({}));

        setCart({
          customer_id: 0,
          total_amount: 0,
          is_active: true,
          shipping_address: "No Address",
        });
      }
      //check local storage
    } else {
      //first we check database to see if this user has a cart.
      const checkCart = async (userID) => {
        const usercart = await fetchCartByUserId(userID);
        //check to see if we got an actual result
        console.log("usercart from cartProvider", usercart);
        if (usercart.customer_id) {
          setCart(usercart);
        } else {
          // if no cart, make a new cart, insert into local storage, make a cart in db for user

          setCart({
            customer_id: userID,
            total_amount: 0,
            is_active: true,
            shipping_address: user.address,
          });

          const newCart = await createCart(cart);
        }
      };
      checkCart(user.id);
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
