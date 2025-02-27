import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Scroll from './scripts/Scroll';

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/enterprise-portal' : '/'}>
      <Scroll />
      <Routes>
        <Route path='/enterprise-portal/' element={<Login />} /> 
        <Route path='/enterprise-portal/register' element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;
