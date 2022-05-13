import React from 'react'
import './menulist.css'

const Menulist = ({imgUrl, food, texts, price}) => {
  return (
    <div className='mnl'>
      <div className='mnl_container'>
        <div className='mnl_img'>
            <img src={imgUrl} alt='menu' />
        </div>

        <div className='mnl_texts'>
          <a href='#home'>{food}</a>
          <p>{texts}</p>
        </div>

        <div className='mnl_price'>
          <h4>{price}</h4>
        </div>
      </div>  
    </div>
  )
}

export default Menulist