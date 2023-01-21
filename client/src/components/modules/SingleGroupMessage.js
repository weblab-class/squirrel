import React, { useState, useEffect } from "react";

import "./SingleGroupMessage.css";

/**
 * Renders a single chat message
 *
 * Proptypes
 * @param {MessageCommentObject} message
 */
const SingleMessageComment = (props) => {
  return (
    <div className={"u-flex u-flex-alignCenter SingleMessage-container"}>
      <span className=" SingleMessage-sender u-bold">{props.message.sender.name + ":"}</span>
      <span className="SingleMessage-content">{props.message.content}</span>
    </div>
  );
}

export default SingleMessage;
