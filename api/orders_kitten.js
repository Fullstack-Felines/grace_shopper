const orders_kittenRouter = require("express").Router();
const prisma = require("../db/prisma");

//get all kitten orders by cart id
orders_kittenRouter.get("/cartOrder/:id", async (req, res, next) => {
  try {
    const orders = await prisma.orders_kitten.findMany({
      where: {
        order_id: +req.params.id,
      },
    });
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

//get order by id
orders_kittenRouter.get("/:id", async (req, res, next) => {
  try {
    const singleOrder = await prisma.orders_kitten.findUnique({
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
orders_kittenRouter.post("/", async (req, res, next) => {
  try {
    const { kitten_id, order_id } = req.body;
    const createdOrder = await prisma.orders_kitten.create({
      data: { kitten_id, order_id },
    });
    res.send(createdOrder);
  } catch (error) {
    next(error);
  }
});

//update order
orders_kittenRouter.patch("/:id", async (req, res, next) => {
  try {
    const orderId = +req.params.id;
    const body = req.body;
    const updatedOrder = await prisma.orders_kitten.update({
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

orders_kittenRouter.delete("/:id", async (req, res, next) => {
  try {
    const orderId = +req.params.id;
    const deletedOrder = await prisma.orders_kitten.delete({
      where: {
        id: orderId,
      },
    });
    res.send(deletedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = orders_kittenRouter;
