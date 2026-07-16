import React, { useState } from 'react'

const SearchBox = ({onSearch}) => {
    const [city,setCity] = useState("");

const handleSearch = () =>{
    if(city.trim()===""){
        return;
    }
    onSearch(city);
}
  return (
   <div className="d-flex gap-2 justify-content-between align-items-center">
     <h1 className='text-danger'>Weather Forecast</h1>
    <div className='d-flex'>
    <input type="text" placeholder="Enter City name.."  value={city} className="form-control w-auto"
    onChange={(e)=>{
        setCity(e.target.value)
    }}
    />
   <button className='btn btn-outline-light' onClick={handleSearch}>Search</button>
   </div>
   </div>
  )
}

export default SearchBox
