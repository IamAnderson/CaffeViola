import React from 'react'
import { Fade } from 'react-reveal'
import './reservation.css'

const Reservation = () => {
  return (
    <div className='rv' id='reservation'>
      <div className='rv_container'>
        <Fade bottom>
        <div className='rv_texts'>
          <h3>Reservation -------------</h3>
          <h1>Book a Table</h1>
        </div>
        </Fade>   

        <Fade bottom>
        <div className='rv_inputbox'>
          <div className='rv_input1spot'>
            <input className='rv_input1' type='text' placeholder='Your Name' />
            <input className='rv_input1' type='text' placeholder='Email' />
            <input className='rv_input1' type='text' placeholder='Phone Number' />  
            <input className='rv_input1' type='text' placeholder='Time' />
            <input className='rv_input1' type='text' placeholder='Date' />
            <input className='rv_input1' type='text' placeholder='No.of People' />
          </div>

          <div className='rv_input2spot'>
            <input className='rv_input2' type='text' placeholder='Message' />
          </div>
        </div>

        <div className='rv_btn'>
          <a href='#home'>Book a Table</a>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Reservation