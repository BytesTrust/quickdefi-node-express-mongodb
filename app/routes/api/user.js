var router = require("express").Router();

const UserController = require("../../controllers/UserControllers.js");

  // simple route
  router.get("/", (req, res) => {
    res.json({ message: "Welcome to QuickDeFi RestApi. User" });
  });

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


module.exports =  router;