const { Router } = require("express");
const routerPoke = Router();
const {
  getAllPokeHandler,
  getPokeHandlerById,
  postPokeHandler,
} = require("../handlers/pokeHandler");

routerPoke.get("/", getAllPokeHandler);

routerPoke.get("/:id", getPokeHandlerById);

routerPoke.post("/", postPokeHandler);

module.exports = routerPoke;
