const express = require("express");

const authRouter = express.Router();
const authController = require("../controllers/authController.js");

authRouter.post("/sign-up", authController.postSignUp);
authRouter.post("/login", authController.postLogin);
authRouter.post("/log-out", authController.postLogOut);

module.exports = authRouter;