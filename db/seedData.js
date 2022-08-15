const bcrypt = require("bcrypt");

const kittens = [
  {
    name: "Henry",
    breed: "short hair",
    description: "Sweetest boi",
    price: 4000,
    img_url: "http.cat",
    available: true,
  },
  {
    name: "Garfield",
    breed: "Orange Tabby",
    description: "Looooves lasagna",
    price: 20,
    img_url: "http.cat",
    available: true,
  },
  {
    name: "Carl Amelia",
    breed: "Calico",
    description: "Real cool calico cat",
    price: 20000,
    img_url: "http.cat",
    available: false,
  },
];

const customers = [
  {
    name: "Charles the Super Cool",
    address: "123 this street",
    phonenumber: "123456778",
    username: "CoolCharles",
    password: "test",
    email: "CharlesCool@email.com",
  },
  {
    name: "Arnold Grant",
    address: "123 that street",
    phonenumber: "123456779",
    username: "ArntOld",
    password: "test",
    email: "HeyArnold@email.com",
  },
  {
    name: "Priscilla Humboldt",
    address: "123 There street",
    phonenumber: "123456708",
    username: "PrisciHumdinger",
    password: "test",
    email: "Prispriskittykiss@email.com",
  },
  {
    name: "Margery Stuart Baxter",
    address: "123 Primrose Street",
    phonenumber: "123456738",
    username: "Marbax",
    password: "test",
    email: "MarBax@email.com",
  },
];

/*
customer_id INTEGER REFERENCES customers(id),
    total_amount INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT true,
    shipping_address VARCHAR(255) NOT NULL
  );`;
*/
const cart = [
  {
    total_amount: 30,
    is_active: true,
    shipping_address: "test",
  },
];

/*
      id SERIAL PRIMARY KEY,
      cart_id INTEGER REFERENCES cart(id),
      kitten_id INTEGER REFERENCES kittens(id)
*/

const orders = [
  {
    cart_id: 1,
    kitten_id: 1,
  },

  { cart_id: 1, kitten_id: 2 },
];
module.exports = { kittens, customers, cart, orders };
