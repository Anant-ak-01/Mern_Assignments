import React, { useEffect, useState } from 'react'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import sunWithCloud from '../assets/sun-with-cloud.png'
import rain from '../assets/rain.png'
import summer from '../assets/summer.png'
import winter from '../assets/winter.png'

const WeatherCard = ({weather}) => {
  const [date] = useState(new Date());
  const [weatherImage,setWeatherImage] = useState(sunWithCloud)
  useEffect(()=>{
    if(!weather){
      return;
    }
    const desc = weather.description.toLowerCase();
    if(desc.includes("rain")){
      setWeatherImage(rain)
    }
    else if(desc.includes("snow")){
      setWeatherImage(winter)
    }
    else if(desc.includes("clear")){
      setWeatherImage(summer)
    }
    else if(desc.includes("cloud")){
      setWeatherImage(sunWithCloud)
    } 
    else{
      setWeatherImage(sunWithCloud)
    }
  },[weather]);

  const formatedTime = date.toLocaleTimeString("en-Us",{
    hour:"2-digit",
    minutes : "2-digit",
    hour12:true
  });
  if(!weather){
    return null;
  }
  return (
    <div className='text-center border-dark border-5 '>
      <h2 className='text-capitalize'>{weather.city}</h2>
      <h2 className=''>{date.toLocaleDateString("en-Us",{
        weekday:"long",
      })}{" "} {formatedTime}</h2>

      <div className="d-flex justify-content-center">
        <img src={weatherImage} alt="" />
      </div>
      <h1 className='text-danger'>{weather.temp} °C</h1>
      <h1 className='fst-italic'>{weather.description}</h1>
      <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
        <div className='d-flex align-items-center justify-content-center gap-3 border-1 border rounded-4 p-2'>
          <div className='w-10'>
            <img src={humidity} alt="" className='img-fluid' style={{height:"50px"}} />
          </div>
          <div>
            <p>Humidity</p>
            <p>{weather.humidity}%</p>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-3 border-1 border rounded-4 p-2'>
          <div className='w-10'>
            <img src={wind} alt="" className='img-fluid' style={{height:"50px"}} />
          </div>
          <div>
            <p>wind</p>
            <p>{weather.wind}m/s</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
