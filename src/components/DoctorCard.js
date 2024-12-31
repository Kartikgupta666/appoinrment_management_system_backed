import React from 'react';

function DoctorCard({ doctorName, speciality, workingHours }) {
    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{doctorName}</h5>
                    <p className="card-text"><strong>Speciality:</strong> {speciality}</p>

                    <div className="working-hours">
                        <h6>Working Hours:</h6>
                        {workingHours.length > 0 ? (
                            <ul className="list-unstyled">
                                {workingHours.map((item, index) => (
                                    <li key={index}>{item.startTime} - {item.endTime}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No working hours available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;
