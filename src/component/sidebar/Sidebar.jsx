import React from 'react'
import './sidebar.css'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const SbContainer = styled.div`
  display: none;

  @media screen  and (max-width: 990px) {
        display: flex;
        background: #fff;
        justify-content: center;
        z-index: 10;
        padding: 2rem;
        height: 100vh;
        width: 100%;
        position: fixed;
        bottom: ${({showMenu}) => (showMenu ? '0' : '-100%')};
        transition: bottom 0.3s ease-out;
  }
`

const Sidebar = ({toggleMenu, showMenu}) => {
  return (
    <div className='Sb'>

      <SbContainer showMenu={showMenu}>
      <div className='Sb_Menu'>
          <li><a href='#home' onClick={toggleMenu}>Home</a></li>
          <li><a href='#about' onClick={toggleMenu}>About</a></li>
          <li><a href='#menu' onClick={toggleMenu}>Menu</a></li>
          <li><a href='#specials' onClick={toggleMenu}>Specials</a></li>
          <li><a href='#events' onClick={toggleMenu}>Events</a></li>
          <li><a href='#chefs' onClick={toggleMenu}>Chefs</a></li>
          <li><a href='#gallery' onClick={toggleMenu}>Gallery</a></li>
          <li>Drop Down</li>
          <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        </div>

      <div className='IconClose'>
        <FaTimes onClick={toggleMenu}/>
      </div>
      </SbContainer>
    </div>
  )
}

export default Sidebar