const express = require("express")
const taskControllers = require("../controller/task.controller")
const task = express.Router()

task.post("/add",taskControllers.addTask)
task.get("/get", taskControllers.getTask)
task.post("/delete", taskControllers.deleteTask)



module.exports=task