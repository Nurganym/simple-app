import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import News from './components/News';
import Login from './components/Login';
import Profile from './components/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />} />
      <Route path='/news' element={<News />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
