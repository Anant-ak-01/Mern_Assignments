import React from 'react'
import aboutImage from '../../assets/about.png'
const About = () => {
  return (
   <div className="about container d-flex justify-content-between">
  <div className="row">
    <div className="col-lg-6 col-12 container-fluid">
      <h1 className='fw-bold mb-4 mt-4'>About <span style={{color:"#8D72FF",borderBottom:'2px groove #8D72FF'}}>Me</span></h1>
      <p className='about-font'>

Hi, I'm Anant Kashyap, a passionate <span style={{fontStyle:'italic',color:'#8D72FF'}}>MERN Stack Developer</span> who enjoys building modern, responsive, and scalable web applications. I specialize in MongoDB, Express.js, React.js, and Node.js, creating seamless user experiences backed by efficient and reliable server-side solutions.
<br />
<br />
I love turning ideas into real-world digital products by writing clean, maintainable, and efficient code. Whether it's designing intuitive user interfaces, developing RESTful APIs, or optimizing application performance, I'm always focused on delivering high-quality solutions.
<br />
<br />
When I'm not coding, I enjoy learning about emerging technologies, working on personal projects, and taking on new challenges that help me expand my skills.
</p>
    </div>
    <div className="col-lg-6 col-12">
      <img src={aboutImage} alt=""  className='img-fluid' style={{minHeight:"10px"}}/>
    </div>
  </div>
  </div>
  )
}

export default About