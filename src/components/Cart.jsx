import React, { useEffect, useState } from "react";
import { useCart } from "../Hooks";
import { fetchOrdersByCart } from "../api/orders";

export default function Cart() {
  const { cart } = useCart();
  const [orders, setOrders] = useState([]);
  const [subTotal, setSubTotal] = useState([]);

  console.log("CartID from cart component:", cart.id);

  useEffect(() => {
    async function getOrders(cartId) {
      const orders = await fetchOrdersByCart(cartId);
      setOrders(orders);
      console.log("ORDERS", orders);
    }
    getOrders(cart.id);
  }, []);

  useEffect(() => {
    async function getSubTotal(orders) {}
  });

  return (
    <div>
      <h1>Cart</h1>
      <div className="orderSummary">
        {orders.map((order, index) => {
          return <OrderCard key={`${order.id}`} order={order} />;
        })}
      </div>

      <div>
        Subtotal: {`${subTotal}`}
        Tax: Total:
      </div>
    </div>
  );
}
