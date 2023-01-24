import React, { useEffect, useState, Component } from "react";
import "../modules/SearchBar.js"
import SB from "../modules/SearchBar.js";
//import BookData from "./Data.json";
import { get } from "../../utilities";

import "./FindGroup.css";

// props = array of groups (MUST BE AN ARRAY)
const FindGroup = (props) => {
    const [groups, setGroups] = useState("user")

    useEffect(() => {
        document.title = "Find Groups Page";
        get(`/api/get_groups`, {}).then((userObj) => setGroups(userObj));
      }, []);

    return(
        <>
            <div className="title">
                <h1>Find a Group</h1>
            </div>
            <div className="search-bar">
                {/* example using Data.JSON */}
                <SB placeholder="Find your group!" data={groups}/> 
                {/* actual */}
                {/* <SB placeholder="Find your group!" data={props}/> */}
            </div>
        </>
    )
}

export default FindGroup;

