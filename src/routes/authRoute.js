const express = require("express");
const { login } = require("../controllers/authController.js");

// We have to initialize a router object to add routes in a new file
// Routers are used for segregating your routes in different nodules
const authRouter = express.Router();

authRouter.post("/login", login); // This is a route registration

module.exports = authRouter;
