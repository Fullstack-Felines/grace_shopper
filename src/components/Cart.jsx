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
    <div class="bg-gradient-to-b from-pink to-cultured">
      <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg  md:max-w-5xl">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid md:grid-cols-3 gap-2 ">
              <div class="col-span-2 p-5">
                <h1>Cart</h1>
                {cart.orders_kitten ? (
                  <div>
                    <div className="orderSummary">
                      {cart.orders_kitten.map((order) => {
                        return (
                          <OrderCard key={`Key:${order.id}`} order={order} />
                        );
                      })}
                    </div>

                    <div>
                      <p> Subtotal: ${calcCartTotal(cart)}.00</p>

                      <p>
                        Tax: $
                        {(calcCartTotal(cart) * Math.round(0.07 * 1000)) / 1000}
                      </p>
                      <p>
                        Total: $
                        {calcCartTotal(cart) +
                          (calcCartTotal(cart) * Math.round(0.07 * 1000)) /
                            1000}
                      </p>

                      <div class="flex justify-center flex-col pt-3">
                        <label class="text-xs text-gray-400 ">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          class="focus:outline-none w-full h-6 bg-gray-800 text-black placeholder-gray text-sm border-b border-gray py-4"
                          placeholder="Name"
                        ></input>
                      </div>

                      <div class="flex justify-center flex-col pt-3">
                        <label class="text-xs text-gray-400 ">
                          Card Number
                        </label>
                        <input
                          type="text"
                          class="focus:outline-none w-full h-6 bg-white text-black placeholder-grey text-sm border-b border-gray py-4"
                          placeholder="****     ****      ****      ****"
                        ></input>
                      </div>

                      <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                        <div class="col-span-2 ">
                          <label class="text-xs text-gray-400">
                            Expiration Date
                          </label>
                          <div class="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              class="focus:outline-none w-full h-6 bg-white text-black placeholder-gray text-sm border-b border-gray py-4"
                              placeholder="mm"
                            ></input>
                            <input
                              type="text"
                              class="focus:outline-none w-full h-6 bg-white text-black placeholder-gray text-sm border-b border-gray py-4"
                              placeholder="yyyy"
                            ></input>
                          </div>
                        </div>

                        <div class="">
                          <label class="text-xs text-gray-400">CVV</label>
                          <input
                            type="text"
                            class="focus:outline-none w-full h-6 bg-gray-800 text-black placeholder-gray text-sm border-b border-gray py-4"
                            placeholder="XXX"
                          ></input>
                        </div>
                      </div>

                      <button
                        class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
