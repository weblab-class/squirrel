import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import {MdLocationOn} from "react-icons/md";
import NavBar from "../modules/NavBar.js";
import { get, post } from "../../utilities";

import "./Profile.css";

const Profile = (props) => {
    const [user, setUser] = useState()
    
    useEffect(() => {
        document.title = "Profile Page";       
        //get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
    }, []);

    return (
        get("/api/whoami").then((user) => {
            if(!user) {(<div className= "Loading">
            <br/>
            Loading! Feel free to grab a coffee as you wait! </div>)}
            else{
                <div>
                    <div className="bigContainer">
                    <div className="Profile-avatarContainer">
                        <div className="Profile-avatar" />
                    </div>

                    <h1 className="Profile-name u-textLeft">
                        {user.name}
                    </h1>

                    <div className="Profile-location u-textCenter">
                        <MdLocationOn/> {user.location}
                    </div>

                    <div className="Profile-foodRestrictions u-textCenter">
                        Food Restrictions: {user.preferences.restrictions}
                        </div>
                    </div>
                </div>
                
            }
        })
    )
}

export default Profile;
