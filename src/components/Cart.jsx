import React from "react";
import { useCart } from "../Hooks";
import OrderCard from "./OrderCard";
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
    <div class="bg-gradient-to-b from-pink to-cultured flex flex-grow flex-col">
      <div class="max-w-md mx-auto bg-cardpaper shadow-lg rounded-lg  md:max-w-5xl">
        <div class="md:flex ">
          {cart.orders_kitten ? (
            <div class="w-full p-4 px-5 py-5">
              <div class="md:grid md:grid-cols-3 gap-2 ">
                <div class="col-span-3">
                  <div>
                    <h1 class="font-bold text-3xl text-coral text-center opacity-80">
                      Kitten Cart
                    </h1>
                    <div className="orderSummary">
                      {cart.orders_kitten.map((order) => {
                        return (
                          <OrderCard key={`Key:${order.id}`} order={order} />
                        );
                      })}
                    </div>

                    <div class="flex text-right flex-col p-2">
                      <p class="py-1"> Subtotal: ${calcCartTotal(cart)}.00</p>

                      <p class="py-1">
                        Tax: $
                        {(calcCartTotal(cart) * Math.round(0.07 * 1000)) / 1000}
                      </p>
                      <p class="pt-1 pb-3">
                        Total: $
                        {calcCartTotal(cart) +
                          (calcCartTotal(cart) * Math.round(0.07 * 1000)) /
                            1000}
                      </p>

                      <button
                        class="h-12 w-full bg-coral rounded focus:outline-none text-white cursor-pointer opacity-90 hover:opacity-100 p-2"
                        onClick={() => {
                          navigate("/Payment");
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
