import React from 'react'
import { Fade, Zoom } from 'react-reveal'
import './whyus.css'
import Whyusbox from './Whyusbox'

const Whyus = () => {
  return (
    <div className='wu'>
      <div className='wu_container'>
      <Fade bottom cascade>
        <div className='wu_texts'>
          <h3>Why Us ---------</h3>
          <h2>Why Choose Our Resturant</h2>
        </div>
      </Fade>

        <div className='wu_cards'>
          <Zoom>
            <Whyusbox Numberr='01' Title='Lorem Ipsum' Texts='Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat' />
            <Whyusbox Numberr='02' Title='Repellat Nihil' Texts='Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest'/>
            <Whyusbox Numberr='03' Title='Ad ad velit qui' Texts='Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis vitae sunt debitis quo vel nam quis'/>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default Whyus