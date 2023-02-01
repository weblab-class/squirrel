import React, { useEffect, useState, Component } from "react";
import "../modules/SearchBar.js";
import { post } from "../../utilities";

import "./MakeGroup.css";
import Form from "../modules/ProfileForm.js";

// props = array of groups (MUST BE AN ARRAY)
const MakeGroup = (props) => {

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

  useEffect(() => {
    document.title = "Make Groups Page";
    // get(`/api/get_groups`, {}).then((userObj) => setGroups(userObj));
  }, []);

  const createGroup = () => {
    post(`/api/group`, {
name: document.getElementById("group_name").value, allergies: getSelectValues(document.getElementById("allergies")), location: getSelectValues(document.getElementById("locations")), restrictions: getSelectValues(document.getElementById("restrictions")), cookingprefs: getSelectValues(document.getElementById("cookingprefs"))}).then((res) => alert("Group created!")).catch((err) => alert("Failed to create group"));
  }

  return (
    <>
      <div className="mg_container">
        <div className="title u-inlineBlock">
          <div className="find">
            <h1>Make a Group</h1>
          </div>
        </div>

        <div className="lines">
          <div className="diamond" />
        </div>

        <div className="giveName">
          <label>Group Name: </label>
          <input type="text" id="group_name" required />
        </div>

      <div className="Prefform">Preferences:</div>
      <div className="grid2Prefs">
        <div className="gridPrefs">
          <div className="gridBoxes">
            <label for="Location" className="lable">
              Location:{" "}
            </label>
            <form>
              <select multiple className="chosen-select" id="locations">
                <option>Off-campus</option>
                <option>Maseeh</option>
                <option>McCormick</option>
                <option>Baker</option>
                <option>Burton Conner</option>
                <option>MacGregor</option>
                <option>East Campus</option>
                <option>New House</option>
                <option>Next</option>
                <option>New Vassar</option>
                <option>Simmons</option>
                <option>Random Hall</option>
                <option>Cambridge</option>
                <option>Boston</option>
                <option>Other</option>
              </select>
              {/* <input type="submit"></input> */}
            </form>
            <br />
          </div>
          <div className="gridBoxes">
            <label for="Preferences" className="lable">
              Food Restrictions:{" "}
            </label>
            <form>
              <select multiple className="chosen-select" id="restrictions">
                <option>Kosher</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Keto</option>
                <option>Other</option>
              </select>
              {/* <input type="submit"></input> */}
            </form>
            <br />
          </div>
        </div>
        <div className="gridPrefs">
          <div className="gridBoxes">
            <label for="Preferences" className="lable">
              Allergies:{" "}
            </label>
            <form>
              <select multiple className="chosen-select" id="allergies">
                <option value="Peanuts">Peanuts</option>
                <option value="Nuts">Nuts</option>
                <option value="Soy">Soy</option>
                <option value="Gluten">Gluten</option>
                <option value="Shellfish">Shellfish</option>
                <option value="Milk">Milk</option>
                <option value="Fish">Fish</option>
                <option value="Eggs">Eggs</option>
                <option value="Other">Other</option>
              </select>
              {/* <input type="submit"></input> */}
            </form>
            <br />
          </div>
          <div className="gridBoxes">
            <label for="Preferences" className="lable">
              Cooking Preferences:{" "}
            </label>
            <form>
              <select multiple className="chosen-select" id="cookingprefs">
                <option value="Morning">Morning (8a-12p) </option>
                <option value="Afternoon">Afternoon (12p-4p)</option>
                <option value="Evening">Night (4p-8p)</option>
                <option value="Late">Late Night (8p-12a)</option>
              </select>
              {/* <input type="submit"></input> */}
            </form>
            <br />
          </div>
        </div>
      </div>

        <button onClick = {createGroup}>Save</button>
      </div>
    </>
  );
};

export default MakeGroup;
