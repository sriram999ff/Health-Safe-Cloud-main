import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Dashboard/Landing';
import Login from './Dashboard/Login';
import Register from './Dashboard/Register';
import Admin from './admin/Admin';
import Hospital from './Hospital/Hospital';
import Patient from './Patient/Patient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/hospital/*" element={<Hospital />} />
        <Route path="/patient/*" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default App;