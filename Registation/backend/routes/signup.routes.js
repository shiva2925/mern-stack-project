const express = require("express")
const signupController = require("../controller/signup.controller")
const signupRoute = express.Router()

signupRoute.post("/add", signupController.addSignup)
signupRoute.post("/get", signupController.getSignup)




module.exports = signupRoute