module.exports = (app) => {
  const UserController = require("../controllers/UserControllers.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", UserController.create);

  // Retrieve all User
  router.get("/", UserController.findAll);

  // Retrieve all published User
  router.get("/kyc", UserController.findAllKYCVerifiy);

  // Retrieve a single User with id
  router.get("/:id", UserController.findOne);

  // Update a User with id
  router.put("/:id", UserController.update);

  // Delete a User with id
  router.delete("/:id", UserController.delete);

  // Create a new User
  router.delete("/", UserController.deleteAll);

  app.use("/api/UserController", router);
};