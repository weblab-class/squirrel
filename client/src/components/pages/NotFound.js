import React from "react";
import { Link } from "@reach/router";
// import NavBar from "../modules/NavBar.js"

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="whydoyouexist">
      {/* <NavBar /> */}
      <h1>404 Not Found</h1>
      <p>The page you requested couldn't be found.</p>
      <p>You messed up so bad that two NavBars have appeared out of disgust.</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="https://tinyurl.com/blepppppppp" className="rick-roll">
        Please click hear to fix NavBar to restore the website to its correct number of NavBars.
      </a>
      <p>
        But since this is a 404 page, I suppose it would make sense that even this page is broken.
      </p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default NotFound;
