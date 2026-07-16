import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
   const [task,setTask] = useState({
        taskName : ""
    }) 
    const navigate = useNavigate("")
    
    const {id} = useParams()

    const getTaskById = async () =>{
      let resp = await axios.get("http://localhost:3000/todos/"+id)
      resp = resp.data;
      setTask(resp)
    }
    useEffect(()=>{
      getTaskById();
    },[])

    const updateData = async () =>{
      await axios.put("http://localhost:3000/todos/"+id,task).then(()=>{
        alert("Task Updated")
        navigate("/dashboard")
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      updateData();

    }
  return (
     <div className="container my-4">
        <h1 className='text-center fst-italic fw-bold mb-4'>Add Task Here</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-5 d-flex gap-2">
                <input type="text" className='form-control' value={task.taskName} onChange={(e)=>{
                    setTask({taskName:e.target.value})
                }} />
                <input type="submit" value="Update" className='btn btn-outline-light' />
            </div>
        </form>
    </div>
  )
}

export default Edit
