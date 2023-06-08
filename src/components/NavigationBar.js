import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Join Us</NavLink>
        </li>
        <li>
          <NavLink to="/howitworks">How it works</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
