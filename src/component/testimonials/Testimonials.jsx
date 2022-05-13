import React from 'react'
import { useState } from 'react'
import './testimonials.css'
import TestimonialsContent from './testimonialsContent'
import { TestimonialsData } from './testimonialsData'
import { BsCircle } from 'react-icons/bs'
import { Fade, Zoom } from 'react-reveal'

const Testimonials = ({ slidde }) => {
const [current, setCurrent] = useState(0);
const length =  slidde.length;

const firstbtn = () => {
  setCurrent(current === 0 ? 1 : 1)
}


const secondbtn = () => {
  setCurrent(current === 0 ? 2 : 2)
}


const thirdbtn = () => {
  setCurrent(current === 0 ? 3 : 3)
}


const fourthbtn = () => {
  setCurrent(current === 0 ? 4 : 4)
}

  return (
    <div className='tn'>
      <div className='tn_container'>
      <Fade bottom>
        <div className="tn_texts">
          <h3>TESTIMONIALS ---------</h3>
          <h2>What they're saying about us</h2>
        </div>
      </Fade>

      <Zoom>
        <div className='tn_content'>
          {TestimonialsData.map(( review, index ) => {
            return(
              <div className={index === current ? 'slidde active' : 'slidde'} key={index}>
                {index === current && (<TestimonialsContent texts={review.texts} tncImg={review.tncImg} nAme={review.nAme} title={review.title}/>)}
              </div>
            )
          })}
        </div>
      </Zoom>

      <Fade bottom>
        <div className='tn_icons'>
                <div className='firstbtn' onClick={firstbtn}>
                    <BsCircle />
                </div>

                <div  className='secondbtn' onClick={secondbtn}>        
                    <BsCircle />
                </div>

                <div className='thirdbtn' onClick={thirdbtn}>
                    <BsCircle />
                </div>

                <div className='fourthbtn' onClick={fourthbtn}>
                    <BsCircle />
                </div>
            </div>
        </Fade>
      </div>
    </div>  
  )
}

export default Testimonials