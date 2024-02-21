import React, { useState } from 'react'
import { registerApiCall } from '../service/AuthService';

export default function RegisterComponent() {

    const [name,setName] = useState('');
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleRegisterationForm = (e) =>{
        e.preventDefault();
        const register = {name,username,email,password};
        registerApiCall(register).then((resp) => {
            console.log(resp.data);
        }).catch(error => console.log(error));
    }
  return (
    <div className='container mt-5 '>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h2 className='text-center'>
                            Registeration Form
                        </h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3 align-items-center">
                                <label className='col-md-3 form-label'>Name</label>
                                <div className="col-md-9">
                                <input type="text"
                                        className='form-control'
                                        name='name'
                                        value={name}
                                        placeholder='Enter Your Name'
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center ">
                                <label className='col-md-3 form-label'>UserName</label>
                                <div className="col-md-9">
                                <input type="text"
                                        className='form-control'
                                        name='username'
                                        value={username}
                                        placeholder='Enter Your UserName'
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center ">
                                <label className='col-md-3 form-label'>Email</label>
                                <div className="col-md-9">
                                <input type="text"
                                        className='form-control'
                                        name='email'
                                        value={email}
                                        placeholder='Enter Your Email'
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label className='col-md-3 form-label'>Password</label>
                                <div className="col-md-9">
                                <input type="password"
                                        className='form-control'
                                        name='password'
                                        value={password}
                                        placeholder='Enter Your Password'
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <button className='btn btn-primary'
                            onClick={e => handleRegisterationForm(e)}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
