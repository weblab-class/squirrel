import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import {MdLocationOn} from "react-icons/md";
import NavBar from "../modules/NavBar.js";
import { get } from "../../utilities";

import "./Profile.css";

const Profile = (props) => {
    const [user, setUser] = useState("user")
    
    useEffect(() => {
        document.title = "Profile Page";
        get(`/api/whoami`, { userid: props.userId }).then((userObj) => setUser(userObj));
      }, []);
    
    if(!props.userId){
        return(<div className="Loading">
            <br/>
        Loading! Feel free to grab a coffee as you wait! </div>)
    }
    return(
        <div className="bigContainer">
            <div className="Profile-avatarContainer">
                <div className="Profile-avatar" />
            </div>

            <h1 className="Profile-name u-textLeft">
                {user.name}
            </h1>

            <div className="Profile-location u-textCenter">
                <MdLocationOn/> {user.location ? user.location : "No location"}
            </div>

            <div className="Profile-foodRestrictions u-textCenter">
                Food Restrictions: {user.preferences?.restrictions ? user.preferences.restrictions : "No restrictions"}
            </div>

            <div className="Profile-Allergies u-textCenter">
                Allergies: {user.preferences?.allergies ? user.preferences.allergies : "No allergies"}
            </div>

            <div className="Cooking Preferences u-textCenter">
                Cooking Preferences: {user.preferences?.time ? user.preferences.time : "No time preferences"}
            </div>
            <div className="container">
                <div className="lines">
                    <div className="diamond"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;

