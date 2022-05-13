import React from 'react'
import './footer.css'
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { BsArrowUpCircle } from 'react-icons/bs'
import { Zoom } from 'react-reveal'

const Footer = () => {
  return (
    <div className='ft'>

      <Zoom>
      <div className='ft_box'>
        <div className='ft_container'>
          <div className='ft_texts'>
            <h2>CAFFÈ VIOLA</h2>
            <p>A108 Adam Street</p>
            <p>NY 535022, USA</p>
            <h4>+444 444444 4444</h4>
            <h5>Email: info@email.com</h5>

            <div className='ft_socials'>
              <a href='#home'><FaTwitter /></a>
              <a href='#home'><FaFacebook /></a>
              <a href='#home'><FaInstagramSquare /></a>
              <a href='#home'><FaLinkedin /></a>
            </div>
          </div>

          <div className='ft_links'>
          <h3>Useful Links</h3>
            <ul>
              <li><p>Home</p></li>
              <li><p>About Us</p></li>
              <li><p>Services</p></li>
              <li><p>Terms of service</p></li>
              <li> <p>Privacy Policy</p></li>
            </ul>    
          </div>

          <div className='ft_services'>
            <h3>Our Services</h3>
            <ul>
              <li><p>Web Design</p></li>
              <li><p>Web Development</p></li>
              <li><p>Product Management</p></li>
              <li><p>Marketing</p></li>
              <li><p>Graphic Design</p></li>
            </ul>  
          </div>

          <div className='ft_newsletter'>
            <h3>Our NewsLetter</h3>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
        </div>
      </div>

      <div className='ft_copyright'>
        <div className='ft_ctexts'>
          <p>© Copyright Restaurantly. All Rights Reserved</p>
        </div>
        <div className='up_icon'>
          <a href='#home' id='home'><BsArrowUpCircle /></a>
        </div>

      </div>
    </Zoom>
    </div>
  )
}

export default Footer