import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/Logo.jpg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './assets/github.png'
function App() {
  
  const navigation = (path) => {  
    window.location.href = path;
  }
  return (
    <Router>
    <div className='header'>
      <div className='flex'>
        <img src={Logo} alt="Projectpedia Logo" className='logo' />
        <h1 className='title'>ProjectPedia</h1>
      </div>
      <div className='flex nav justify-center items-center gap-5'>
          <p onClick={()=>navigation("/")}>Home</p>
        <div className="dropdown">
          <p className="dropbtn">Projects</p>
          <div className="dropdown-content">
            <p onClick={()=>navigation("/frontend")}>Frontend</p>
            <p onClick={()=>navigation("/fullstack")}>Full Stack</p>
          </div>
        </div>
          <p onClick={()=>navigation("/resume")}>Resume</p>
          {/* <img src={Github} alt="GitHub Logo" className='github-logo' /> */}
          <Button
            variant="dark"
            onClick={() => window.open("https://github.com/arnavkatyayan", "_blank")}
            className='github-btn'
          >
            GitHub
          </Button>          </div>
        
        </div>
        <div className='body'>
        <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/frontend" element={<Frontend />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      </div>
      <div className ='footer flex justify-center items-center flex-col gap-0.5'>
        <p className='font-bold'>Version: 1.0.0</p>
        <p className='font-medium'>© 2026 ProjectPedia. All rights reserved.</p>
      </div> 
    </Router>
  )
}

export default App
