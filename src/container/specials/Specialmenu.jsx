import React from 'react'
import './specialmenu.css'

const Specialmenu = ({ title, textsH4, textsP, imgUrl }) => {
  return (
    <div className='spm'>
        <div className='spm_container'>
          <div className='spm_texts'>
            <h2>
              {title}
            </h2>

            <h4>
                {textsH4}
            </h4>
            <h5>
                {textsP}
            </h5>
          </div>

          <div className='spm_image'>
            <img src={imgUrl} alt='specials' />
          </div>
        </div>
    </div>
  )
}

export default Specialmenu