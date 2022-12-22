import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/home" className={(navData) => navData.isActive && ""}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      {!showNavbar && (
        <CgMenuRight onClick={showNavbarHandler} className="menu-icon" />
      )}
      {showNavbar && (
        <AiOutlineClose onClick={hideNavbarHandler} className="menu-icon" />
      )}
      <ul className={toggleStyles}>
        <li>
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? "active" : "")}
            onClick={hideNavbarHandler}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-me"
            className={(navData) => (navData.isActive ? "active" : "")}
            onClick={hideNavbarHandler}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-work"
            className={(navData) => (navData.isActive ? "active" : "")}
            onClick={hideNavbarHandler}
          >
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-me"
            className={(navData) => (navData.isActive ? "active" : "")}
            onClick={hideNavbarHandler}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
