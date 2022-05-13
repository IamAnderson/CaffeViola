import React from 'react'
import { Fade, Zoom } from 'react-reveal'
import './chefs.css'
import { chefs01, chefs02, chefs03 } from './chefsImages'
import ChefsImg from './ChefsImg'

const Chefs = () => {
  return (
    <div className='ch' id='chefs'>
      <div className='ch_container'>
        <Fade bottom><div className='ch_texts'>
          <h3>CHEFS -------------</h3>
          <h2>Our Professional Chefs</h2>
        </div></Fade>

        <div className='ch_images'>
        <Fade bottom>
          <div className='ch_imgspot'>
          <Zoom>
            <ChefsImg chImg={chefs01}/>
          </Zoom>

          <Zoom>
            <ChefsImg chImg={chefs02}/>
          </Zoom>

          <Zoom>
            <ChefsImg chImg={chefs03}/>
          </Zoom>

          </div>
        </Fade>
        
        </div>
      </div>
    </div>
  )
}

export default Chefs