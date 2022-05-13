import React from 'react'
import './testimonialscontent.css'

const TestimonialsContent = ( {texts, tncImg, nAme, title } ) => {
  return (
    <div className='tnc'>
        <div className='tnc_containerbox'>
           <div className='tnc_container'>
           <div className='tnc_texts'>
                <p> {texts} </p>
            </div>
           </div>

           <div className='tnc_imgbox'>
                <div className='tnc_img'>
                    <img src={tncImg} alt='testimonials' />
                </div>
                <div className='tnc_imgtexts'>
                    <h4> {nAme} </h4>
                    <p> {title} </p>
                </div>   
            </div>



            <div className='tnc_container'>
           <div className='tnc_texts'>
                <p> {texts} </p>
            </div>
            </div>

           <div className='tnc_imgbox'>
                <div className='tnc_img'>
                    <img src={tncImg} alt='testimonials' />
                </div>
                <div className='tnc_imgtexts'>
                    <h4> {nAme} </h4>
                    <p> {title} </p>
                </div>   
            </div>



            <div className='tnc_container'>
                <div className='tnc_texts'>
                    <p> {texts} </p>
                </div>
           </div>

           <div className='tnc_imgbox'>
                <div className='tnc_img'>
                    <img src={tncImg} alt='testimonials' />
                </div>
            <div className='tnc_imgtexts'>
                <h4> {nAme} </h4>
                <p> {title} </p>
            </div>

            </div>
        </div>
        
    </div>
  )
}

export default TestimonialsContent