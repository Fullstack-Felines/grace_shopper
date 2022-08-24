import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { createOrderItem, deleteOrders } from "../api/orders_kitten";
import { fetchCartByUserId } from "../api/orders";
import useAuth from "./useAuth";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useAuth();

  const addKittenToCart = async ({ kitten_id }) => {
    const orderItem = await createOrderItem({ order_id: cart.id, kitten_id });
    const newCart = await fetchCartByUserId(user.id);
    setCart(newCart);
    alert("Kitten added to cart!");
    return orderItem;
  };

  const removeKittenFromCart = async (orderId) => {
    const deleteOrderItem = await deleteOrders(orderId);
    const newCarts = await fetchCartByUserId(user.id);
    setCart(newCarts);
    return deleteOrderItem;
  };

  return { cart, setCart, addKittenToCart, removeKittenFromCart };
};

export default useCart;
