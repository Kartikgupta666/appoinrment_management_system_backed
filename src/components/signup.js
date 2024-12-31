import axios from 'axios';
import React, { useState } from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Age:', age);
        console.log('Blood Group:', bloodGroup);

        await axios.post("http://localhost:8000/register/PatientRegistration", {
            name, age, email, password, bloodgroup: bloodGroup
        }).then((res) => {
            console.log(res.data.patient._id)
            sessionStorage.setItem("patient_id", res.data.patient._id)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Signup</h5>
                    <form onSubmit={handleSubmit}>
                        {/* Patient Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Patient Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email */}
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

                        {/* Password */}
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

                        {/* Age */}
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input
                                type="number"
                                id="age"
                                className="form-control"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>

                        {/* Blood Group */}
                        <div className="mb-3">
                            <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                            <select
                                id="bloodGroup"
                                className="form-select"
                                value={bloodGroup}
                                onChange={(e) => setBloodGroup(e.target.value)}
                                required
                            >
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
