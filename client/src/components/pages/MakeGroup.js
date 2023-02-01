import React, { useEffect, useState, Component } from "react";
import "../modules/SearchBar.js";
import { post } from "../../utilities";

import "./MakeGroup.css";
import Form from "../modules/ProfileForm.js";

// props = array of groups (MUST BE AN ARRAY)
const MakeGroup = (props) => {
  const [groups, setGroups] = useState("user");

  useEffect(() => {
    // document.title = "Make Groups Page";
    // get(`/api/get_groups`, {}).then((userObj) => setGroups(userObj));
  }, []);

  return (
    <>
      <div className="mg_container">
        <div className="title u-inlineBlock">
          <div className="find">
            <h1>Make a Group</h1>
          </div>
        </div>

        <div className="lines">
          <div className="diamond" />
        </div>

        <div className="giveName">
          <label>Group Name: </label>
          <input type="text" required />
        </div>
        <Form />

        <button>Save</button>
      </div>
    </>
  );
};

export default MakeGroup;
