import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { createCart } from "../api/cart";

const useCart = () => {
  // bring in authContext
  const { cart, setCart } = useContext(CartContext);

  // const makeGuestCart = async () => {
  //   const guestCart = await createCart(10000000, 0, true, "");
  //   return guestCart;
  // }; // return this after reimplemented

  // addItemToCart -> if the user is logged in, vs not logged in

  // { 1: true, 2: true }

  // removeItemFrom cart

  return { cart, setCart };
};

export default useCart;
