const prisma = require("../prisma");

const createKitten = async (kittenObj) => {
  const kitten = await prisma.kittens.create({
    data: kittenObj,
  });
  console.log(kitten);
  return kitten;
};

const getKittens = async () => {
  const kittens = await prisma.kittens.findMany();
  return kittens;
};

const getKittenById = async (id) => {
  const singleKitty = await prisma.kittens.findUnique({
    where: {
      id: id,
    },
  });
  console.log(singleKitty);
  return singleKitty;
};

const getKittenByBreed = async (breed) => {
  const singleKitty = await prisma.kittens.findUnique({
    where: {
      breed: breed,
    },
  });
  console.log(singleKitty);
  return singleKitty;
};

const getKittenByName = async (name) => {
  const singleKitty = await prisma.kittens.findUnique({
    where: {
      name: name,
    },
  });
  console.log(singleKitty);
  return singleKitty;
};

const updateKittyById = async (kittenId, updateObj) => {
  const updatedKitty = await prisma.kittens.update({
    where: {
      id: kittenId,
    },
    data: updateObj,
  });

  return updatedKitty;
};

module.exports = {
  createKitten,
  getKittens,
  getKittenById,
  getKittenByBreed,
  getKittenByName,
  updateKittyById,
};
