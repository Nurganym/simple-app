import React from 'react'
import Header from './components/Header'
import About from './components/About'
import News from './components/News'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
