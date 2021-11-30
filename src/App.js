import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Discover from './components/Discover';
import Places from './components/Places';

const App = () => {
  return (
    <>
    <Navbar />
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/places" element={<Places />} />
        
      </Routes>
    
    
    </>
  )
}

export default App
