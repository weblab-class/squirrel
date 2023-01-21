import React from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
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
      <div className="HomeContainer">
          <div className="messagesColumn">
            {/* <div class="Title">Messages</div> */}
            <Link to="/messages/" className="Title">
                Messages
            </Link>
          </div>
          <div className="forumColumn">
            <div className="Title">Forum</div>
          </div>
          <div class="messagesColumn">
            <div class="eventsColumn">
              <Link to="/calendar/" className="Title">
                  Events
              </Link>
            </div>
            <div className="recommendationsColumn"> 
              <span className="Title">Connections</span>
            </div>
          </div>
      </div>

    </GoogleOAuthProvider>
  );
};

export default Skeleton;
