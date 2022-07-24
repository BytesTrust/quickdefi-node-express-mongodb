var router = require("express").Router();

const PricesControllers = require("../../controllers/PricesControllers.js");
 
// simple route
 router.get("/", (req, res) => {
    res.json({ message: "Welcome to QuickDeFi RestApi. Prices." });
  });

router.get("/getPrices", PricesControllers.getDefaultPrices);


module.exports =  router;