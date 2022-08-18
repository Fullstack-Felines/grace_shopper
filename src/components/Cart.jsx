import React, { useEffect, useState } from "react";
import { useCart } from "../Hooks";
import { fetchOrdersByCart } from "../api/orders_kitten";

export default function Cart() {
  const { cart } = useCart();
  const [orders, setOrders] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  console.log("cart from cart", cart);

  useEffect(() => {
    async function getOrders_kitten(orderId) {
      const fetchedOrders = await fetchOrdersByCart(orderId);
      console.log("fetchedorders", fetchedOrders);
      //figuring out this fetchedOrders stuff!!!

      if (fetchedOrders.length) {
        console.log("setting orders");
        setOrders(fetchedOrders);
      }
      console.log("orders from cart", orders);
    }
    getOrders_kitten(cart.id);
  }, []);

  // useEffect(() => {
  //   async function getSubTotal(fetchedOrders) {}
  // });

  return (
    <div>
      <h1>Cart</h1>
      <div className="orderSummary">
        {orders}
        {/* {orders.map((order, index) => {
          return <OrderCard key={`${order.id}`} order={order} />;
        })} */}
      </div>

      <div>
        Subtotal: {`${subTotal}`}
        Tax: Total:
      </div>
    </div>
  );
}
