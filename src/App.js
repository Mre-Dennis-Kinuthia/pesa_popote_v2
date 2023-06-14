import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state to check if user is logged in

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LandingPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
