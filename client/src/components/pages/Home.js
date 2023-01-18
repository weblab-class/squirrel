import React from "react";
import NavBar from "../modules/NavBar.js";
//import Card from "../modules/Card.js";

import "./pages.css";

const Columns = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div>Messages</div>
        <div>Feed</div>
        <div>To-Do</div>
     </div>
  )
};

//ReactDOM.render(<Columns />, document.getElementById("root"))

export default Home;