import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <ScrollLink to="/" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="howitworks" smooth={true} duration={500}>How it works</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
