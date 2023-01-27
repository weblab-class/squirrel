import React, { useState } from "react";
import "./ProfileForm.css";
import Select from "react-select";

// import Multiselect from 'multiselect-react-dropdown';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
 const Form = (props) => {
//     this.state = {
//         options: [{name: 'Peanuts', id: 1},{name: 'Nuts', id: 2}]
//     // };
//     //       { item_id: 1, item_text: 'Peanuts' },
//     //       { item_id: 2, item_text: 'Nuts' },
//     //       { item_id: 3, item_text: 'Soy' },
//     //       { item_id: 4, item_text: 'Gluten' },
//     //       { item_id: 5, item_text: 'Shellfish' },
//     //       { item_id: 6, item_text: 'Milk' },
//     //       { item_id: 7, item_text: 'Fish' },
//     //       { item_id: 8, item_text: 'Eggs' },
//     //       { item_id: 9, item_text: 'Sesame' },
//     //       { item_id: 10, item_text: 'Corn' },
//     //       { item_id: 11, item_text: 'Gluten' },
//     //     ];
    
//     }
//     <Multiselect
//     options={this.state.options} // Options to display in the dropdown
//     selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
//     onSelect={this.onSelect} // Function will trigger on select event
//     onRemove={this.onRemove} // Function will trigger on remove event
//     displayValue="name" // Property name to display in the dropdown options
//     /> 

//     onSelect(selectedList, selectedItem) {
        
//     }
    return (
    <>
        <h1 className="Prefform">Preferences</h1>
        <label for="Location">Location: </label>
        <form action="DATAVASEEEESHREYA HELPPPPPPPP" method="post"> 
            <select multiple className="chosen-select" name="test">
                <option >Off-campus</option>
                <option >Maseeh</option>
                <option >McCormick</option>
                <option>Baker</option>
                <option>Burton Connor</option>
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
            <input type="submit"></input>
        </form>
        <br/>
        <label for="Preferences">Food Restrictions: </label>
        <form action="DATAVASEEEESHREYA HELPPPPPPPP" method="post"> 
            <select multiple>
                <option >Kosher</option>
                <option >Vegetarian</option>
                <option>Vegan</option>
                <option >Keto</option>
                <option >Other</option>
            </select>
            <input type="submit"></input>
        </form>
        <br/>
        <label for="Preferences">Allergies: </label>
        <form action="DATAVASEEEESHREYA HELPPPPPPPP" method="post"> 
            <select multiple>
                <option value="Peanuts">Peanuts</option>
                <option value="Nuts">Nuts</option>
                <option value="Soy">Soy</option>
                <option value="Gluten">Gluten</option>
                <option value="Shellfish">Shellfish</option>
                <option value="Milk">Milk</option>
                <option value="Fish">Fish</option>
                <option value="Eggs">Eggs</option>
                <option value="Eggs">Other</option>
            </select>
            <input type="submit"></input>
        </form>
        <br/>
        <label for="Preferences">Cooking Preferences: </label>
        <form action="DATAVASEEEESHREYA HELPPPPPPPP" method="post"> 
            <select multiple>
                <option value="Daytime">Morning (8:00-12:00) </option>
                <option value="Daytime">Afternoon (12:00-16:00)</option>
                <option value="Evening">Night (16:00-20:00)</option>
            </select>
            <input type="submit"></input>
        </form>
        

        
        {/* <select name="allergies" id = "allergies">
            

        </select> */}
      
    </>
    );
};

export default Form;