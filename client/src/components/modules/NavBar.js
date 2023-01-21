import React from "react";
import { Link } from "@reach/router";
import {FaCalendarAlt, FaEnvelope, FaBell} from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiSquirrel } from "react-icons/gi";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./NavBar.css";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";


 const GOOGLE_CLIENT_ID="48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";
const NavBar = ({userId, handleLogin, handleLogout}) => {
  return (
    <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">
            <Link to ="/" className="NavBar-link">
                <GiSquirrel/> TBD Logo
            </Link>
        </div>

        <div className="NavBar-linkContainer u-inlineBlock right-align">
            <Link to="/calendar/" className="NavBar-link icons">
                <FaCalendarAlt/> Calendar
            </Link>

            <Link to="/messages/" className="NavBar-link icons">
                <FaEnvelope/> Messages
            </Link>

            <Link to="/notifications/" className="NavBar-link icons">
                <FaBell/> Notifications
            </Link>

            {userId ? (
                 <Link to={`/profile/`} className="NavBar-link icons">
                
                    <BsPersonCircle /> Profile
                        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                        <button
                            onClick={() => {
                            googleLogout();
                            handleLogout();
                        }}>
                            Logout
                        </button>
                    </GoogleOAuthProvider>
                </Link>

            ): (
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={handleLogin}
                onError={(err) => console.log(err)}
                className="NavBar-link NavBar-login"
            />
            </GoogleOAuthProvider>
            )}
            
        </div>

        
    </nav>
    );
};

export default NavBar;


//TODOOOO profile/${userID} for apis???



{/* <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    {userId ? (
        <button
        onClick={() => {
        googleLogout();
        handleLogout();
        }}>
            Logout
        </button>
    ) : (
    <GoogleLogin
        onSuccess={handleLogin}
        onError={(err) => console.log(err)}
        className="NavBar-link NavBar-login"
    />
    )}
</GoogleOAuthProvider>
    */}
