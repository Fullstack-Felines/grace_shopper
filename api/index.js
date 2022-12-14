const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// place your routers here

// ROUTER: /api/kittens
const kittensRouter = require("./kittens");
apiRouter.use("/kittens", kittensRouter);

// ROUTER: /api/auth
const authRouter = require("./authorization");
apiRouter.use("/authorization", authRouter);

const ordersRouter = require("./orders");
apiRouter.use("/orders", ordersRouter);

const orders_kittenRouter = require("./orders_kitten");
apiRouter.use("/orders_kitten", orders_kittenRouter);

module.exports = apiRouter;
