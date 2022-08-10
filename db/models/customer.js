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

const getSingleCustomer = async (customerId) => {
  const singleCustomer = await prisma.customers.findUnique({
    where: { id: customerId },
  });
  return singleCustomer;
};

module.exports = {
  createCustomer,
  getCustomers,
  getSingleCustomer,
};
