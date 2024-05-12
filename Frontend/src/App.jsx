import React from 'react'
import { Navbar } from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import Home from './home/Home'
import Course from './components/Course'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
        <>
    
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/course" element ={<Courses/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      
    
      </Routes>
       
        </>
  )
}

export default App