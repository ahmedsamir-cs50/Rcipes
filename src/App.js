import React from 'react'



// import { Footer } from './Component/Utility/Footer'
import "./index.css"

import Home from './Components/Home.js/Home'
import NavBar from './Components/Nav/Nav'
import { Footer } from './Components/Footer/Footer'

export const App = () => {
  
  return (
    <>
    <NavBar/>
   <Home/>
   <Footer/>
   </>
  
 
  )
}
