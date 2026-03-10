import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/Logo.jpg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
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
import FlexBoard from './FlexBoard';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Switch from 'react-switch';
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);
  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
    if (path === "/") {
      setIsHomeClicked(true);
      setIsProjectsClicked(false);
    } else if (path === "/frontend" || path === "/fullstack") {
      setIsHomeClicked(false);
      setIsProjectsClicked(true);
    }
  }
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className={`w-full shadow-md py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center z-50 transition-colors duration-300 gap-4 md:gap-0 ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
        <div className='flex items-center gap-3 md:gap-4 flex-wrap justify-center'>
          <img src={Logo} alt="Projectpedia Logo" className='w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer transition-transform hover:scale-105 shadow-sm' onClick={() => navigation("/")} />
          <h1 className='text-2xl md:text-3xl font-bold cursor-pointer m-0' onClick={() => navigation("/")}>ProjectPedia</h1>
          <div className="flex items-center gap-2 ml-2 mt-2">
            <Switch checked={theme === "dark"} onChange={toggleTheme} label="Toggle Theme" className='cursor-pointer' />
            <p className="font-bold m-0 flex items-center">
              {theme === "dark" ? (
                <i className="fa-solid fa-moon text-2xl text-yellow-300 cursor-pointer" onClick={toggleTheme}></i>
              ) : (
                <i className="fa-solid fa-sun text-2xl text-orange-400 cursor-pointer" onClick={toggleTheme}></i>
              )}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4 md:gap-6 flex-wrap justify-center font-semibold'>
          <p onClick={() => navigation("/")} className={`cursor-pointer m-0 transition-colors ${isHomeClicked ? "text-blue-500" : (theme === "dark" ? "text-white" : "text-gray-600")} hover:text-blue-400`}>Home</p>
          <div className="relative group">
            <p className={`cursor-pointer py-2 m-0 transition-colors ${isProjectsClicked ? "text-blue-500" : (theme === "dark" ? "text-white" : "text-gray-600")} hover:text-blue-400`}>Projects</p>
            <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 pt-1 z-50">
              <div className="bg-white shadow-xl rounded-lg py-2 min-w-[200px] border border-gray-100">
                <p className="cursor-pointer hover:bg-gray-100 text-gray-800 px-4 py-2 m-0 transition-colors" onClick={() => navigation("/frontend")}>Frontend Projects</p>
                <p className="cursor-pointer hover:bg-gray-100 text-gray-800 px-4 py-2 m-0 transition-colors" onClick={() => navigation("/fullstack")}>Full Stack Projects</p>
              </div>
            </div>
          </div>
          <p
            onClick={() => window.open("https://visualresumearnavk2025.vercel.app/", "_blank")}
            className='flex items-center justify-center gap-2 rounded-full mt-3 px-6 min-w-[130px] shadow-sm cursor-pointer border-2 hover:border-2 hover:border-blue-500'
          >
            <FaLink size={16} /> <span className="hidden sm:inline">Portfolio</span>
          </p>
          <p
            onClick={() => window.open("https://github.com/arnavkatyayan", "_blank")}
            className='flex items-center justify-center gap-2 rounded-full mt-3 px-6 min-w-[130px] shadow-sm cursor-pointer border-2 hover:border-2 hover:border-blue-500'
          >
            <FaGithub size={16} /> <span className="hidden sm:inline">GitHub</span>
          </p>
        </div>
      </div>
      <div className={`flex-grow w-full flex flex-col p-4 md:p-8 transition-colors duration-300 ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fullstack/expensify" element={<Expensify />} />
          <Route path="/frontend/portfolio" element={<Portfolio />} />
          <Route path="/fullstack/dailyscribe" element={<DailyScribe />} />
          <Route path="/frontend" element={<FrontendProjects />} />
          <Route path="/fullstack" element={<FullStackProjects />} />
          <Route path="/frontend/billSplitter" element={<BillSplitter />} />
          <Route path="/fullstack/flexboard" element={<FlexBoard />} />
        </Routes>
      </div>
      <div className={`w-full py-4 md:py-6 shadow-inner flex justify-center items-center flex-col gap-1 transition-colors duration-300 ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
        <p className='font-bold m-0 text-sm'>Version: 1.0.0</p>
        <p className='font-medium m-0 text-xs sm:text-sm text-center'>© 2026 ProjectPedia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
