import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios
            .get('http://localhost:8000/register/ALLDoctors')
            .then((res) => {
                setData(res.data); 
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!data.length) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            {data.map((doctor, index) => (
                <DoctorCard
                    key={index}
                    doctorName={doctor.name}
                    speciality={doctor.specialty}
                    workingHours={doctor.WorkingHrs}
                />
            ))}
        </>
    );
};

export default Home;
