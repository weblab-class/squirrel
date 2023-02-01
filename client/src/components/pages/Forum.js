import React, { useEffect, useState } from "react";
import ChatList from "../modules/ChatList.js";
import Chat from "../modules/Chat.js";
import Dropdown from "../modules/Dropdown.js";
import { socket } from "../../client-socket.js";
import { get } from "../../utilities";

import "./Forum.css";

const ALL_CHAT = {
  _id: "ALL_CHAT",
  name: "ALL CHAT",
};

/**
 * Page component to display when at the "/chat" route
 *
 * Proptypes
 * @param {string} userId id of current logged in user
 */
const Forum = (props) => {
  /**
   * @typedef UserObject
   * @property {string} _id
   * @property {string} name
   */
  /**
   * @typedef MessageObject
   * @property {UserObject} sender
   * @property {string} content
   */
  /**
   * @typedef ChatData
   * @property {MessageObject[]} messages
   * @property {UserObject} recipient
   */

  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState("options");

  const [activeChat, setActiveChat] = useState({
    recipient: ALL_CHAT,
    messages: [],
  });

  // POPULATE WITH GROUPS OF USER
  // const options = props.groups;

  const loadMessageHistory = (recipient) => {
    get("/api/chat", { recipient_id: recipient._id }).then((messages) => {
      setActiveChat({
        recipient: recipient,
        messages: messages,
      });
    });
  };

  useEffect(() => {
    document.title = "Forum";
  }, []);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    loadMessageHistory(activeChat.recipient);
  }, [activeChat.recipient._id]);

  useEffect(() => {
    get("/api/activeUsers").then((data) => {
      // If user is logged in, we load their chats. If they are not logged in,
      // there's nothing to load. (Also prevents data races with socket event)
      if (props.userId) {
        setActiveUsers([ALL_CHAT].concat(data.activeUsers));
      };
    });
  }, []);

  useEffect(() => {
    const addMessages = (data) => {
        setActiveChat(prevActiveChat => ({
          recipient: prevActiveChat.recipient,
          messages: prevActiveChat.messages.concat(data),
        }));
    };
    socket.on("message", addMessages);
    return () => {
      socket.off("message", addMessages);
    };
  }, [activeChat.recipient._id, props.userId]);

  useEffect(() => {
    const callback = (data) => {
      setActiveUsers([ALL_CHAT].concat(data.activeUsers));
    };
    socket.on("activeUsers", callback);
    return () => {
      socket.off("activeUsers", callback);
    };
  }, []);

  const setActiveUser = (user) => {
    if (user._id !== activeChat.recipient._id) {
      setActiveChat({
        recipient: user,
        messages: [],
      });
    }
  };

  if (!props.userId) {
     return <div>Log in before using Group Messages</div>;
  }

  return (
    <>
      <div className="u-relative Forum-container">
        <h1 className="forum-title">Group Messages</h1>

        <div className="forum-dropdown">
          <Dropdown
            options={options}
            onChange={(item) => setSelectedOption(item)}
            selectedKey={selectedOption}
            placeholder={"Select a group"}
          />
          <p>Currently viewing {selectedOption}'s messages</p>
        </div>

        <div className="lines">
                <div className="diamond" />
        </div>
            <div className="Forum-chatContainer u-relative">
            <Chat data={activeChat} />
            </div>
        </div>
    </>
  );
}

export default Forum;