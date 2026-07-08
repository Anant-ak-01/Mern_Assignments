import React from 'react'

const Skillsdata = (props) => {
  return (
<div className="card bg-transparent skill-card" style={{width: "16rem"}}>
  <img src={props.image} className="card-img-top mx-auto mt-4"  alt="..." style={{width: "90px",height: "90px",objectFit: "contain"}}/>
  <div className="card-body">
    <p className="card-text text-center fs-5 fw-bold">{props.title}</p>
  </div>
</div>

)
}

export default Skillsdata
