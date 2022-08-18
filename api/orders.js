const ordersRouter = require("express").Router();
const prisma = require("../db/prisma");
const { authRequired } = require("./utils");

// gets all carts
ordersRouter.get("/", async (req, res, next) => {
  try {
    const cart = await prisma.orders.findMany();
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// get a cart by id
// where isActive === true
// include the kittens
ordersRouter.get("/:id", async (req, res, next) => {
  try {
    const singleCart = await prisma.orders.findUnique({
      where: {
        id: +req.params.id,
      },
      include: {
        orders_kitten: {
          include: {
            kittens: true,
          },
        },
      },
    });
    res.send(singleCart);
  } catch (error) {
    next(error);
  }
});

//get a cart by customer id
ordersRouter.get("/userCart/:userid", async (req, res, next) => {
  try {
    const singleCart = await prisma.orders.findUnique({
      where: {
        customer_id: +req.params.userid,
      },
    });

    if (singleCart) {
      res.send(singleCart);
    } else {
      res.status(404);
      next({
        error: "not found",
        message: "This cart does not exist",
        name: "There is no cart for our kittens",
      });
    }
  } catch (error) {
    next(error);
  }
});

//create a new cart
ordersRouter.post("/", async (req, res, next) => {
  try {
    console.log("Backend creatingcart body:", req.body);
    const { customer_id, total_amount, is_active, shipping_address } = req.body;
    const createdCart = await prisma.orders.create({
      data: { customer_id, total_amount, is_active, shipping_address },
    });
    res.send(createdCart);
  } catch (error) {
    next(error);
  }
});

//update cart
// purchase a cart
ordersRouter.patch("/:id", authRequired, async (req, res, next) => {
  try {
    const cartId = +req.params.id;
    const { customer_id, total_amount, is_active, shipping_address } = req.body;

    const updatedCart = await prisma.orders.update({
      where: {
        id: cartId,
      },
      data: { customer_id, total_amount, is_active, shipping_address },
    });
    res.send(updatedCart);
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
