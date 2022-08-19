import React, { useEffect, useState } from "react";
import { useCart } from "../Hooks";
import { fetchOrdersByCart, fetchOrderById } from "../api/orders_kitten";
import { fetchKittenById } from "../api/kittens";
import OrderCard from "./OrderCard";
import { updateCart } from "../api/orders";

export default function Cart() {
  const { cart } = useCart();
  // const [orders, setOrders] = useState([]);
  // const [subTotal, setSubTotal] = useState(cart.total_amount);

  useEffect(() => {
    // async function getOrders_kitten(orderId) {
    //   const fetchedOrders = await fetchOrdersByCart(orderId);
    //   if (fetchedOrders) {
    //     setOrders(fetchedOrders);
    //   }
    // }
    // getOrders_kitten(cart.id);
  }, []);

  // useEffect(() => {
  //   async function getSubTotal(fetchedOrders) {
  //     // setSubTotal(0);
  //     // let priceArray = [];
  //     // console.log("subtotal1", subTotal);
  //     fetchedOrders.forEach(async (order) => {
  //       const kitten = await fetchKittenById(order.kitten_id);
  //       console.log("kitten in foreach", kitten);

  //       cart.total_amount += kitten.price;
  //       console.log("cart total amount", cart.total_amount);
  //       //await updateCart(cart);
  //       // console.log("newsub", newSubtotal);

  //       // priceArray.push(kitten.price);
  //       // console.log("subtotal", subTotal);
  //       // return priceArray;
  //       // setSubTotal(newSubtotal);
  //     });
  //   }
  //   getSubTotal(orders);
  //   // console.log("subtatol array", subTotalArray);
  // }, []);
  // console.log("final subtotal", subTotal);

  function calcCartTotal(cart) {
    let total = 0;
    cart.orders_kitten.forEach((order_kitten) => {
      total += order_kitten.kittens.price;
    });
    return total;
  }

  console.log("Cart:", cart);
  console.log("cart orders_kitten", cart.orders_kitten);

  return (
    <div>
      <h1>Cart</h1>
      <div className="orderSummary">
        {cart.orders_kitten.map((order) => {
          return <OrderCard key={`Key:${order.id}`} order={order} />;
        })}
      </div>

      <div>
        <p> Subtotal: {calcCartTotal(cart)}.00</p>
        <p>Tax:</p>
        <p>Total:</p>
      </div>
    </div>
  );
}
