import React from 'react'
import './chefsimg.css'

const ChefsImg = ({ chImg }) => {
  return (
    <div className='ci'>
        <div className='ci_container'>
            <img src={chImg} alt='chefs' />
        </div>
    </div>
  )
}

export default ChefsImg