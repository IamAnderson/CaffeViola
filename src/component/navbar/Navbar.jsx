import React from 'react'
import './navbar.css'
import { RiMenu4Line } from 'react-icons/ri'

const Navbar = ({toggleMenu}) => {
  return (
    <div className='Nb'>
      <div className='Nb_Container'>
        <div className='Nb_Logo'>
          <h1>caffè viola</h1>
        </div>

        <div className='Nb_Menu'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#menu'>Menu</a></li>
          <li><a href='#specials'>Specials</a></li>
          <li><a href='#events'>Events</a></li>
          <li><a href='#chefs'>Chefs</a></li>
          <li><a href='#gallery'>Gallery</a></li>
          <li>Drop Down</li>
          <li><a href='#contact'>Contact</a></li>
        </div>

        <div className='Nb_Menu-btn'>
          <a href='#reservation'>BOOK A TABLE</a>
        </div>

      </div>
      <div className='IconOpen' onClick={toggleMenu}>
        <RiMenu4Line />
      </div>
    </div>
  )
}

export default Navbar