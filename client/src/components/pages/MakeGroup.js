import React, { useEffect, useState, Component } from "react";
import "../modules/SearchBar.js";
import SB from "../modules/SearchBar.js";
//import BookData from "./Data.json";
import { get } from "../../utilities";

import "./MakeGroup.css";

// props = array of groups (MUST BE AN ARRAY)
const MakeGroup = (props) => {
  const [groups, setGroups] = useState("user");

  useEffect(() => {
    // document.title = "Make Groups Page";
    // get(`/api/get_groups`, {}).then((userObj) => setGroups(userObj));
  }, []);

  return (
    <>
      <div className="fg_container">
        <div className="title u-inlineBlock">
          <div className="find">
            <h1>Make a Group</h1>
          </div>
        </div>

        <div className="lines">
          <div className="diamond" />
        </div>
      </div>
    </>
  );
};

export default MakeGroup;
