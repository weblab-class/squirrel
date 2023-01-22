import React, { useState, useEffect } from "react";

import "./SingleForumMessage.css";

/**
 * Renders a single chat message
 *
 * Proptypes
 * @param {ForumCommentObject} message
 */
const SingleForumComment = (props) => {
  return (
    <div className={"u-flex u-flex-alignCenter SingleMessage-container"}>
      <span className=" SingleMessage-sender u-bold">{props.message.username + ":"}</span>
      <span className="SingleMessage-content">{props.message.content}</span>
    </div>
  );
}

export default SingleForumComment;
