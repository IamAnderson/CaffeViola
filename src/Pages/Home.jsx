import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import '../index.css'
import { Navbar, Reservation, Sidebar, Testimonials, Topper, Whyus } from '../component'
import { About, Chefs, Contact, Events, Footer, Gallery, Header, Menu, Specials } from '../container'
import { EventData } from '../container/events/eventdata'
import { Specialsdata } from '../container/specials/Specialsdata'
import { TestimonialsData } from '../component/testimonials/testimonialsData'
import HashLoader from "react-spinners/HashLoader";




const Home = () => {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu)
    };

    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }, [])
    
    const data = (
              <div className='hero__bg'>
              <Topper />
              <Sidebar showMenu={showMenu} toggleMenu={toggleMenu}/>
              <Navbar toggleMenu={toggleMenu}/>
              <Header /> 
          
              <div className='about__bg'>
                <About />
              </div>

              <div>
                <Whyus />
                <Menu />
                <Specials slidess={Specialsdata}/>
              </div>

              <div className='event__bg'>
                <Events slides={EventData}/>
              </div>

              <div>
                <Reservation />
                <Testimonials slidde={TestimonialsData}/>
                <Gallery />
                <Chefs />
                <Contact />
                <Footer />
              </div>

              </div>
    )
    
  return (
    <>
      { loading ? 
                <>
                  <div className='load'>
                     <HashLoader color={'#cda45e'} loading={loading} size={100} />
                  </div>
                  { data }
                </>  
                : 
                <>
                  {data}
                </>
    }
    </>
  )
}

export default Home