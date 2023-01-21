import React from "react";
import NavBar from "../modules/NavBar.js"

const NotFound = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <h1>404 Not Found</h1>
      <p>The page you requested couldn't be found.</p>
      {/* <p>You messed up so bad even the NavBar ran away.</p> */}
      <p>However, NavBar is very patient and will offer you a way home.</p>
      <p>As punishment, find your way back by yourself without the comfort of the convenient NavBar.</p>
    </div>
  );
};

export default NotFound;
