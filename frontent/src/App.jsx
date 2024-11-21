import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import About from './pages/About';
import ProductionsProperties from './pages/ProductionsProperties';
import Contact from './pages/Contact';
import News from './pages/News';
import YouTubeNetwork from './pages/YouTubeNetwork';
import Monetization from './pages/Monetization';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/Monetization" exact element={<Monetization/>}/>
          <Route path="/Productions & Properties" exact element={<ProductionsProperties/>}/>
          <Route path="/YouTube Network" exact element={<YouTubeNetwork/>}/>
          <Route path="/News" exact element={<News/>}/>
          <Route path="/About" exact element={<About/>}/>
          <Route path="/Contact" exact element={<Contact/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
    
  )
}

export default App
