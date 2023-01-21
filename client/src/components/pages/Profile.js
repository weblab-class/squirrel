import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";

import "./Profile.css";

const Profile = (props) => {
    const [user, setUser] = useState()
    
    useEffect(() => {
        document.title = "Profile Page";
        // get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
      }, []);
    
    if(!user){
        return(<div> Loading! Feel free to grab a coffee as you wait uwu </div>)
    }
    return(
        <div>
            <div className="Profile-avatarContainer">
                <div className="Profile-avatar" />
            </div>

            <h1 className="Profile-name u-textLeft">
                {user.name}
            </h1>

            <div className="Profile-location u-textCenter">
                {user.location}
            </div>

            <div className="Profile-foodRestrictions u-textCenter">
                Food Restrictions: {user.preferences.restrictions}
            </div>

            <div className="Profile-Allergies u-textCenter">
                Allergies: {user.preferences.allergies}
            </div>

            <div className="Cooking Preferences u-textCenter">
                Cooking Preferences: {user.preferences.time}
            </div>
            <div class="container">
                <div class="lines">
                    <div class="diamond"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;
