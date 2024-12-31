import axios from 'axios'
import React, { useEffect } from 'react'

const Slots = () => {
    useEffect(() => {
        axios.get("http://localhost:8000/Slot/availableSlot", {
            id: sessionStorage.getItem("doctor_id")
        }).then((res) => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })

    })
    return (
        <>
            {/* create slot component to list all available slot */}
        </>
    )
}

export default Slots
