const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerPoke = require("./routerPoke.js");
const routerType = require("./routerType");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", routerPoke);
router.use("/types", routerType);

module.exports = router;
