const prisma = require("./prisma");
const { kittens, customers } = require("./seedData.js");

const dropTables = async () => {
  await prisma.$executeRaw`DROP TABLE IF EXISTS kittens;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS customers;`;
};

const createTables = async () => {
  await prisma.$executeRaw`
  CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL
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
};

const seedDb = async () => {
  console.log("creating customers...");
  for (const customer of customers) {
    const createdCustomer = await prisma.customers.create({ data: customer });
    console.log(createdCustomer);
  }

  console.log("creating pups...");
  for (const kitten of kittens) {
    const kitter = await prisma.kittens.create({ data: kitten });
    console.log(kitter);
  }
};

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
    // await alterTables()
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
