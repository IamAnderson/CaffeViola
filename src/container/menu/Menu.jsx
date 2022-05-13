import React from 'react'
import { Fade, Slide } from 'react-reveal'
import './menu.css'
import { breadbarrel, caesar, cake, greeksalad, lobsterbisque, lobsterroll, mozzarella, spinachsalad, tuscangrilled } from './menuimg'
import Menulist from './Menulist'

const Menu = () => {
  return (
    <div className='mn' id='menu'>
      <div className='mn_container'>
      <Fade bottom>  
        <div className='mn_texts'>
            <h3>Menu ---------</h3>
            <h2>Check Our Tasty Menu</h2>
          </div>
      </Fade>

      <Slide bottom>
          <div className='mn_selector'>
            <li><p>All</p></li>
            <li><p>Starters</p></li>
            <li><p>Salad</p></li>
            <li><p>Specialty</p></li>
          </div>
      </Slide>    

      <Fade bottom>  
          <div className='mn_content'>
            <Menulist imgUrl={lobsterbisque} food={'Lobster Bisque'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$5.95'}/>
            <Menulist imgUrl={breadbarrel} food={'Bread Barrel'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$6.95'}/>
            <Menulist imgUrl={cake} food={'Crab Cake'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$7.95'}/>
            <Menulist imgUrl={caesar} food={'Caesar Selection'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$8.95'}/>
            <Menulist imgUrl={tuscangrilled} food={'Tuscan Grilled'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$9.95'}/>
            <Menulist imgUrl={mozzarella} food={'Mozarella Sticks'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$4.95'}/>
            <Menulist imgUrl={greeksalad} food={'Greek Salad'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$9.95'}/>
            <Menulist imgUrl={spinachsalad} food={'Spinach Salad'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$6.95'}/>
            <Menulist imgUrl={lobsterroll} food={'Lobster Roll'} texts={'Lorem, deren, trataro, filede, nerada'} price={'$12.95'}/>
          </div>
      </Fade>        
        </div>
    </div>
  )
}

export default Menu