import React from "react";
import { Link } from "@reach/router";
import {FaCalendarAlt, FaEnvelope, FaBell} from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiSquirrel } from "react-icons/gi";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {MdForum} from "react-icons/md"; 
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "./NavBar.css";

const GOOGLE_CLIENT_ID="48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";
const NavBar = ({userId, handleLogin, handleLogout}) => {
  return (
    <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">
            <Link to ="/" className="NavBar-link">
                <GiSquirrel/> TBD Logo
            </Link>
        </div>
        
        <div className="NavBar-linkContainer">
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
            
        </div>

        
    </nav>
    );
};

export default NavBar;


// const NavBar = () => {
//   return (
//     <nav className="NavBar-container">
//         <div className="NavBar-title u-inlineBlock">
//             <Link to ="/" className="NavBar-link">
//                 <GiSquirrel/> TBD Logo
//             </Link>
//         </div>

//         <Navbar.Collapse className="NavBar-linkContainer">
//             <Link to="/calendar/" className="NavBar-link icons">
//                 <FaCalendarAlt/> Calendar
//             </Link>

//             <Link to="/messages/" className="NavBar-link icons">
//                 <FaEnvelope/> Messages
//             </Link>

//             <Link to="/forum/" className="NavBar-link icons">
//                 <MdForum/> Forum
//             </Link>

//             <Link to="/profile/" className="NavBar-link icons">
//                 <BsPersonCircle /> Profile
//             </Link>
//         </Navbar.Collapse>

        
//     </nav>
//   );
// };

// export default NavBar;
