import React from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";

const Skeleton = ({ userId }) => {
  return (

    //<div className="center block">
     <div>
      {userId ?  <div className="HomeContainer">
        <div className="messagesColumn">
          {/* <div class="Title">Messages</div> */}
          <Link to="/messages/" className="Title">
              Messages
          </Link>
        </div>
        <div className="forumColumn">
          <div className="Title">Forum</div>
        </div>
        <div className="messagesColumn">
          <div className="eventsColumn">
            <div className="Title">Events</div>
          </div>
          <div className="recommendationsColumn"> 
            <span className="Title">Connections</span>
          </div>
        </div>
    </div>: (<>
    {/* ADD FORUM PAGE!! */}
    
    </>)}
     </div>
  );
};

export default Skeleton;
