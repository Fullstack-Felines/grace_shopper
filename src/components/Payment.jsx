import React, { useState } from "react";
import { useCart } from "../Hooks";
import { updateCart, createCart } from "../api/orders";
import { updateKitten } from "../api/kittens";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cart, setCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async () => {
          //update cart to be inactive and update shipping address

          const newCart = await createCart({
            customer_id: cart.customer_id,
            total_amount: 0,
            is_active: true,
            shipping_address: shippingAddress,
          });

          const oldCart = cart;
          setCart(newCart);

          await updateCart(oldCart.id, {
            customer_id: oldCart.customer_id,
            total_amount: oldCart.total_amount,
            is_active: false,
            shipping_address: shippingAddress,
          });

          //update kittens to be unavailable
          cart.orders_kitten.forEach(async (order) => {
            await updateKitten({
              kittenId: order.kittens.id,
              name: order.kittens.name,
              breed: order.kittens.breed,
              description: order.kittens.description,
              price: order.kittens.price,
              img_url: order.kittens.img_url,
              available: false,
            });
          });
          // START HERE TOMORROW (Hitting everything except the two things below);
          alert("Thank you for your purchase!");
          //navigate to home page
          navigate("/");
        }}
      >
        <input placeholder="Name on Card" />
        <input placeholder="card number" />
        <input placeholder="exp date" />
        <input placeholder="address" />
        <input
          value={shippingAddress}
          placeholder="shipping address"
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <button type="Submit">Submit</button>
      </form>

      {/* Any info in here will not be logged  */}
    </div>
  );
}
