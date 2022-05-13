import React from 'react'
import './galleryimg.css'
import styled from 'styled-components'

const GlIContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #625b4b;
    width: 17rem;

    &>img{
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    &:hover{
      transform: scale(105%);
      transition: all 0.3s ease;
    }

    @media screen and (max-width: 835px){
      width: 15rem;
    }

    @media screen and (max-width: 500px){
      width: 13rem;
    }

    @media screen and (max-width: 450px){
      width: 21rem;
    }

    @media screen and (max-width: 370px){
      width: 19rem;
    }

    @media screen and (max-width: 340px){
      width: 16rem;
    }
`

const GalleryImg = ({ glImg }) => {



  return (
    <div className='glI'>
        <GlIContainer>
            <img src={glImg} alt='gallery' />
        </GlIContainer>
    </div>
  )
}

export default GalleryImg