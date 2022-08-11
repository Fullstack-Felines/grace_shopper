const prisma = require("./prisma");
const models = require("./models");

module.exports = {
  prisma,
  ...models,
};
