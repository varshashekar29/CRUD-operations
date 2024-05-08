import React,{ useState } from "react";
import './App.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,age})
        .then(result=>{
            console.log(result)
            navigate('/')
    })

        
        .catch(err=>console.log(err))

    }

    return(
        
           <div className="d-flex vh-100 justify-content-center align-items-center">
           <div className="w-50 bg-black p-2">
            <form onSubmit={Submit}>
                <h2 style={{color:"white"}}>Add User</h2>
                <div className='mb-2'>
                    <label style={{color:"white"}}>Name</label>
                    <input type="text" placeholder="Enter name" className="form-control"
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label style={{color:"white"}}>Email</label>
                    <input type="email" placeholder="Enter email" className="form-control"
                     onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label style={{color:"white"}}>Age</label>
                    <input type="text" placeholder="Enter Age" className="form-control"
                     onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                
            </form>

           </div>
        </div>
    )
}

export default CreateUser;