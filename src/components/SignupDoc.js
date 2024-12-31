import React, { useState } from 'react';
import axios from 'axios';

function SignupDoc() {
    const [doctorName, setDoctorName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [workingHours, setWorkingHours] = useState([{ DayofWeeks: "", startTime: "", endTime: "" }]);
    const [loading, setLoading] = useState(false);  // To track loading state

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(workingHours)
        setLoading(true);  // Set loading to true on form submit
        try {
            const response = await axios.post('http://localhost:8000/register/DoctorRegistration', {
                name: doctorName,
                email: email,
                specialty: speciality,
                WorkingHrs: workingHours,  // Make sure this is correctly structured
                password: password
            });
            // Assuming the response contains a success message
            console.log(response.data);
            sessionStorage.setItem("doctor_id", response.data.doctor._id)

            setLoading(false);  // Set loading to false after the request is completed
        } catch (err) {
            console.log(err);
            setLoading(false);  // Set loading to false in case of an error
        }
    };

    const handleWorkingHoursChange = (index, event) => {
        const newWorkingHours = [...workingHours];
        newWorkingHours[index][event.target.name] = event.target.value;
        setWorkingHours(newWorkingHours);
    };

    const handleAddWorkingHours = () => {
        setWorkingHours([...workingHours, { DayofWeeks: '', startTime: '', endTime: '' }]);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Doctor Signup</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="doctorName" className="form-label">Doctor Name</label>
                            <input
                                type="text"
                                id="doctorName"
                                className="form-control"
                                value={doctorName}
                                onChange={(e) => setDoctorName(e.target.value)}
                                required
                            />
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="speciality" className="form-label">Speciality</label>
                            <input
                                type="text"
                                id="speciality"
                                className="form-control"
                                value={speciality}
                                onChange={(e) => setSpeciality(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Working Hours</label>
                            {workingHours.map((item, index) => (
                                <div key={index} className="border p-3 mb-3">
                                    <div className="mb-3">
                                        <label htmlFor={`day-${index}`} className="form-label">Day of the Week</label>
                                        <input
                                            type="text"
                                            id={`day-${index}`}
                                            name="DayofWeeks"
                                            className="form-control"
                                            value={item.DayofWeeks}
                                            onChange={(e) => handleWorkingHoursChange(index, e)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor={`startTime-${index}`} className="form-label">Start Time</label>
                                        <input
                                            type="time"
                                            id={`startTime-${index}`}
                                            name="startTime"
                                            className="form-control"
                                            value={item.startTime}
                                            onChange={(e) => handleWorkingHoursChange(index, e)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor={`endTime-${index}`} className="form-label">End Time</label>
                                        <input
                                            type="time"
                                            id={`endTime-${index}`}
                                            name="endTime"
                                            className="form-control"
                                            value={item.endTime}
                                            onChange={(e) => handleWorkingHoursChange(index, e)}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
                            <button type="button" className="btn btn-secondary" onClick={handleAddWorkingHours}>
                                Add More Working Hours
                            </button>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-4" disabled={loading}>
                            {loading ? 'Signing Up...' : 'Signup'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupDoc;
