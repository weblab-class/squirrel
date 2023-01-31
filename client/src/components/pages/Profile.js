import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import {MdLocationOn} from "react-icons/md";
import { get } from "../../utilities";
import squirrel from "../../public/squirrelpic.jpg"
import Form from "../modules/ProfileForm.js"
import "./Profile.css";
import {GrEdit} from "react-icons/gr"; 

// const Form = () => {
//     return <>
//         <div>Form</div>
//         <input type="text" id="fname" name="fname"/>
//     </>
// }

const Profile = (props) => {
    const [user, setUser] = useState("user")

    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        document.title = "Profile Page";
        get(`/api/whoami`, { userid: props.userId }).then((userObj) => setUser(userObj));
      }, []);

    const handleButton = (event) => {

    }
    // function myFunction() {
    //     window.location.href = "../editprefs.html";}
    if(!props.userId){
        return(
        <div className="login_required">
            <br/>
            Please make sure to login to see your profile page!
        </div>)
    }
    return(
        <>
        <div className="bigContainer2 center">
            <div className="Profile-avatarContainer ">
                <div className="Profile-avatar"> 
                    <img id="sq_img" src={squirrel}/>
                </div>

                <h1 className="Profile-name">
                    <div className="center">{user.name}</div>
                </h1>
            </div>

            <div className="Profile-information">
                 <div className="Profile-location u-textLeft">
                    <MdLocationOn/> {user.location ? user.location : "No location"}
                </div>

                <div className="Profile-foodRestrictions u-textLeft">
                    Food Restrictions: {user.preferences?( user.restrictions ? (user.preferences.restrictions): ("No restrictions")) : ("No restrictions")}
                </div>

                <div className="Profile-Allergies u-textLeft">
                    Allergies: {user.preferences? (user.allergies ? (user.preferences.allergies) : "No allergies"): ("No allergies")}
                </div>

                <div className="Cooking Preferences u-textBottom">
                    Cooking Preferences: {user.preferences? (user.time ? (user.preferences.time) :"No time preferences") : "No time preferences"}
                </div>
                <br/>
            </div>
            <div className="lines">
                <div className="diamond" />
            </div>
            <div className="right">
            {/* <GrEdit size={42}/> <button className="buttonCust"> Edit </button>  */}
            <button onClick={() => { 
                console.log("clicked");
                setShowForm(!showForm);
                // showForm ? (post("/api/editpreferences", body={
                //     location: 
                // })):""
                }}>
            {showForm ? "Save": "Edit"}</button>
            </div>
            {showForm ? <Form/> : ""}
        </div>   

        </>  
          
    )
}

export default Profile;

