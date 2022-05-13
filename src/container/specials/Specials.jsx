import React from 'react'
import { useState } from 'react'
import { Fade, Slide } from 'react-reveal'
import Specialmenu from './Specialmenu'
import './specials.css'
import { Specialsdata } from './Specialsdata'

const Specials = ({ slidess }) => {

  const [currentSp, setCurrentSp] = useState(0);
  const length = slidess.length;

  const firstSlide = () => {
    setCurrentSp(currentSp === 0 ? 0 : 0);
  };

  const secondSlide = () => {
    setCurrentSp(currentSp === 0 ? 1 : 1);
  }

  const thirdSlide = () => {
    setCurrentSp(currentSp === 0 ? 2 : 2);
  }

  const fourthSlide = () => {
    setCurrentSp(currentSp === 0 ? 3 : 3);
  }

  const fifthSlide = () => {
    setCurrentSp(currentSp === 0 ? 4 : 4);
  }

  return (
    <div className='sp' id='specials'>
      <div className='sp_container'>
      <Fade bottom>
        <div className='sp_texts'>
          <h3>Specials --------------</h3>
          <h1>Check Our Specials</h1>
        </div>
      </Fade>    


        <div className='sp_content'>
          <div className='sp_controllerbox'>
          <Slide bottom> 
            <div className='sp_controller'>
              <li><p onClick={firstSlide}>Modi sit est</p></li>
              <li><p onClick={secondSlide}>Unde praesentium sed</p></li>
              <li><p onClick={thirdSlide}>Nostrum qui quasi</p></li>
              <li><p onClick={fourthSlide}>Iusto ut expedita aut</p></li>
              <li><p onClick={fifthSlide}>Pariatur explicabo vel</p></li>
            </div>
          </Slide>
          </div>

      <Fade bottom>
          <div className='sp_article'>
              {Specialsdata.map((menu, index ) => {
                return (
                  <div className={index === currentSp ? 'slidee active' : 'slidee'} key={index}>
                    {index === currentSp && (<Specialmenu title={menu.title} textsH4={menu.textsh4} textsP={menu.textsP} imgUrl={menu.imgUrl} />)}
                  </div>
                )
              })}
              
          </div>
        </Fade>
        </div>

      </div>
    </div>
  )
}

export default Specials