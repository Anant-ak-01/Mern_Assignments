import React, { useEffect, useState } from 'react'

const Watch = () => {
    const [time,setTime] = useState(0);
    const [isRunning , setIsRunning] = useState(false)
    const [laps,setLaps] = useState([]);
    useEffect(()=>{
        let timer;
        if(isRunning){
        timer = setInterval(()=>{
            setTime((prev)=> prev+10)
        },10)
        }
        else{
            clearInterval(timer)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[isRunning])

    const formatTime = (time) =>{
        const minutes = String(Math.floor(time/60000)).padStart(2,'0')
        const seconds = String(Math.floor(time%60000/1000)).padStart(2,'0')
        const centisec = String(Math.floor(time%1000/10)).padStart(2,'0')
        return `${minutes}:${seconds}:${centisec}`
    }
    const handleLap = () =>{
        if(isRunning){
            setLaps((prev)=>[...prev,time]);
        }
    };
  return (<>
    <div className='d-flex justify-content-center align-items-center min-vw-100' style={{height:"400px"}}>
    <div className=' text-center mb-3 bg-dark-subtle bg-opacity-10 rounded rounded-3 p-5'>
        <h1 className=' fw-bold fst-italic pb-5 text-black' style={{fontSize:"40px"}}>Stopwatch</h1>
        <div className='m-3 fw-bold fs-5 text-center bg-black rounded-5 h-50'>
            {
                formatTime(time)
            }
        </div>
        <div className='d-flex gap-2 pt-5'>
             <button className="btn btn-danger" onClick={()=>{setIsRunning(true)}}><i className='fa fa-play'></i> Start</button>
             <button className="btn btn-primary" onClick={()=>{setIsRunning(false)}}><i className='fa fa-stop '></i> Stop</button>
             <button className="btn btn-outline-dark" onClick={handleLap}><i className='fa fa-flag-o'></i> Lap</button>
             <button className="btn btn-success" onClick={()=>{setIsRunning(false);setTime(0);setLaps([])}}><i className='fa fa-undo'></i> Reset</button>
        </div>
    </div>
    </div>
    <div className='mt-auto'>
        {laps.map((val,index)=>{
            return <div className='text-start fst-italic fw-bold' key={index}>
                    <h1>Lap {index+1} : {formatTime(val)}</h1>               
                 </div>
        })}
    </div>
  </>)
}

export default Watch
