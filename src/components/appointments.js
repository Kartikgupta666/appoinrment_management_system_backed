import React, { useEffect, useState } from 'react'
import AppoinmentCard from './AppoinmentCard'
import axios from 'axios'

const Appointments = () => {
    const [data, Setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/appointment/allappointments", {
            id: sessionStorage.getItem("Patient_id")
        }).then((res) => {
            Setdata(res.data)
        }).catch(e => {
            console.log(e)
        })
        console.log(data)

    }, [])
    if (!data.length) {
        return <div className='text-center'>No Appointment found</div>;
    }
    return (
        <>
            <h1 className='text-center'>Appointments</h1>
            {!data ?
                (<>
                    <div className='text-center'>No Appointment found</div>
                    <button className='btn btn-primary'>Create Appointment</button>
                </>
                )
                : data.map((data, index) => (<AppoinmentCard key={index} />))
            }
        </>
    )
}

export default Appointments
