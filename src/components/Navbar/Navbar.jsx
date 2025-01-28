import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="navbar">
      <div className="navLogo">
        <span className="logo">AS</span>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navLinks">
        <div className="navLink" onClick={() => scrollToSection('about')}>
          <span className="navNumber">01.&nbsp;</span>
          <span className="navLinkName">About</span>
        </div>

        <div className="navLink" onClick={() => scrollToSection('experience')}>
          <span className="navNumber">02.&nbsp;</span>
          <span className="navLinkName">Experience</span>
        </div>

        <div className="navLink" onClick={() => scrollToSection('work')}>
          <span className="navNumber">03.&nbsp;</span>
          <span className="navLinkName">Work</span>
        </div>

        <div className="navLink" onClick={() => scrollToSection('contact')}>
          <span className="navNumber">04.&nbsp;</span>
          <span className="navLinkName">Contact</span>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="closeBtn" onClick={toggleSidebar}>
          &times;
        </div>
        <div className="sidebarLink" onClick={() => scrollToSection('about')}>
          <span className="navNumber">01.&nbsp;</span>
          <span className="navLinkName">About</span>
        </div>
        <div className="sidebarLink" onClick={() => scrollToSection('experience')}>
          <span className="navNumber">02.&nbsp;</span>
          <span className="navLinkName">Experience</span>
        </div>
        <div className="sidebarLink" onClick={() => scrollToSection('work')}>
          <span className="navNumber">03.&nbsp;</span>
          <span className="navLinkName">Work</span>
        </div>
        <div className="sidebarLink" onClick={() => scrollToSection('contact')}>
          <span className="navNumber">04.&nbsp;</span>
          <span className="navLinkName">Contact</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
