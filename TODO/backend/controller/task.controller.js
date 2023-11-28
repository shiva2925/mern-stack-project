const mongooseModal = require("../models/task.modal")



class taskControllers {
    static addTask = async (req, res) => {
        try {
           
            const taskData = new mongooseModal(req.body)
            const save = await taskData.save()
            return res.status(200).json({ status: 200, data: save, message: "Succesfully saved" })
        } catch (error) {
            console.log(error)
        }
    }
    static getTask = async (req,res)=>{
       try {
        const getTaskData = await mongooseModal.find({})
        return res.status(200).json({ status: 200, data: getTaskData, message: "Succesfully get" })
       } catch (error) {
        console.log(error)
       }
    }
    static deleteTask = async (req,res)=>{
        try {
            const deletedtask = await mongooseModal.findByIdAndDelete(req.body.deleteId)
            res.status(200).json({status:200, message:"deleted"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = taskControllers
