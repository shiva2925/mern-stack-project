const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const task =require("./routes/task.routes")
const app =express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/task-db")

app.use(express.urlencoded({extended:false}))
//load routes
app.use("/task",task)


app.get("/",(req,res)=>{
    res.send("Welcome to express app")
})
app.listen(5000, (req,res)=>{
    console.log("server is running on http://localhost:5000")
})