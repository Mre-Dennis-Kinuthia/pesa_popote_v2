import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ContactUsPage from './pages/ContactUsPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/howitworks" elemet={<HowItWorksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
