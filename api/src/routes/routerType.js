const { Router } = require("express");

const getTypes = require("../handlers/typeHandler");

const routerType = Router();

routerType.get("/", getTypes);

module.exports = routerType;
