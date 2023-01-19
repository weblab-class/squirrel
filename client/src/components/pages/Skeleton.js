import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "FILL ME IN";

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
      <div class="row">
          <div class="column">Messages</div>
          <div class="column">Forum</div>
          <div class="column">Events</div>
      </div>
      <a href="https://docs.google.com/document/d/110JdHAn3Wnp3_AyQLkqH2W8h5oby7OVsYIeHYSiUzRs/edit?usp=sharing">
        Check out this getting started guide
      </a>
    </GoogleOAuthProvider>
  );
};

export default Skeleton;
