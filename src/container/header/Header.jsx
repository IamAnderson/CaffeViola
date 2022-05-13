import React from 'react'
import './header.css'
import { BsPlayCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-reveal'

const Header = () => {
  return (
    <div className='header' id='home'>
    <Zoom>  
      <div className='header_container'>
      <div className='header_h1'> 
        <h1>Welcome to </h1>  
        <h1>Caffè Viola</h1>
      </div>  
        <p>Delivering great food for more than 18 years!</p>

        <div className='header_btn'>
          <li><a href='#menu'>OUR MENU</a></li>
          <li><a href='#reservation'>BOOK A RESERVATION</a></li>
        </div>
      </div>

      <div className='header_play'>
        <Link to='/Video' className='header_icon'> <BsPlayCircleFill /> </Link>
      </div>
      </Zoom>  
    </div>
  )
}

export default Header