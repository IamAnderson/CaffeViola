import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import DisplayVid from './component/DisplayVid'


const App = () => {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } exact/>
          <Route path='/Video' element={ <DisplayVid /> } exact/>
        </Routes>
      </Router>
    </>
  )
}

export default App