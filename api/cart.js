const cartRouter = require("express").Router();
const prisma = require("../db/prisma");

cartRouter.get("/", async (req, res, next) => {
  try {
    const cart = await prisma.kittens.findMany();
    res.send(kittens);
  } catch (error) {
    next(error);
  }
});

module.exports = cartRouter;
