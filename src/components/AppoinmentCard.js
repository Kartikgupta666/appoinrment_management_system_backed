import React from 'react'

const AppoinmentCard = (props) => {
  return (
    <div>
          <div class="container mt-5">
              <div class="card" style={{width: "18rem;"}}>
                  <div class="card-body">
                      <h5 class="card-title">Doctor : {props.doctorname}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Slot Time: {props.time}</h6>
                      <p class="card-text">Status: <span class="badge bg-success">{props.status}</span></p>
                      <a href="#" class="card-link">View</a>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default AppoinmentCard
