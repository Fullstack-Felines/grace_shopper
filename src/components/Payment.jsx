import React, { useState } from "react";
import { useCart } from "../Hooks";
import { updateCart } from "../api/orders";
import { updateKitten } from "../api/kittens";

export default function Payment() {
  const { cart, setCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");

  return (
    <div>
      <form
        onSubmit={async () => {
          await updateCart(cart.id, {
            customer_id: cart.customer_id,
            total_amount: cart.total_amount,
            is_active: false,
            shipping_address: shippingAddress,
          });

          //update cart to be inactive and update shipping address
          //update kittens to be unavailable
          cart.orders_kitten.forEach(async (order) => {
            const kitten = await fetchKittenById(order.kitten_id);
            await updateKitten(order.kitten_id, {
              name: kitten.name,
              breed: kitten.breed,
              description: kitten.description,
              price: kitten.price,
              img_url: kitten.img_url,
              available: false,
            });
          });
          alert("Thank you for your purchase!");
          //navigate to home page
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
