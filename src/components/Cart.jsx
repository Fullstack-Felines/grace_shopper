import React, { useEffect, useState } from "react";
import { useCart } from "../Hooks";
import { fetchOrdersByCart, fetchOrderById } from "../api/orders_kitten";
import { fetchKittenById } from "../api/kittens";
import OrderCard from "./OrderCard";
import { updateCart } from "../api/orders";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  function calcCartTotal(cart) {
    let total = 0;
    cart.orders_kitten.forEach((order_kitten) => {
      total += order_kitten.kittens.price;
    });

    return total;
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.orders_kitten ? (
        <div>
          <div className="orderSummary">
            {cart.orders_kitten.map((order) => {
              return <OrderCard key={`Key:${order.id}`} order={order} />;
            })}
          </div>

          <div>
            <p> Subtotal: ${calcCartTotal(cart)}.00</p>

            <p>
              Tax: ${(calcCartTotal(cart) * Math.round(0.07 * 1000)) / 1000}
            </p>
            <p>
              Total: $
              {calcCartTotal(cart) +
                (calcCartTotal(cart) * Math.round(0.07 * 1000)) / 1000}
            </p>
            <button
              onClick={() => {
                navigate("/Payment");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
