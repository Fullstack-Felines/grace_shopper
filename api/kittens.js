const kittenRouter = require("express").Router();
const prisma = require("../db/prisma");

//get all the kittens
kittenRouter.get("/", async (req, res, next) => {
  try {
    const kittens = await prisma.kittens.findMany();
    res.send(kittens);
  } catch (error) {
    next(error);
  }
});

//get a kitten by id
// kittenRouter.get("/:id", async (req, res, next) => {
//   try {
//     const singleKitten = await prisma.kittens.findFirst({
//       where: {
//         id: +req.params.id,
//       },
//     });
//     res.send(singleKitten);
//   } catch (error) {
//     next(error);
//   }
// });

//get available kittens
kittenRouter.get("/available", async (req, res, next) => {
  try {
    const availableKittens = await prisma.kittens.findMany({
      where: {
        available: true,
      },
    });
    res.send(availableKittens);
  } catch (error) {
    next(error);
  }
});

//get unavailable kittens
kittenRouter.get("/unavailable", async (req, res, next) => {
  try {
    const unavailableKittens = await prisma.kittens.findMany({
      where: {
        available: false,
      },
    });
    res.send(unavailableKittens);
  } catch (error) {
    next(error);
  }
});

//get a lot of kittens by breed
kittenRouter.get("/:breed", async (req, res, next) => {
  try {
    const kittensOfBreed = await prisma.kittens.findUnique({
      where: {
        breed: req.params.breed,
      },
    });
    res.send(kittensOfBreed);
  } catch (error) {
    next(error);
  }
});

//get kitten by name
kittenRouter.get("/:name", async (req, res, next) => {
  try {
    const kittenByName = await prisma.kittens.findUnique({
      where: {
        name: +req.params.name,
      },
    });
    res.send(kittenByName);
  } catch (error) {
    next(error);
  }
});

//create kitten
kittenRouter.post("/", async (req, res, next) => {
  try {
    const { name, breed, description, price, img_url, available } = req.body;
    const createdKitten = await prisma.kittens.create({
      data: { name, breed, description, price, img_url, available },
    });
    res.send(createdKitten);
  } catch (error) {
    next(error);
  }
});

//update kitten
kittenRouter.patch("/:id", async (req, res, next) => {
  try {
    const kittenId = +req.params.id;
    const body = req.body;
    const updatedKitten = await prisma.kittens.update({
      where: {
        id: kittenId,
      },
      data: { ...body },
    });
    res.send(updatedKitten);
  } catch (error) {
    next(error);
  }
});
module.exports = kittenRouter;
