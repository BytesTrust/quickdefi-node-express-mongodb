module.exports = (app) => {
  const UserController = require("../controllers/UserControllers.js");
  const PricesControllers = require("../controllers/PricesControllers.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/createUser", UserController.create);

  // Retrieve all User
  router.get("/findAllUser", UserController.findAll);

  // Retrieve all kyc  User
  router.get("/findAllKYCUser", UserController.findAllKYCVerifiy);

  // Retrieve User by wallet Address
  //router.get("/findUserWalletAddress", UserController.findUserWalletAddress);

  // Retrieve a single User with id
  router.get("/:id", UserController.findOne);

  // Update a User with id
  router.put("/:id", UserController.update);

  // Delete a User with id
  router.delete("/:id", UserController.delete);

  // Create a new User
  router.delete("/", UserController.deleteAll);

  router.get("/prices", PricesControllers.getDefaultPrices);

  app.use("/api/", router);



};
