import React, { useEffect, useState, Component } from "react";
import "../modules/SearchBar.js";
import SB from "../modules/SearchBar.js";
//import BookData from "./Data.json";
import { get } from "../../utilities";
import { Link } from "@reach/router";

import "./FindGroup.css";
import "./Forum.js";
import "./MakeGroup";

// props = array of groups (MUST BE AN ARRAY)
const FindGroup = (props) => {
  const [groups, setGroups] = useState("user");

  useEffect(() => {
    document.title = "Find Groups Page";
    get(`/api/get_groups`, {}).then((userObj) => setGroups(userObj));
  }, []);

  return (
    <>
      <div className="fg_container">
        <div className="title u-inlineBlock">
          <div className="find">
            <h1>Find a Group</h1>
          </div>
          <div className="make">
            <Link to="/makegroup/" className="make_button">
              Make a Group
            </Link>
          </div>
        </div>

        <div className="lines">
          <div className="diamond" />
        </div>

        <div className="search-bar">
          <SB placeholder="Find your group!" data={groups} />
        </div>
      </div>
    </>
  );
};

export default FindGroup;
