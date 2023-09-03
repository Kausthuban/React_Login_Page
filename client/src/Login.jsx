import React, {Component} from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './App.css'

function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email,password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home')}
        })
        .catch(err => {console.log(err)
        })
    }

    const incorrectmsg = (e) => {}
    return (
        <div className="d-flex justify-content-center align-items-center align-content-center bg-secondary vh-100" style={{backgroundImage: "url(https://img.freepik.com/premium-photo/smooth-gradient-background_77528-21.jpg?size=626&ext=jpg)" , backgroundRepeat: 'no-repeat', backgroundSize : '100%'}}> 
            <div className="shadow-lg bg-white p-3 rounded mx-15 " style={{width : "30%",minWidth:"40vh"}}>
                <h2 id='login-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                
                <div className="mb-3 ">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input 
                    type="text" 
                    placeholder="Enter Email" 
                    autoComplete="off" 
                    name="email" 
                    className="form-control rounded-0"
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="">
                <button type="submit" className="btn btn-success w-100 rounded-0 ">Login</button>
                </div>
                </form>
             
                <p className="pt-3 pb-0">Don't Have an Account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Register</Link>
                
            </div>
        </div>
    )
}

export default Login;