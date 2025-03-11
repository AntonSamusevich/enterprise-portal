import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Education from './pages/Education';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import Scroll from './scripts/Scroll';

function App() {
  return (
    <Router basename='/enterprise-portal'>
      <Scroll />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
