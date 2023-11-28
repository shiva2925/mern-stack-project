import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import axios from "axios"
import { MdDelete } from "react-icons/md";
function Home() {
    const [todo, setTodo] = useState([])
    const [render,setRender] = useState(false)
    useEffect(() => {
        getTodoData()
    },[render])
    const getTodoData = async () => {
        try {
            const getData = await axios("http://localhost:5000/task/get")
         
            setTodo(getData?.data)
        } catch (error) {
            console.log(error)
        }
    }

    //handleDelete
    const handleDelete=async(id)=>{
 try {
    const deleteItem= await axios.post("http://localhost:5000/task/delete",{deleteId:id})
    await getTodoData()
  
 } catch (error) {
    console.log(error)
 }
    }
    return (
        <div className='todo-container'>
            <div className='todo-body'>
                {console.log(todo?.data, "todo")}
                <h1>TODO List</h1>
                <CreateTodo setRender={setRender}/>
                <div className="todoItems">
                    {todo.data?.length > 0 ?
                        <table className='table-head'>{
                            todo?.data.map(ele => {
                                return (
                                    <tr>
                                        <td className='td-left'><input type="checkbox" name={ele._id} id={ele._id} /></td>
                                        <td className='td-center'><label htmlFor={ele._id} >{ele.task}</label></td>
                                        <td className='td-right'><MdDelete onClick={()=>handleDelete(ele._id)}/><br /></td>
                                    </tr>
                                )
                            })}
                        </table>
                        : <h3>No Records</h3>}
                </div>
            </div>
        </div>
    )
}

export default Home