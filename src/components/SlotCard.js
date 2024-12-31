import React from 'react';


const SlotDisplay = ({ startTime, endTime, doctorName, status }) => {
    const statusClasses = {
        booked: 'badge bg-danger',
        available: 'badge bg-success',
        pending: 'badge bg-warning text-dark',
    };

    return (
        <div className="card shadow-sm mb-3">
            <div className="card-header bg-primary text-white text-center">
                <h5 className="card-title mb-0">Slot Information</h5>
            </div>
            <div className="card-body">
                <p className="mb-2"><strong>Doctor:</strong> {doctorName}</p>
                <p className="mb-2"><strong>Start Time:</strong> {startTime}</p>
                <p className="mb-2"><strong>End Time:</strong> {endTime}</p>
                <p className="mb-0">
                    <strong>Status:</strong>
                    <span className={`ms-2 ${statusClasses[status.toLowerCase()] || 'badge bg-secondary'}`}>
                        {status}
                    </span>
                </p>
            </div>
        </div>
    );
};


export default SlotDisplay;
