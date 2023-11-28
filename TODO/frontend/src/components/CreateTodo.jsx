import React, { useState } from 'react'
import axios from "axios"
function CreateTodo(props) {
  const [task,setTask]=useState("")

  const handleTask = async()=>{
  try {
   if(task!=""){
    await axios.post("http://localhost:5000/task/add",{task:task})
    setTask("")
    await props.setRender(task)
   }

  } catch (error) {
    console.log(error)
  }
    
  }
  return (
    <div className='createTodo'>
        
        <input type="text"  placeholder='Add Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <input type="button" value="Add" className='todo-button' onClick={handleTask}/>
        
    </div>
  )
}

export default CreateTodo