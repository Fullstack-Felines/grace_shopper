const cartRouter = require("express").Router();
const prisma = require("../db/prisma");

cartRouter.get("/", async (req, res, next) => {
  try {
    const cart = await prisma.cart.findMany();
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

//get a cart by id
cartRouter.get("/:id", async (req, res, next) => {
  try {
    const singleCart = await prisma.cart.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    res.send(singleCart);
  } catch (error) {
    next(error);
  }
});

//get a cart by customer id
cartRouter.get("/userCart/:userid", async (req, res, next) => {
  try {
    const singleCart = await prisma.cart.findUnique({
      where: {
        customer_id: +req.params.userid,
      },
    });
    res.send(singleCart);
  } catch (error) {
    next(error);
  }
});

//create a new cart
cartRouter.post("/", async (req, res, next) => {
  try {
    console.log("Backend creatingcart body:", req.body);
    const { customer_id, total_amount, is_active, shipping_address } = req.body;
    const createdCart = await prisma.cart.create({
      data: { customer_id, total_amount, is_active, shipping_address },
    });
    res.send(createdCart);
  } catch (error) {
    next(error);
  }
});

//update cart
cartRouter.patch("/:id", async (req, res, next) => {
  try {
    const cartId = +req.params.id;
    const body = req.body;
    const updatedCart = await prisma.cart.update({
      where: {
        id: cartId,
      },
      data: { ...body },
    });
    res.send(updatedCart);
  } catch (error) {
    next(error);
  }
});

module.exports = cartRouter;
