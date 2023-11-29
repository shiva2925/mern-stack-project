const express = require("express");
const cors = require("cors")
const signupRoute=require("./routes/signup.routes")
const app = express()
// add for cross server
app.use(cors())

// convert to json to string
app.use(express.json())

app.use(express.urlencoded({extended:true}))

//load routes
app.use("/signup",signupRoute)
//get when route /
app.get("/",(req,res)=>{
res.send("Welcome to Express")
})

//create server
app.listen(5000,(req,res)=>{
    console.log("server is started on http://localhost:5000")
})