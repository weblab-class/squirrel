import React from "react";
import { Link } from "@reach/router";
import {FaCalendarAlt, FaEnvelope, FaBell} from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiSquirrel } from "react-icons/gi";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">
            <Link to ="/" className="NavBar-link">
                <GiSquirrel/> TBD Logo
            </Link>
        </div>

        <Navbar.Collapse className="NavBar-linkContainer u-inlineBlock right-align">
            <Link to="/calendar/" className="NavBar-link icons">
                <FaCalendarAlt/> Calendar
            </Link>

            <Link to="/messages/" className="NavBar-link icons">
                <FaEnvelope/> Messages
            </Link>

            <Link to="/notifications/" className="NavBar-link icons">
                <FaBell/> Notifications
            </Link>

            <Link to="/profile/" className="NavBar-link icons">
                <BsPersonCircle /> Profile
            </Link>
        </Navbar.Collapse>
    </nav>
  );
};

export default NavBar;
