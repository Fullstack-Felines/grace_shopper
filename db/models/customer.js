// grab our db client connection to use with our adapters
const prisma = require("../prisma");

const createCustomer = async (customerObj) => {
  const customer = await prisma.customers.create({
    data: customerObj,
  });
  console.log(customer);
  return customer;
};

const getCustomers = async () => {
  const customers = await prisma.customers.findMany();
  return customers;
};

module.exports = {
  createCustomer,
  getCustomers,
};
