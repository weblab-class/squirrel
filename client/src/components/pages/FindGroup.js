import React, { useEffect, useState, Component } from "react";
import "../modules/SearchBar.js"
import SB from "../modules/SearchBar.js";
import BookData from "./Data.json";

import "./FindGroup.css";

// props = array of groups (MUST BE AN ARRAY)
const FindGroup = (props) => {
    return(
        <>
            <div className="title">
                <h1>Find a Group</h1>
            </div>
            <div className="search-bar">
                {/* example using Data.JSON */}
                <SB placeholder="Find your group!" data={BookData}/> 
                {/* actual */}
                {/* <SB placeholder="Find your group!" data={props}/> */}
            </div>
        </>
    )
}

export default FindGroup;