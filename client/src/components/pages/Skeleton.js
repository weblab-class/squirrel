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
        get(`/api/get_events`, { }).then((userObj) => {
          let str = "";
          let max_val = userObj.length > 10 ? 10 : userObj.length;
          for(let i = 0; i < max_val; i++) {
            str += `${userObj[i].start}: ${userObj[i].title} \n`;
          }
          console.log(str);
          setEvents(str);
        });
      }, []);

    useEffect(() => {
        get(`/api/stories`, { }).then((userObj) => {
          let str = "";
          let max_val = userObj.length > 10 ? 10 : userObj.length;
          for (let i = userObj.length-1; i > userObj.length-1-max_val; i--) {
            if (userObj[i].content.length > 20) { 
              i--;
            } else {
              str += `${userObj[i].content} \n`;
            }
          }
          console.log(str);
          setForum(str);
        });

      }, []);

    useEffect(() => {
        get(`/api/chat`, { }).then((userObj) => {
          let str = "";
          let max_val = userObj.length > 10 ? 10 : userObj.length;
          for(let i = userObj.length-1; i > userObj.length-1-max_val; i--) {
            if (userObj[i].content.length > 20) { 
              i--;
            } else {
              str += `${userObj[i].content} \n`; 
            }
          }
          console.log(str);
          setMessages(str);
        });
      }, []);
 
  return (
     <div className="bigContainer">
      {userId ?  
      
      <div className="HomeContainer">
        <div className="messagesColumn">
          <Link to="/messages/" className="Title">
              Messages
          </Link>
            <div className="lines2"/>
          <div>
            {messages.split("\n").map(function(item) {
              return (
                <span>
                  {item}
                  <br/>
                </span>
              )
            })}
          </div>
        </div>
        <div className="forumColumn">
          <Link to="/forum/" className="Title">
                Forum
            </Link>
            <div className="lines2"/>
          <div>
            {forum.split("\n").map(function(item) {
              return (
                <span>
                  {item}
                  <br/>
                </span>
              )
            })} 
          </div>
        </div>
        <div className="eventsColumn">
          <div className="actualEventsColumn">
            <Link to="/calendar/" className="Title">
                  Events
            </Link>
            <div className="lines2"/>
            <div>
              {/* {events[0].title}  @IZZY — EDIT THIS LINE!!  */}
              {events.split("\n").map(function(item) {
                return (
                  <span>
                    {item}
                    <br/>
                  </span>
                )
              })}
          </div>
          </div>
          <div className="recommendationsColumn"> 
            <Link to="/findgroup/" className="Title">
                  Recommendations
            </Link>
            <div className="lines2"/>
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



