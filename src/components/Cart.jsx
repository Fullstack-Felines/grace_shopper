import React, { useEffect, useState } from "react";
import { useCart } from "../Hooks";
import { fetchOrdersByCart, fetchOrderById } from "../api/orders_kitten";
import { fetchKittenById } from "../api/kittens";
import OrderCard from "./OrderCard";

export default function Cart() {
  const { cart } = useCart();
  const [orders, setOrders] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    async function getOrders_kitten(orderId) {
      const fetchedOrders = await fetchOrdersByCart(orderId);

      if (fetchedOrders) {
        setOrders(fetchedOrders);
      }
    }
    getOrders_kitten(cart.id);
  }, []);

  useEffect(() => {
    async function getSubTotal(fetchedOrders) {
      // setSubTotal(0);
      // let priceArray = [];
      console.log("subtotal1", subTotal);
      fetchedOrders.forEach(async (order) => {
        const kitten = await fetchKittenById(order.kitten_id);
        console.log("kitten in foreach", kitten);

        const newSubtotal = subTotal + kitten.price;
        console.log("newsub", newSubtotal);

        // priceArray.push(kitten.price);
        console.log("subtotal", subTotal);
        // return priceArray;
        setSubTotal(newSubtotal);
      });
    }
    getSubTotal(orders);
    // console.log("subtatol array", subTotalArray);
  }, [orders]);
  console.log("final subtotal", subTotal);

  return (
    <div>
      <h1>Cart</h1>
      <div className="orderSummary">
        {orders.map((order) => {
          return <OrderCard key={`Key:${order.id}`} order={order} />;
        })}
      </div>

      <div>
        <p> Subtotal: {`${subTotal}`}</p>
        <p>Tax:</p>
        <p>Total:</p>
      </div>
    </div>
  );
}
