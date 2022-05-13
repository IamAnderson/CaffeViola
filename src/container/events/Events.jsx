import React from 'react'
import { useState } from 'react'
import Eventcontent from './Eventcontent'
import { EventData } from './eventdata' 
import './events.css'
import { BsCircle } from 'react-icons/bs'
import { Fade } from 'react-reveal'

const Events = ({ slides }) => {

const [current, setCurrent] = useState(0);
const length = slides.length

const prevBtn = () => {
  setCurrent(current === 0 ? length - 1 : length - 1);
};
  
const middleBtn = () => {
  setCurrent(current === current -  1 ? 0  : 0);
};
  
const nextBtn = () => {
  setCurrent(current === 0 ? current + 1 : current);
};

  return (
    <div className='ev' id='events'>
      <div className='ev_container'>
        <Fade bottom>
        <div className='ev_texts'>
          <h3>EVENTS</h3>
          <h2>Organize Your Events in our Restaurant</h2>
        </div>
        </Fade>

      <Fade bottom>
        <div className='ev_content'>
          {EventData.map((slide, index) => {
                return(
                  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<Eventcontent evcImg={slide.evcImg} title={slide.title} price={slide.price} textsP={slide.textsP} textsh4={slide.textsh4} textsP1={slide.textsP1}/>)}
                  </div>
                )
            })}
        </div>
      </Fade>

      <Fade bottom>
        <div className='evc_icon'>
              <div className='prevbtn' onClick={prevBtn}>
                  <BsCircle />
              </div>

              <div  className='middlebtn' onClick={middleBtn}>        
                  <BsCircle />
              </div>

              <div className='nextbtn' onClick={nextBtn}>
                  <BsCircle />
              </div>
        </div>
      </Fade>
      </div>
    </div>
  )
}

export default Events