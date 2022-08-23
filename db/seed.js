const prisma = require("./prisma");
const bcrypt = require("bcrypt");
const { kittens, customers, orders, orders_kitten } = require("./seedData.js");

const dropTables = async () => {
  console.log("Dropping tables!!!!");
  await prisma.$executeRaw`DROP TABLE IF EXISTS orders_kitten;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS orders;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS kittens;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS customers;`;

  console.log("Tables Dropped!!!!");
};

// Reference the correct changed table names here
const createTables = async () => {
  console.log("Creating tables!!!!");
  await prisma.$executeRaw`
  CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    is_admin BOOLEAN DEFAULT false
  );`;

  await prisma.$executeRaw`
  CREATE TABLE kittens (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    description varchar (255) NOT NULL,
    price INTEGER NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    available BOOLEAN DEFAULT true
  
);`;

  await prisma.$executeRaw`
  CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    total_amount INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT true,
    shipping_address VARCHAR(255) NOT NULL
  );`;

  await prisma.$executeRaw`
    CREATE TABLE orders_kitten (
      id SERIAL PRIMARY KEY,
      order_id INTEGER REFERENCES orders(id),
      kitten_id INTEGER REFERENCES kittens(id)
  );`;

  console.log("Created Tables!!!!");
};

const seedDb = async () => {
  console.log("creating admin...");
  let password = "admin";
  password = await bcrypt.hash(password, 10);
  const admin = await prisma.customers.create({
    data: {
      username: "admin",
      password: password,
      name: "admin",
      address: "admin",
      phonenumber: "admin",
      email: "admin",
      is_admin: true,
    },
  });
  console.log(admin);

  console.log("creating customers...");
  for (const customer of customers) {
    const createdCustomer = await prisma.customers.create({ data: customer });
    console.log(createdCustomer);
  }

  console.log("creating kittens...");
  for (const kitten of kittens) {
    const createdKitten = await prisma.kittens.create({ data: kitten });
    console.log(createdKitten);
  }

  //formerly cart
  console.log("creating orders...");
  for (const orderItems of orders) {
    const createdOrder = await prisma.orders.create({ data: orderItems });
    console.log(createdOrder);
  }

  //formerly orders
  console.log("creating orders_kitten...");
  for (const order of orders_kitten) {
    const createdOrder = await prisma.orders_kitten.create({ data: order });
    console.log(createdOrder);
  }
};

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
