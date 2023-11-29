import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import axios from "axios"
function SignUp() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [showA, setShowA] = useState(false);

    const handleClose=()=>{
        setShowA(false)
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        let data = {
            ...userData,
            [name]: value
        }
        setUserData(data)
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const addData = await axios.post("http://localhost:5000/signup/add", userData)
            setShowA(true)
            setTimeout(()=>{
                setShowA(false)
            },4000)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-25 p-3" style={{ border: "2px solid #E8E8E8", borderRadius: "5px", boxShadow: "0px 0px 10px gray" }}>
            <Toast show={showA} onClose={handleClose} style={{position:"absolute",top:"0",right:"20px",color:"white", backgroundColor:"green"}}>
            
          <Toast.Body>
          
            <p>Registerd Successfully!!!</p>
            </Toast.Body>
        </Toast>
            <form >
                <div className="form-group m-3">
                    <label htmlFor="exampleInputName" >Name</label>
                    <input type="text" className="form-control" id="exampleInputName" value={userData.name} aria-describedby="emailHelp" placeholder="Enter Name" onChange={handleChange} name="name" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={userData.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} name="email" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={userData.password} placeholder="Password" onChange={handleChange} name="password" />
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary m-3 w-75 " onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div className='text-center'>
                <small id="emailHelp" className="form-text text-muted mx-3">already signed up?</small><br />
                <Link to="/login" className="btn btn-success w-75 m-3">Login</Link>
            </div>
        </div>

    )
}

export default SignUp