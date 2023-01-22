import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js"


import "./Messages.css";

const Messages = (props) => {
    const [stories, setStories] = useState([]);

    // useEffect(() => {
    //   document.title = "Message Page";
    //   get("/api/messages").then((messageObjs) => {
    //   });
    // }, []);

    return(
        <>
            <div class="container">
                <div class="Messages-title">
                    <h1>Group Messages</h1>
                </div>

                <div class="lines">
                    <div class="diamond"></div>
                </div>

            </div>
        </>
    )

}

export default Messages;