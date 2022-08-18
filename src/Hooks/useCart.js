import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { createOrder } from "../api/orders_kitten";

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

  const addKittenToCart = async (orderID, kittenID) => {
    console.log("Creating order item:");
    const orderItem = await createOrder(orderID, kittenID);

    console.log("orderItem from useCart hook", orderItem);
    return orderItem;
  };

  return { cart, setCart, addKittenToCart };
};

export default useCart;
