import React, { useState } from "react";

import "./Navbar.css";
import logo from "../../assets/logo.png";

import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar(true);
  };

  const hideNavbarHandler = () => {
    setShowNavbar(false);
  };

  let toggleStyles = showNavbar ? "" : "hide-nav";

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      {!showNavbar && (
        <div className="menu-icon">
          <CgMenuRight size="4rem" onClick={showNavbarHandler} />
        </div>
      )}
      {showNavbar && (
        <div className="menu-icon">
          <AiOutlineClose size="4rem" onClick={hideNavbarHandler} />
        </div>
      )}
      <ul className={toggleStyles}>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about-me">About Me</a>
        </li>
        <li>
          <a href="about-me">My Work</a>
        </li>
        <li>
          <a href="contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
