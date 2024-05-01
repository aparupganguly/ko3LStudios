import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Styles/navbar.css";
import logo from "../res/logo.png";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <img className="logo" src={logo} alt="ko3LStudios" />

      <div className="navLinks">
        <Link style={{textDecoration:"none", color :"#1E1E1E" }} to="/works">
          <p>works</p>
        </Link>
        <Link to="/expertise" style={{textDecoration:"none", color :"#1E1E1E" }}>
        <p>expertise</p>
        </Link>
        <Link to="/about" style={{textDecoration:"none", color :"#1E1E1E" }}>
        <p>about</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
