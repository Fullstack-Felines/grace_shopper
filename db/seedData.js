/*
 id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  description varchar (255) NOT NULL,
  price INTEGER NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  available BOOLEAN DEFAULT true
*/

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

/*
    name VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL
*/

const customers = [
  {
    name: "Charles the Super Cool",
    address: "123 this street",
    phone: "123456778",
    username: "CoolCharles",
    password: "test",
    email: "CharlesCool@email.com",
  },
  {
    name: "Arnold Grant",
    address: "123 that street",
    phone: "123456779",
    username: "ArntOld",
    password: "test",
    email: "HeyArnold@email.com",
  },
  {
    name: "Priscilla Humboldt",
    address: "123 There street",
    phone: "123456708",
    username: "PrisciHumdinger",
    password: "test",
    email: "Prispriskittykiss@email.com",
  },
];

module.exports = { kittens, customers };
