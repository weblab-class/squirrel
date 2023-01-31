import React, { useState } from "react";
import "./ProfileForm.css";
import select from "react-select";
import { post } from "../../utilities";
//import Select from 'react-dropdown-select';

 const Form = (props) => {

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

return (
    <>
        <h1 className="Prefform">Preferences</h1>
        <div className="grid2Prefs">
            <div className="gridPrefs">
            <div className="gridBoxes">
                <label for="Location" className="lable">Location: </label>
                <form>
                    <select multiple className="chosen-select" id="locations">
                        <option >Off-campus</option>
                        <option >Maseeh</option>
                        <option >McCormick</option>
                        <option>Baker</option>
                        <option>Burton Conner</option>
                        <option >MacGregor</option>
                        <option >East Campus</option>
                        <option >New House</option>
                        <option >Next</option>
                        <option >New Vassar</option>
                        <option >Simmons</option>
                        <option >Random Hall</option>
                        <option>Cambridge</option>
                        <option >Boston</option>
                        <option >Other</option>
                    </select>
                    {/* <input type="submit"></input> */}
                </form>
                <br/>
                {/* <button onClick={rahhh("locations")}> Submit </button> */}
                <button onClick= {() => {
                    console.log(getSelectValues(document.getElementById('locations')));
                    post("/api/editpreferences", {
                        location: getSelectValues(document.getElementById('locations'))
                    }).then((res) => console.log(res));
                }}>Show selected values</button>
            </div>
            <div className="gridBoxes">
                <label for="Preferences" className="lable">Food Restrictions: </label>
                <form> 
                    <select multiple className="chosen-select" id="restrictions">
                        <option >Kosher</option>
                        <option >Vegetarian</option>
                        <option>Vegan</option>
                        <option >Keto</option>
                        <option >Other</option>
                    </select>
                    {/* <input type="submit"></input> */}
                </form>
                <br/>
                <button onClick= {() => {
                    let all = getSelectValues(document.getElementById('restrictions'));
                    post("/api/editpreferences", {
                        restrictions: getSelectValues(document.getElementById('restrictions'))
                    }).then((res) => console.log(res));
                }}>Show selected values</button>
            </div>
            </div>
            <div className="gridPrefs">
                <div className="gridBoxes">
                <label for="Preferences" className="lable">Allergies: </label>
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
                <br/>
                <button onClick= {() => {
                    console.log(getSelectValues(document.getElementById('allergies')));
                    post("/api/editpreferences",{ 
                        allergies:getSelectValues(document.getElementById('allergies'))
                    }).then((res) => console.log(res));
                }}>Show selected values</button>
                </div>
                <div className="gridBoxes">
                <label for="Preferences" className="lable">Cooking Preferences: </label>
                <form> 
                    <select multiple className="chosen-select" id="cookingprefs">
                        <option value="Morning">Morning (8a-12p) </option>
                        <option value="Afternoon">Afternoon (12p-4p)</option>
                        <option value="Evening">Night (4p-8p)</option>
                        <option value="Late">Late Night (8p-12a)</option>
                    </select>
                    {/* <input type="submit"></input> */}
                </form>
                <br/>
                <button onClick= {() => {
                    console.log(getSelectValues(document.getElementById('cookingprefs')));
                    post("/api/editpreferences", 
                        {cookingpreferences:getSelectValues(document.getElementById('cookingprefs'))
                    }).then((res) => console.log(res));
                }}>Show selected values</button>
                </div>
        </div>
    </div>   
      
    </>
    );
};

export default Form;
