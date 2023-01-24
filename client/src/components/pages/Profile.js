import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import {MdLocationOn} from "react-icons/md";
import { get } from "../../utilities";
import squirrel from "../../public/squirrelpic.jpeg"

import squirrel from "../../public/squirrelpic.jpeg"
import "./Profile.css";

const Profile = (props) => {
    const [user, setUser] = useState("user")
    
    useEffect(() => {
        document.title = "Profile Page";
        get(`/api/whoami`, { userid: props.userId }).then((userObj) => setUser(userObj));
      }, []);
    
    if(!props.userId){
        return(
        <div className="login_required">
            <br/>
            Please make sure to login to see your profile page!
        </div>)
    }
    return(
        <div className="bigContainer">
            <div className="Profile-avatarContainer">
                <div className="Profile-avatar"> 
                    <img id="sq_img" src={squirrel}/>
                </div>
            </div>

            <h1 className="Profile-name u-textLeft">
                {user.name}
            </h1>

            <div className="container">
                <div className="lines">
                    <div className="diamond"></div>
                </div>
            </div>

            <div classNmae="Profile-information">
                <div className="Profile-location u-textLeft">
                    <MdLocationOn/> {user.location ? user.location : "No location"}
                </div>

                <div className="Profile-foodRestrictions u-textLeft">
                    Food Restrictions: {user.preferences?.restrictions ? user.preferences.restrictions : "No restrictions"}
                </div>

                <div className="Profile-Allergies u-textLeft">
                    Allergies: {user.preferences?.allergies ? user.preferences.allergies : "No allergies"}
                </div>

                <div className="Cooking Preferences u-textLeft">
                    Cooking Preferences: {user.preferences?.time ? user.preferences.time : "No time preferences"}
                </div>
            </div>
            
        </div>
    )
}

export default Profile;

