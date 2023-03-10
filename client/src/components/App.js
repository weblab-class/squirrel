import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import NavBar from "./modules/NavBar.js";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Profile from "./pages/Profile.js";
import Messages from "./pages/Messages.js";
import Calendar from "./pages/Calendar.js";
import Forum from "./pages/Forum.js";
import FindGroup from "./pages/FindGroup.js";
import MakeGroup from "./pages/MakeGroup";
import GroupProfile from "./pages/GroupProfile";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  //const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(undefined);
  const [groupId, setGroupId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(null);
    post("/api/logout");
  };

  return (
    <>
      <NavBar userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
      <div className="App-container"></div>

      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <Profile path="/profile" userId={userId} />
        <Messages path="/forum" userId={userId} />
        <Calendar path="/calendar" userId={userId} />
        <NotFound default />
        <Forum path="/messages" userId={userId} />
        <FindGroup path="/findgroup" />
        <MakeGroup path="/makegroup" />
        <GroupProfile path="/testingstuff" userId={userId} />
        <GroupProfile path="/group/:groupId" groupI={groupId} />
      </Router>
    </>
  );
};
export default App;

//<Home path='/home' />
