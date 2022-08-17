const ordersRouter = require("express").Router();
const prisma = require("../db/prisma");

//get all orders by cart id
ordersRouter.get("/cartOrder/:id", async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany({
      where: {
        id: +req.params.id,
      },
    });
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

//get order by id
ordersRouter.get("/:id", async (req, res, next) => {
  try {
    const singleOrder = await prisma.orders.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    res.send(singleOrder);
  } catch (error) {
    next(error);
  }
});

// adding a kitten to the cart
ordersRouter.post("/", async (req, res, next) => {
  try {
    const { kitten_id, cart_id } = req.body;
    const createdOrder = await prisma.orders.create({
      data: { kitten_id, cart_id },
    });
    res.send(createdOrder);
  } catch (error) {
    next(error);
  }
});

//update order
ordersRouter.patch("/:id", async (req, res, next) => {
  try {
    const orderId = +req.params.id;
    const body = req.body;
    const updatedOrder = await prisma.orders.update({
      where: {
        id: orderId,
      },
      data: { ...body },
    });
    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }
});

ordersRouter.delete("/:id", async (req, res, next) => {
  try {
    const orderId = +req.params.id;
    const deletedOrder = await prisma.orders.delete({
      where: {
        id: orderId,
      },
    });
    res.send(deletedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
