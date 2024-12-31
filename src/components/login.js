import axios from 'axios';
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [param, SetParam] = useState('')

    


    const handleSubmit = async (event) => {
        event.preventDefault();
       
        await axios.post(`http://localhost:8000/login/${param}`, {
            email, password
        }).then((res) => {
            console.log(res.data.result._id)
            sessionStorage.setItem(`${(param).toLowerCase()}_id`, res.data.result._id )
        }).catch((e) => {
            console.log(e)
        })

      
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Login</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='d-flex justify-content-center gap-3 mb-2'>

                            <div className="form-check ">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="radio1" value="option1" onClick={() => SetParam('Doctor')} />
                                <label className="form-check-label" htmlFor="radio1">
                                    Doctor
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="radio2" value="option2" onClick={() => SetParam('Patient')} />
                                <label className="form-check-label" htmlFor="radio2">
                                    Patient
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
