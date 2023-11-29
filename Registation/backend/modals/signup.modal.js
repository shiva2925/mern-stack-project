const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/signup")

const mongooseSchema = new mongoose.Schema({
name:{type:String, require:true, trim:true},
email:{type: String, require:true, unique:true},
password:{type:String, require:true}
})

const mongooseModel = mongoose.model("userdata",mongooseSchema )

module.exports = mongooseModel;