import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [signUpData, setSignUpData] = useState(null)
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target
        let data = {
            ...userData,
            [name]: value
        }
        setUserData(data)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            if (userData.email != "" && userData.password != "") {
                const resposeData = await axios.post("http://localhost:5000/signup/get/")
               console.log(resposeData)
                const data = resposeData?.data?.data.filter(ele => {
                    return ele.email == userData.email && ele.password == userData.password
                })
                console.log(data)
                if (data.length == 1) {
                    navigate('/home')
                } else {
                    setSignUpData(false)
                }
            }

            // setSignUpData(resposeData.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-25 p-3" style={{ border: "2px solid #E8E8E8", borderRadius: "5px", boxShadow: "0px 0px 10px gray" }}>
            <form >
                <div class="form-group m-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={userData.email} onChange={handleChange} />
                </div>
                <div class="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={userData.password} onChange={handleChange} />
                </div>

                <div className='text-center'>
                    
                   
                    <button class="btn btn-success m-3 w-75 "  onClick={handleLogin}>Login</button>
                </div>
            </form>
            <div className='text-center'>
                <small id="emailHelp" class="form-text text-muted mx-3">Not signed up?</small><br />
                <Link to="/signup" class="btn btn-danger w-75 m-3">SignUp</Link>
            </div>
        </div>
    )
}

export default Login