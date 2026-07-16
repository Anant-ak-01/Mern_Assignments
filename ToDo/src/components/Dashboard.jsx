import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Add from './Add'

const Dashboard = () => {
    const [todo,setTodo] = useState([])
    

    const getAllTodos = async () =>{
         let resp = await axios.get("http://localhost:3000/todos")
        resp = await resp.data;
        console.log(resp);
        setTodo(resp)
    }
    const deleteData = async (id) =>{
        if(confirm("Are you Sure")){
            await axios.delete("http://localhost:3000/todos/"+id).then(()=>{
                alert("Data Deleted")
                getAllTodos();
            }).catch(() =>{
                console.log("Something Went Wrong!!")
            })
        }
    }
    useEffect(()=>{
        getAllTodos();
    },[])
    
  return (<>
    <Add />
    <div className="container mt-4">
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Task Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todo.map((val,index)=>{
                        return <tr key={index}>
                                    <td>{index + 1 }</td>
                                    <td>{val.taskName}</td>
                                    <td className='d-flex gap-3 justify-content-center align-items-center'>
                                        <Link className='btn btn-warning' to={`/edit/${val.id}`}>Edit</Link>
                                        <button className='btn btn-danger' onClick={()=>{
                                            deleteData(val.id)
                                        }}>Delete</button>
                                    </td>
                    </tr>
                        })
                     }
            </tbody>
        </table>
    </div>
  </>)
}

export default Dashboard
