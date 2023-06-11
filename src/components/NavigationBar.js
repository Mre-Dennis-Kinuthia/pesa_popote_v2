import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import './style.css'

export default class NavigationBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">

  <div className="nav-items">
    <div>
  <button className="nav-item"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
  >
    Home
  </button>
</div>
<div>
  <button className="nav-item"
    onClick={() => {
      const aboutSection = document.getElementById("About Us");
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  >
    About Us
  </button>
</div>
<div>
  <button className="nav-item"
    onClick={() => {
      const howItWorksSection = document.getElementById("How It Works");
      howItWorksSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  >
    How It Works
  </button>
  </div>
  <div>
    <button className="nav-item"
      onClick={() => {
        const contactUsSection = document.getElementById("Contact Us");
        contactUsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
      });
    }}
  >
    Contact Us
  </button>
    </div>
    <button onClick={this.props.toggleLoginPage}>Login</button>
        <button onClick={this.props.toggleRegisterPage}>Register</button>
      </div>
        
      </div>
    </nav>
    );
  }
}
/*
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
*/
