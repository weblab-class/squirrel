//TODLOOOOO
import React, { useState, useEffect } from "react";
import SingleForumMessage from "./SingleForumMessage";
import { NewMessage } from "./NewForumPostInput.js";

import "./Chat.css";
import SingleForumComment from "./SingleForumMessage.js";

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

/**
 * Renders main chat window including previous messages,
 * who is being chatted with, and the new message input.
 *
 * Proptypes
 * @param {ChatData} data
 */
const Chat = (props) => {
  return (
    <div className="u-flexColumn Chat-container">
      {/* <h3>Chatting with {props.data.recipient.name}</h3> */}
      <div className="Chat-historyContainer">
        {props.data.messages.map((m, i) => (
          <SingleForumMessage message={m} key={i} />
        ))}
      </div>
      <div className="Chat-newContainer">
        <NewMessage recipient={props.data.recipient} />
      </div>
    </div>
  );
};

export default Chat;
