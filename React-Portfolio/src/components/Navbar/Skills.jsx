import React from 'react'
import Skillsdata from '../Skills/Skillsdata'
import RestApi from '../../assets/apilogo.png'
import Express from '../../assets/expressjs.png'
import VsCode from '../../assets/vscode.png'

const Skills = () => {
  const data = [
        {
            title:"Front",
            title1:"end",
            items:[
              {
              logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              skill:"HTML"
            },
              {
                logo:"https://cdn-icons-png.flaticon.com/512/732/732190.png",
                skill:"CSS"
              },
              {
                logo:"https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
                skill:"JavaScript"
              },
              {
                logo:"https://icon.icepanel.io/Technology/svg/React.svg",
                skill:"React"
              }
            ]
          },
           {
            title:"Back",
            title1:"end",
            items:[
              {
                logo:"https://icon.icepanel.io/Technology/svg/MongoDB.svg",
                skill:"MongoDB"
              },
              {
                logo:Express,
                skill:"Express.js"
              },
              {
              logo:"https://icon.icepanel.io/Technology/svg/Node.js.svg",
              skill:"Node.js"
            },
              {
                logo:RestApi,
                skill:"Rest API's"
              }
            ]
          },
           {
            title:"To",
            title1:"ols",
            items:[
              {
              logo:"https://cdn-icons-png.flaticon.com/512/1051/1051275.png ",
              skill:"Github"
            },
              {
                logo:VsCode,
                skill:"Visual Studio Code"
              }
            ]
          }
    ]
return(

<div className="main-card">
   <h1 className='fw-bold mb-4 mt-5 ms-lg-5'>Technical <span style={{color:"#8D72FF",borderBottom:'2px groove #8D72FF'}}>Skills</span></h1>
   {
    data.map((section,index)=>{
      return (
      <div key={index}>  <h2 className='fw-bold mb-5  mt-5 text-center '>{section.title} 
      <span style={{color:"#8D72FF",borderBottom:'2px groove #8D72FF'}}>{section.title1}</span>
      </h2>
      <div className='cards d-flex justify-content-center align-items-center'>
    {section.items.map((val,i)=>{
      return (<div key={i}> 
      <Skillsdata image={val.logo} title={val.skill} />
      </div>)

    })
   }
   
</div>
  </div>

   )})}
  
  </div>
    )

}

export default Skills
