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
    <div class="bg-gradient-to-b from-pink to-cultured">
      <form
        onSubmit={async (event) => {
          //update cart to be inactive and update shipping address
          event.preventDefault();
          const oldCart = cart;
          await updateCart(oldCart.id, {
            customer_id: oldCart.customer_id,
            total_amount: oldCart.total_amount,
            is_active: false,
            shipping_address: shippingAddress,
          });

          // update kittens to be unavailable
          await Promise.all(
            cart.orders_kitten.map((order) => {
              return updateKitten({
                kittenId: order.kittens.id,
                name: order.kittens.name,
                breed: order.kittens.breed,
                description: order.kittens.description,
                price: order.kittens.price,
                img_url: order.kittens.img_url,
                available: false,
              });
            })
          );

          const newCart = await createCart({
            customer_id: cart.customer_id,
            total_amount: 0,
            is_active: true,
            shipping_address: shippingAddress,
          });

          setCart(newCart);
          alert("Thank you for your purchase!");
          navigate("/");
          window.location.reload();
        }}
      >
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16 md:w-10/12 lg:w-2/3 xl:w-2/5">
          <div class="w-full mx-auto rounded-lg bg-cardpaper shadow-lg p-5 text-gray">
            <div class="w-full pt-1 pb-5">
              <div class="bg-coral text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661350049/Untitled_design_vofbe5.png"
                  class="object-contain h-14  hover transition duration-300 hover:scale-125"
                />
              </div>
            </div>
            <div class="mb-10">
              <h1 class="text-center font-bold text-xl uppercase">
                Secure payment form
              </h1>
            </div>
            <div class="mb-3 flex -mx-2">
              <div class="px-2">
                <label for="type1" class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    class="form-radio h-5 w-5 text-coral"
                    name="type"
                    id="type1"
                  ></input>
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    class="h-8 ml-3"
                  />
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
              <div>
                <input
                  class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-coral transition-colors"
                  placeholder="Name"
                  type="text"
                />
              </div>
            </div>

            <label class="font-bold text-sm mb-2 ml-1">Shipping address</label>
            <div>
              <input
                class="form-select w-full px-3 py-2 mb-4 border-2 border-gray rounded-md focus:outline-none focus:border-coral transition-colors"
                value={shippingAddress}
                placeholder="Address"
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label class="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-coral transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>
            <div class="mb-3 -mx-2 flex items-end">
              <div class="px-2 w-1/2">
                <label class="font-bold text-sm mb-2 ml-1">
                  Expiration date
                </label>
                <div>
                  <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-coral transition-colors cursor-pointer">
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray rounded-md focus:outline-none focus:border-coral transition-colors cursor-pointer">
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>
            <div class="">
              <label class="font-bold text-sm mb-4 ml-1">Security code</label>
              <div>
                <input
                  class="w-32 px-3 py-2 mb-10 border-2 border-gray-200 rounded-md focus:outline-none focus:border-coral transition-colors"
                  placeholder="000"
                  type="text"
                />
              </div>
            </div>

            <div>
              <button class="block w-full max-w-xs mx-auto bg-coral hover:bg-coral focus:bg-coral text-white rounded-lg px-3 py-3 font-semibold">
                <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
