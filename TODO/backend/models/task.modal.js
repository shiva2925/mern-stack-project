const mongoose = require("mongoose")

const taskSchema=new mongoose.Schema({
    task:String
})

const mongooseModal=mongoose.model("task",taskSchema)
module.exports=mongooseModal