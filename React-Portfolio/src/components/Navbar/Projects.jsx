import React from 'react'
import Projectsdata from '../Skills/Projectsdata'
import img2 from '../../assets/project2.png'
import img3 from '../../assets/project3.png'
import img4 from '../../assets/ToDo.png'
import img5 from '../../assets/Weather_api.png'
import img6 from '../../assets/StopWatch.png'
import img7 from '../../assets/login-form.png'
import JobCard from '../../assets/JobCard.png'

const Projects = () => {
  const data=[
    {
      image:img2,
      title:"Art Gallery",
      description:"Creative art gallery design demonstrating advanced CSS Grid positioning, image scaling effects, and responsive styling.",
      path:"../Projects/project-2/index.html"
    },
    {
      image:img3,
      title:"Digital Agency Landing Page",
      description:"Professional homepage design showcasing responsive navigation, engaging visuals, and a compelling hero section.",
      path:"../Projects/project-3/index.html"
    },
    {
      image:img4,
      title:"Todo Manager",
      description:"Responsive task management website demonstrating CRUD operations, React Hooks, Axios API integration, and React Router.",
      path:"https://harmonious-panda-6ea437.netlify.app"
    },
    {
      image:img5,
      title:"Weather Website",
      description:"Real-time weather website with city search and OpenWeather API integration.",
      path:"https://adorable-starship-e1e5b8.netlify.app"
    },
    {
      image:JobCard,
      title:"Job Portal UI",
      description:"Browse the latest job openings from top companies and find the perfect role for your career.",
      path:"https://golden-licorice-50ebcd.netlify.app"
    },
    {
      image:img6,
      title:"Digital Stopwatch",
      description:"Responsive stopwatch website featuring start, stop, reset, and lap functionality with React Hooks.",
      path:"https://vermillion-vacherin-c55b90.netlify.app"
    },
    {
      image:img7,
      title:"Login & Registration",
      description:"React-based authentication system using Local Storage for user registration and login.",
      path:"https://user-login-registration.netlify.app"
    }
  ]
  return (<>
  <h1 className='fw-bold mb-4 mt-4 head'>Pro<span style={{color:"#8D72FF",borderBottom:'2px groove #8D72FF'}}>jects</span></h1>
 
    <div className="pro mb-5">
      {
        data.map((val,index)=>{
          return(
            <Projectsdata key={index} image={val.image} title={val.title} description={val.description} path={val.path}/>
        )})
      }
     
    </div>
   </>)
}

export default Projects