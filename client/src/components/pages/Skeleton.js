import React, { useEffect, useState, Component } from "react";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "./Calendar.js"

import NavBar from "../modules/NavBar.js";
import "../../utilities.css";
import "./Skeleton.css";
import "./pages.css";
import { get } from "../../utilities";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "48664241058-q3dvrh1u5u8276n9h8iio1evghqf88ob.apps.googleusercontent.com";

const Skeleton = ({ userId}) => {

  const [events, setEvents] = useState("event")
  const [forum, setForum] = useState("forum")
  const [messages, setMessages] = useState("messages")

    useEffect(() => {
        get(`/api/get_events`, { }).then((userObj) => setEvents(userObj));
      }, []);

    useEffect(() => {
        get(`/api/stories`, { }).then((userObj) => setForum(userObj));
      }, []);

    useEffect(() => {
        get(`/api/chat`, { }).then((userObj) => setMessages(userObj));
      }, []);
 
  return (
     <div className="bigContainer">
      {userId ?  
      
      <div className="HomeContainer">
        <div className="messagesColumn">
          <Link to="/messages/" className="Title">
              Messages
          </Link>
          <div>
            {messages[messages.length-1].content}  @IZZY — EDIT THIS LINE!!   
          </div>
        </div>
        <div className="forumColumn">
          <Link to="/forum/" className="Title">
                Forum
            </Link>
          <div>
            {forum[forum.length-1].content}  @IZZY — EDIT THIS LINE!!   
          </div>
        </div>
        <div className="eventsColumn">
          <Link to="/calendar/" className="Title">
                Events
          </Link>
          <div>
            {events[0].title}  @IZZY — EDIT THIS LINE!! 
          </div>
          <div className="recommendationsColumn"> 
            <Link to="/findgroup/" className="Title">
                  Recommendations
            </Link>
          </div>
        </div>
    </div>: 
    (<>
    <div className="forumColumn">
          <div className="Title">Forum</div>
        </div>
    </>)}
     </div>
  );
};

export default Skeleton;



