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
import { FaGithub, FaLink } from "react-icons/fa";
import Expensify from './Expensify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolio from './Portfolio';
import DailyScribe from './DailyScribe';
import FrontendProjects from './FrontendProjects';
import FullStackProjects from './FullStackProjects';
import BillSplitter from './BillSplitter';
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
          <p onClick={() => navigation("/")}>Home</p>
          <div className="dropdown">
            <p className="dropbtn">Projects</p>
            <div className="dropdown-content">
              <p onClick={() => navigation("/frontend")}>Frontend</p>
              <p onClick={() => navigation("/fullstack")}>Full Stack</p>

            </div>
          </div>
          <Button
            variant="success"
            onClick={() => window.open("https://visualresumearnavk2025.vercel.app/", "_blank")}
            className='github-btn'
          >
            <FaLink size={20} className='btn-icons' /> Portfolio
          </Button>
          <Button
            variant="dark"
            onClick={() => window.open("https://github.com/arnavkatyayan", "_blank")}
            className='github-btn'
          >
            <FaGithub size={20} className='btn-icons' /> GitHub
          </Button>
        </div>

      </div>
      <div className='body-page'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fullstack/expensify" element={<Expensify />} />
          <Route path="/frontend/portfolio" element={<Portfolio />} />
          <Route path="/fullstack/dailyscribe" element={<DailyScribe />} />
          <Route path="/frontend" element={<FrontendProjects />} />
          <Route path="/fullstack" element={<FullStackProjects />} />
          <Route path="/frontend/billSplitter" element={<BillSplitter />} />
        </Routes>
      </div>
      <div className='footer flex justify-center items-center flex-col gap-0.5'>
        <p className='font-bold'>Version: 1.0.0</p>
        <p className='font-medium'>© 2026 ProjectPedia. All rights reserved.</p>
      </div>
    </Router>
  )
}

export default App
