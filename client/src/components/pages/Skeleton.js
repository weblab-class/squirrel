import React from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "FILL ME IN";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <NavBar/>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}   
      <div class="HomeContainer">
          <div class="messagesColumn">
            <Link to="/messages/" className="Title">
                Messages
            </Link>
          </div>
          <div class="forumColumn">
            <Link to="/forum/" className="Title">
                  Forum
            </Link>
          </div>
          <div class="messagesColumn">
            <div class="eventsColumn">
              <Link to="/calendar/" className="Title">
                  Events
              </Link>
            </div>
            <div class="recommendationsColumn"> 
              <div class="Title">Connections</div>
            </div>
          </div>
      </div>

    </GoogleOAuthProvider>
  );
};

export default Skeleton;
