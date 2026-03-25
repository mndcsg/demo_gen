// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 导入所有页面
import Home from './pages/Home';
import Team from './pages/Team';
import Technology from './pages/Technology';
import PersonalLoan from './pages/PersonalLoan';
import Responsibility from './pages/Responsibility';
import Knowledge from './pages/Knowledge';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BusinessLoan from './pages/BusinessLoan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/responsibility" element={<Responsibility />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;