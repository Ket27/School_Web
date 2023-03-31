const express = require("express");
const { registerUser, authUser } = require("../controllers/userController")
//const {protect} = require("../middleware/authMiddleware")
const userRouter = express.Router();

userRouter
  .route("/login")
  .post(authUser)
  //.get(protect, allUser)

userRouter
  .route("/")
  .post(registerUser)

module.exports = userRouter;