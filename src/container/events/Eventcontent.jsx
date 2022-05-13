import React from 'react'
import './eventcontent.css'

const Eventcontent = ({ evcImg, title, price, textsP, textsh4, textsP1 }) => {

  return (
    <div className='evc'>
        <div className='evc_container'>
            <div className='evc_img'>
                <img src={evcImg} alt= 'event' />
            </div>

            <div className='evc_texts'>
                <h3> {title} </h3>
                <h2> {price} </h2>
                <p> {textsP} </p>
                <h4> {textsh4} </h4>
                <h5> {textsP1} </h5>
            </div>
        </div>

    </div>
  )
}

export default Eventcontent