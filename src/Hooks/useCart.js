import { useContext } from "react";
import CartContext from "../Context/CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { cartId, setCartId } = useContext(CartContext);

  return { cart, setCart };
};

export default useCart;
