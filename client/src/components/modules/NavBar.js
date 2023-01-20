import React from "react";
import { Link } from "@reach/router";
import {FaCalendarAlt, FaEnvelope, FaBell} from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiSquirrel } from "react-icons/gi";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./NavBar.css";
 const GOOGLE_CLIENT_ID="48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">
            <Link to ="/" className="NavBar-link">
                <GiSquirrel/> TBD Logo
            </Link>
            {props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
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
