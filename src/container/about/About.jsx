import React from 'react'
import './about.css'
import ABout from '../../assets/about.jpg'
import { Fade } from 'react-reveal'

const About = () => {
  return (
    <div className='ab'>
      <div className='ab_container' id='about'>
      <Fade  bottom cascade>
        <div className='ab_texts'>
          <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
          </h3>
          <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          
          <ul>
            <li><p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p></li>

            <li><p>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p></li>

            <li><p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
            </p></li>

            <h4>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </h4>
          </ul>
            
        </div>
      </Fade>

      <Fade  bottom cascade>
        <div className='ab_image'>
          <div className='ab_image-spot'>
            <img src={ABout} alt= 'About' />
          </div>
        </div>
      </Fade>  
        
      </div>
    </div>
  )
}

export default About