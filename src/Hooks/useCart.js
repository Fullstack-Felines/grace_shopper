import { useContext } from "react";
import CartContext from "../Context/CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const makeGuestCart = async () => {
    const guestCart = await createCart(10000000, 0, true, "");
    return guestCart;
  };

  return { cart, setCart, makeGuestCart };
};

export default useCart;
