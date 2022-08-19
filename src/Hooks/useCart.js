import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { createOrderItem } from "../api/orders_kitten";
import { fetchCartByUserId } from "../api/orders";
import useAuth from "./useAuth";

const useCart = () => {
  // bring in authContext
  const { cart, setCart } = useContext(CartContext);
  const { user } = useAuth();

  // const makeGuestCart = async () => {
  //   const guestCart = await createCart(10000000, 0, true, "");
  //   return guestCart;
  // }; // return this after reimplemented

  // addItemToCart -> if the user is logged in, vs not logged in

  // { 1: true, 2: true }

  // removeItemFrom cart

  const addKittenToCart = async ({ kitten_id }) => {
    console.log("Cart ID", cart.id);
    const orderItem = await createOrderItem({ order_id: cart.id, kitten_id });
    console.log("AFTER PUSHING BUTTON", orderItem);
    const newCart = await fetchCartByUserId(user.id);
    setCart(newCart);
    return orderItem;
  };

  return { cart, setCart, addKittenToCart };
};

export default useCart;
