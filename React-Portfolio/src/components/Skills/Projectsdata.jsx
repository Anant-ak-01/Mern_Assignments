import React from 'react'
import { Link } from 'react-router'

const Projectsdata = (props) => {
  return (
    <div className='hello-flex'>
     <div className="card h-100 pro-image" style={{width: "16rem"}}>
  <img src={props.image} className="card-img-top" alt="..." />
  <div className=" project card-body d-flex flex-column">
    <h5 className="card-title text-light fw-bold fs-4">{props.title}</h5>
    <p className="card-text flex-grow-1">{props.description}</p>
    <a href={props.path} className="btn btn-outline-light w-100 mt-auto" target='_blank'>View Project </a>
  </div>
</div>
    </div>
  )
}

export default Projectsdata