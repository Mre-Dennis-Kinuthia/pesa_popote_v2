import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="howitworks" smooth={true} duration={500}>How it works</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
        </li>
        <li>
          <Link to="login" smooth={true} duration={500}>Login</Link>
        </li>
        <li>
          <Link to="register" smooth={true} duration={500}>Join Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
