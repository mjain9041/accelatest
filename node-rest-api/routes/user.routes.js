const express = require("express");
const app = express();

const userRoute = express.Router();
let userController = require("../controllers/users");


// Get User Detail
userRoute.get("/users/:id", userController.getUserDetail);

//Update Users By Id
userRoute.patch("/users/:id", userController.updateUserDetail);

module.exports = userRoute;
