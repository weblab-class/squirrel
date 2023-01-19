import React, { useState, useEffect } from "react";

const Messages = (props) => {
    const [stories, setStories] = useState([]);

    // useEffect(() => {
    //   document.title = "Message Page";
    //   get("/api/messages").then((messageObjs) => {
    //   });
    // }, []);

    return(
        <>
            <h1>Messages</h1>
            <h2>Groups</h2>
        </>
    )

}

export default Messages;