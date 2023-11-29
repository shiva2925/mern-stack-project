const mongooseModel = require("../modals/signup.modal")
class signupController {
    static addSignup = async (req,res)=>{
    try {
        // console.log(req.body,"req.body") 
        const data = new mongooseModel(req.body)
        const result =await data.save()  
        console.log(result,"check result")
        return res.status(200).json({status:200, data:result, message:"successfully saved"})
    } catch (error) {
        console.log(error)
    }
    }
    static getSignup =async(req,res)=>{
        try {
            const result = await mongooseModel.find({})
            console.log(result," check result")
            return res.status(200).json({status:200, data:result, message:"data found"})
        } catch (error) {
            
        }
    }
}
module.exports = signupController