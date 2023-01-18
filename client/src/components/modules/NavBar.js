import React from "react";
import { Link } from "@reach/router";
import {FaCalendarAlt, FaEnvelope, FaBell} from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">TBD Logo</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Search Bar
        </Link>

        <Link to="/calendar/" className="NavBar-link">
          <FaCalendarAlt/> Calendar
        </Link>

        <Link to="/messages/" className="NavBar-link">
            <FaEnvelope/> Messages
        </Link>

        <Link to="/notifications/" className="NavBar-link">
            <FaBell/> Notifications
        </Link>

        <Link to="/profile/" className="NavBar-link">
            <BsPersonCircle /> Profile
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
