import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Add = () => {
    const [task,setTask] = useState({
        taskName : ""
    }) 
    const navigate = useNavigate("")
    const savedData = async () => {
        await axios.post("http://localhost:3000/todos",task).then(()=>{
            alert("Data Saved")
            navigate("/dashboard")
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         savedData();
    }
  return (<>
    <div className="container my-4">
        <h1 className='text-center fst-italic fw-bold mb-4'>Add Task Here</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-5 d-flex gap-2">
                <input type="text" className='form-control' onChange={(e)=>{
                    setTask({taskName:e.target.value})
                }} />
                <input type="submit" value="Add" className='btn btn-outline-light' />
            </div>
        </form>
    </div>
  </>)
}

export default Add
