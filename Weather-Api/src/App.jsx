import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';

const App = () => {
//  http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f1adc16e861120b4187205db100b478a
const [weather,setWeather] = useState(null);
const [forecast,setForecast] = useState([]);
const apiKey = "f1adc16e861120b4187205db100b478a"

const fetchWeather = async (city) =>{
  try{
     let resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      resp = await resp.data;
      const today = resp.list[0]
      console.log(today)
    setWeather({
      city: resp.city.name,
      temp: today.main.temp,
      description: today.weather[0].description,
      humidity: today.main.humidity,
      wind: today.wind.speed,
    })
      
    const daily = resp.list
    .filter((item)=> item.dt_txt.includes("12:00:00"))
    .map((day)=>({
      date: new Date(day.dt_txt).toLocaleDateString("en-US",{
        weekday:"short",
      }),
      temp: Math.round(day.main.temp),
      desc: day.weather[0].description,
      icon: day.weather[0].icon,
    }))
    setForecast(daily);
  }
  catch(error){
    console.log(error);
    alert("City Not Found")
  }
};
  return (
    <div className="container" style={{height:"800px"}}>
        <SearchBox  onSearch={fetchWeather}/>
    <div className='d-flex justify-content-center align-items-center' style={{height:"600px"}}>
    <WeatherCard weather={weather}/>
    </div>
    </div>
  )
}

export default App
