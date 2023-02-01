import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewStory } from "../modules/NewPostInput.js";

import { get } from "../../utilities";

import "./Messages.css";

const Messages = (props) => {
  const [stories, setStories] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    document.title = "News Feed";
    get("/api/stories").then((storyObjs) => {
      let reversedStoryObjs = storyObjs.reverse();
      setStories(reversedStoryObjs);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewStory = (storyObj) => {
    setStories([storyObj].concat(stories));
  };

  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories.map((storyObj) => (
      <Card
        key={`Card_${storyObj._id}`}
        _id={storyObj._id}
        creator_name={storyObj.creator_name}
        creator_id={storyObj.creator_id}
        userId={props.userId}
        content={storyObj.content}
      />
    ));
  } else {
    storiesList = <div>No stories!</div>;
  }
  return (
    <>
      <div>
        <div className="total-container">
          <h1 className="Title-container">Forum</h1>
          <div className="lines">
            <div className="diamond" />
          </div>
          <br />
        </div>
        <div className="stories">
          {props.userId && <NewStory addNewStory={addNewStory} />}
          {storiesList}
        </div>
      </div>
    </>
  );
};

export default Messages;
