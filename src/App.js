import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <About/>
      
      <Blog/>
      <Contact/>
      <Footer/>   
    </div>
  )
}

export default App
