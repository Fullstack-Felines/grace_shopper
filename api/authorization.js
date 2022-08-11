const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRouter = require("express").Router();
const prisma = require("../db/prisma");
const { JWT_SECRET } = require("../secrets");
const { authRequired } = require("./utils");
const SALT_ROUNDS = 10;

authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, name, address, phonenumber, email } = req.body;
    password = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await prisma.customers.create({
      data: { username, password, name, address, phonenumber, email },
    });

    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send({ user });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.customers.findUnique({
      where: {
        username: username,
      },
    });
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete user.password;

      res.send({ user });
    }
  } catch (error) {
    next(error);
  }
});

authRouter.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/me", authRequired, async (req, res, next) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
