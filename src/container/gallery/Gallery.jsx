import React from 'react'
import './gallery.css'
import GalleryImg from './GalleryImg'
import { gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08 } from './galleryImages'
import { motion } from 'framer-motion'
import { Zoom, Fade } from 'react-reveal'

const Gallery = () => {
  return (
    <div className='gl' id='gallery'>
      <div className='gl_container'>
        <Fade bottom><div className='gl_texts'>
          <h3>GALLERY -------------</h3>
          <h1>Some photos from Our Restaurant</h1>
        </div>
        </Fade>

        <Fade bottom>
        <div className='gl_section'>
          <div className='gl_images'>
            <Zoom>
              <GalleryImg glImg={gallery01}/>
            </Zoom>
            
            <Zoom>
              <GalleryImg glImg={gallery02}/>
            </Zoom>
            
            <Zoom>
              <GalleryImg glImg={gallery03}/>
            </Zoom>
            
            <Zoom>
              <GalleryImg glImg={gallery04}/>
            </Zoom>
                        
            <Zoom>
              <GalleryImg glImg={gallery05}/>
            </Zoom>
            
            <Zoom>
              <GalleryImg glImg={gallery06}/>
            </Zoom>
            
            <Zoom>
              <GalleryImg glImg={gallery07}/>
            </Zoom>
            
            <Zoom>
              <GalleryImg glImg={gallery08}/>
            </Zoom>
            
          </div>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery