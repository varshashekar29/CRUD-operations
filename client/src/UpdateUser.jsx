import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                console.log(result);
                setName(result.data.name || '');
                setEmail(result.data.email || '');
                setAge(result.data.age || '');
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/" + id, { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-black p-2">
                <form onSubmit={Update}>
                    <h2 style={{ color: "white" }}>Update User</h2>
                    <div className='mb-2'>
                        <label style={{ color: "white" }}>Name</label>
                        <input type="text" placeholder="Enter name" className="form-control"
                    onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label style={{ color: "white" }}>Email</label>
                        <input type="email" placeholder="Enter email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label style={{ color: "white" }}>Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control"
                            value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
