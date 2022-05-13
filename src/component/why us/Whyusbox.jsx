import React from 'react'
import './whyusbox.css'

const Whyusbox = ({Numberr, Title, Texts}) => {
  return (
    <div className='wub'>
        <div className='wub_container'>

            <h1 className='wub_number'>
                {Numberr}
            </h1>

            <h2 className='wub_title'>
                {Title}
            </h2>

            <p className='wub_texts'>
                {Texts}
            </p>

        </div>
    </div>
  )
}

export default Whyusbox