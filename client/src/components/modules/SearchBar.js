import React, { useState } from "react";
import "./SearchBar.css";
import { GrFormSearch, GrClose } from "react-icons/gr";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <GrFormSearch />
          ) : (
            <GrClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

// import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { GrFormSearch } from "react-icons/gr";

// import "./SearchBar.css"

// function SB({placeholder, data}){
//     return (
//         <div className="search">
//             <div className="searchInputs">
//                 <input type="text" placeholder={placeholder} />
//                 <div className="searchIcon">
//                     <GrFormSearch/>
//                 </div>
//             </div>
//             <div className="dataResult">
//                 {data.map((value, key) => {
//                     return (
//                         <a className="dataItem" href={value.link} target="_blank"> 
//                             <p>{value.type}</p>
//                         </a>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default SB