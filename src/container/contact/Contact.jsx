import React from 'react'
import { Fade } from 'react-reveal'
import './contact.css'

const Contact = () => {
  return (
    <div className='ct' id='contact'>
      <div className='ct_container'>

      <Fade bottom>
        <div className='ct_texts'>
          <h3>Contact -----------</h3>
          <h1>Contact Us</h1>
        </div>
      </Fade>

        <div className='ct_details'>

        <Fade bottom>
          <div className='ct_details-spot'>
            <div className='ct_details-texts'>
              <h3>Location:</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>

            <div className='ct_details-texts'>
              <h3>Open Hour:</h3>
              <p>Monday-Saturday:</p>
              <h4>11:00 AM - 2300 PM</h4>
            </div>

            <div className='ct_details-texts'>
              <h3>Email:</h3>
              <p>info@email.com</p>
            </div>

            <div className='ct_details-texts'>
              <h3>Call:</h3>
              <p>+ 444 44444 44444</p>
            </div>
          </div>  
        </Fade>

      <Fade bottom cascade>
        <div className='ct_input'>
          <div className='ct_input-container'>

            <div className='ct_input1'>
              <input type='text' placeholder='Your Name' />
              <input type='text' placeholder='Your Email' />
            </div>

            <div className='ct_input2'>
              <input type='text' placeholder='Subject' />
            </div>

            <div className='ct_input3'>
              <input type='text' placeholder='Message' />
            </div>

            <div className='ct_btn'>
              <a href='#home'>Submit</a>
            </div>
          </div>
        </div>
      </Fade>

        </div>

      </div>
    </div>
  )
}

export default Contact