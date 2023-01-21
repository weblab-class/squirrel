import React from "react";
import { Link } from "@reach/router";
import {FaCalendarAlt, FaEnvelope, FaBell} from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiSquirrel } from "react-icons/gi";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {MdForum} from "react-icons/md"; 
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "./NavBar.css";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

<<<<<<< HEAD

 const GOOGLE_CLIENT_ID="48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";
=======
const GOOGLE_CLIENT_ID="48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";
>>>>>>> 9ceba4eeea92a331a57cd3547f4f76cd3088ef0b
const NavBar = ({userId, handleLogin, handleLogout}) => {
  return (
    <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">
            <Link to ="/" className="NavBar-link">
                <GiSquirrel/> TBD Logo
            </Link>
        </div>

<<<<<<< HEAD
        <span className="NavBar-linkContainer right-align">
=======
        <div className="NavBar-linkContainer">
>>>>>>> 9ceba4eeea92a331a57cd3547f4f76cd3088ef0b
            <Link to="/calendar/" className="NavBar-link icons">
                <FaCalendarAlt/> Calendar
            </Link>

            <Link to="/messages/" className="NavBar-link icons">
                <FaEnvelope/> Messages
            </Link>

            <Link to="/forum/" className="NavBar-link icons">
                <MdForum/> Forum
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
            
<<<<<<< HEAD
        </span>
=======
        </div>
>>>>>>> 9ceba4eeea92a331a57cd3547f4f76cd3088ef0b

        
    </nav>
    );
};

<<<<<<< HEAD
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
=======
export default NavBar;
>>>>>>> 9ceba4eeea92a331a57cd3547f4f76cd3088ef0b
