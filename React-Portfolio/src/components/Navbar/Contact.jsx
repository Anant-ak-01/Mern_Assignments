import React from 'react'

const Contact = () => {
  return (
     <div className="about form container d-flex justify-content-between">
      <div className="row">
        <div className="col-lg-6 col-12 container-fluid">
          <h1 className='fw-bold mb-4 mt-4'>Get In <span style={{color:"#8D72FF",borderBottom:'2px groove #8D72FF'}}>Touch</span></h1>
          <p className='about-font'>
            I'm currently open to internships, freelance projects, and full-time opportunities. Whether you have a question, a project idea, or just want to connect, feel free to reach out. I'll do my best to respond as soon as possible!
    </p>
    <div className='d-flex flex-column about-details mt-5'>
            <p className=""><i className="fa fa-envelope-o fa-xl fs-3" style={{color:"#8D72FF"}}></i><a href="mailto:anantkashyap@gmail.com" className=' text-decoration-none fw-bold text-light'> Nonukashyap95@gmail.com</a></p>
            <p className=""><i className="fa fa-phone fa-xl fs-3" style={{color:"#8D72FF"}}></i><a href="tel:+918126310337" className=' text-decoration-none fw-bold text-light'> +91 8126310337</a></p>
            <p className=""><i className="fa fa-map-marker fa-xl fs-3" style={{color:"#8D72FF"}}></i><a href="" className=' text-decoration-none fw-bold text-light'> Meerut, UttarPradesh</a></p>
            </div>
        </div>
        <div className="col-lg-6 col-12 contact-form">
            <form action="https://formsubmit.co/c7e4ffb73ec082ee48aa439df5298728" method="post">
                <div className='d-flex gap-2 pt-5 ps-5 w-75 pb-3'>
              
                <input id="fname" type="text" className='form-control' placeholder='Your Name' name='name' />
                <input id="email" type="email" className='form-control' placeholder='Your Email' name='email' />
                </div>
                <div className='w-75 ps-5 pb-3 input-box'>
                    <input id="subject" type="text" className='form-control' placeholder='Subject' name='subject'/>
                </div>
                <div className='w-75 ps-5 pb-3 d-flex input-box'>
                    
                    <textarea name="" id="" className='form-control no-resize' placeholder='Your Message' rows="6" name="feedback"></textarea>
                </div>
                <div className='w-75 ps-5 pb-3 d-flex input-box'>
                <input type="submit" className='btn  w-100' value="Send Message" />
                </div>
            </form>
        </div>
      </div>
      </div>

)}

export default Contact
