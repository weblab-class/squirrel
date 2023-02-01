import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { MdLocationOn } from "react-icons/md";
import { get } from "../../utilities";
import scurry from "../../public/scurrypic.jpg";
import Form from "../modules/ProfileForm.js";
import "./Profile.css";
import { GrEdit } from "react-icons/gr";

const GroupProfile = (props) => {
  const [group, setGroup] = useState("group");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = "Group Profile Page";
    get(`/api/whoami`, { groupid: props.groupId }).then((groupObj) => setGroup(groupObj));
  }, []);

  const handleButton = (event) => {};
  if (!props.groupId) {
    return (
      <div className="login_required">
        <br />
        Please make sure to login to see the group page!
      </div>
    );
  }
  return (
    <>
      <div className="bigContainer2 center">
        <div className="Profile-avatarContainer ">
          <div className="Profile-avatar">
            <img id="sq_img" src={scurry} />
          </div>

          <h1 className="Profile-name">
            <div className="center">{group.name}</div>
          </h1>
        </div>

        <div className="Profile-information">
          <div className="Profile-location u-textLeft">
            <MdLocationOn /> {group.location ? group.location : "No location"}
          </div>

          <div className="Profile-foodRestrictions u-textLeft">
            Food Restrictions:{" "}
            {group.preferences
              ? group.restrictions
                ? group.preferences.restrictions
                : "No restrictions"
              : "No restrictions"}
          </div>

          <div className="Profile-Allergies u-textLeft">
            Allergies:{" "}
            {group.preferences
              ? group.allergies
                ? group.preferences.allergies
                : "No allergies"
              : "No allergies"}
          </div>

          <div className="Cooking Preferences u-textBottom">
            Cooking Preferences:{" "}
            {group.preferences
              ? group.time
                ? group.preferences.time
                : "No time preferences"
              : "No time preferences"}
          </div>
          <br />
        </div>
        <div className="lines">
          <div className="diamond" />
        </div>
        <div className="right">
          {/* <GrEdit size={42}/> <button className="buttonCust"> Edit </button>  */}
          <button
            onClick={() => {
              console.log("clicked");
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Save" : "Edit"}
          </button>
        </div>
        {showForm ? <Form /> : ""}
      </div>
    </>
  );
};

export default GroupProfile;
