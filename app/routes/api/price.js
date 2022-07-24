var router = require("express").Router();

const PricesControllers = require("../../controllers/PricesControllers.js");

router.get("/prices", PricesControllers.getDefaultPrices);


module.exports =  router;