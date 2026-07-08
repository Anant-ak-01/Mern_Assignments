import React from 'react'
import Projectsdata from '../Skills/Projectsdata'

const Projects = () => {
  const data=[
    {
      image:"../src/assets/Project-1.png",
      title:"Portfolio Website",
      description:"Personal portfolio showcasing projects and skills.",
      path:"../src/Projects/project-1/index.html"
    },
    {
      image:"../src/assets/Project-2.png",
      title:"Art Gallery",
      description:"Creative art gallery design demonstrating advanced CSS Grid positioning, image scaling effects, and responsive styling.",
      path:"../src/Projects/project-2/index.html"
    },
    {
      image:"../src/assets/Project-3.png",
      title:"Digital Agency Landing Page",
      description:"Professional homepage design showcasing responsive navigation, engaging visuals, and a compelling hero section.",
      path:"../src/Projects/project-3/index.html"
    }
  ]
  return (<>
  <h1 className='fw-bold mb-4 mt-4 ms-5'>Pro<span style={{color:"#8D72FF",borderBottom:'2px groove #8D72FF'}}>jects</span></h1>
 
    <div className="pro">
      {
        data.map((val,index)=>{
          return(
            <Projectsdata image={val.image} title={val.title} description={val.description} path={val.path}/>
        )})
      }
     
    </div>
   </>)
}

export default Projects