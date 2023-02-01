import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import {MdLocationOn} from "react-icons/md";
import { get, post } from "../../utilities";
import squirrel from "../../public/squirrelpic.jpg"
import Form from "../modules/ProfileForm.js"
import "./Profile.css";
import { GrEdit } from "react-icons/gr";

const Profile = (props) => {

  function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

    const [user, setUser] = useState("user");

    const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = "Profile Page";
    get(`/api/whoami`, { userid: props.userId }).then((userObj) => setUser(userObj));
  }, []);

  const handleButton = (event) => {};
  // function myFunction() {
  //     window.location.href = "../editprefs.html";}
  if (!props.userId) {
    return (
      <div className="login_required">
        <br />
        Please make sure to login to see your profile page!
      </div>
    );
  }
  return (
    <>
      <div className="bigContainer2 center">
        <div className="Profile-avatarContainer ">
          <div className="Profile-avatar">
            <img id="sq_img" src={squirrel} />
          </div>

          <h1 className="Profile-name">
            <div className="center">{user.name}</div>
          </h1>
        </div>

            <div className="Profile-container">
                <div className="Profile-info">
                    <div className="Profile-location u-textLeft">
                        {/* <MdLocationOn/>  */}
                        <b className="headers">Location: </b>
                        <span>{user.locations ?  (user.locations.map(loc => {
                            return loc + " "
                        })) : "No location"}
                        </span>
                    </div>


                    <div className="Profile-foodRestrictions u-textLeft">
                        <span className="headers">
                        Food Restrictions: </span>
                        <span>{( user.restrictions ? (user.restrictions.map(rest => {
                            return rest + " "
                        })): ("No restrictions"))}</span>
                    </div>

                    <div className="Profile-Allergies u-textLeft">
                        <span className = "headers">Allergies: </span>
                        <span>{user.allergies ? (user.allergies.map(all => {
                            return all + " "
                        })) : "No allergies"} </span>
                    </div>

                    <div className="Cooking Preferences u-textBottom">
                        <span className = "headers"> Cooking Preferences:</span>
                        <span> {user.times ? (user.times.map(time => {
                            return time + " "
                        })) :"No time preferences"} </span>
                    </div>
                    <br/>
                </div>
            </div>
            <div className="lines">
                <div className="diamond" />
            </div>
            <div className="right">
            {/* <GrEdit size={42}/> <button className="buttonCust"> Edit </button>  */}
            <button onClick={() => { 
                console.log("clicked");
                if (showForm) { 
                       post(`/api/editpreferences`, {
allergies: getSelectValues(document.getElementById("allergies")), location: getSelectValues(document.getElementById("locations")), restrictions: getSelectValues(document.getElementById("restrictions")), times: getSelectValues(document.getElementById("cookingprefs"))}).then((res) => alert("Preferences Updated")).catch((err) => console.error(err));
 
user.allergies = getSelectValues(document.getElementById("allergies"));
                      user.locations = getSelectValues(document.getElementById("locations"));
                      user.restrictions = getSelectValues(document.getElementById("restrictions"));
user.times = getSelectValues(document.getElementById("cookingprefs"));

                }
                setShowForm(!showForm);
                
            }}>
            {showForm ? "Save": "Edit"}</button>
            </div>
            {showForm ? <Form/> : ""}
        </div>   

        </>  
          
    )
}

export default Profile;
