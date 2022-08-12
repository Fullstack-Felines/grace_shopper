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

module.exports = apiRouter;
