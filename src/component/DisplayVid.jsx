import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import vid from '../assets/vid.mkv'
import { FaBars } from 'react-icons/fa'
import { HashLoader } from 'react-spinners'



const DisplayVidContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    width: 100vw;
    height: 100vh;
    position: relative;
`

const BackIcon = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 5%;
    left: 5%;
`

const DisplayVid = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  return (
    <>
        {loading
          ?
          <div className='load' style={{backgroundColor: '#ffffff61'}}>
            <HashLoader color={'#cda45e'} loading={loading} size={100} />
          </div>
          :
          <>
            <NavLink to='Video'>
            <DisplayVidContainer>
              <ReactPlayer url={vid} controls />
            </DisplayVidContainer>

            <BackIcon to='/'>
              <FaBars />
            </BackIcon>

            </NavLink>
          </>
        }
    </>
  )
}

export default DisplayVid