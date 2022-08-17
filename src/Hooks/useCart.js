import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { createCart } from "../api/cart";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  // const makeGuestCart = async () => {
  //   const guestCart = await createCart(10000000, 0, true, "");
  //   return guestCart;
  // }; // return this after reimplemented

  return { cart, setCart };
};

export default useCart;
