/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Reply = require("./models/reply");
const Post = require("./models/post");
const Group = require("./models/group");
const Event = require("./models/event");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

/*
TODO
Make Message
Make Forum
Make Comment
Join Group
Create Group
Update User
Add Events

TODO ... eventually
Leave Group
*/

router.post("/post", auth.ensureLoggedIn, (req, res) => {
  const newPost = new Post({
    username: req.user.username,
    group: req.body.group,
    content: req.body.content,
  });

  newPost.save().then((post) => res.send(post));
});

router.post("/reply", auth.ensureLoggedIn, (req, res) => {
  const newReply = new Reply({
    username: req.user.username,
    parent: req.user.parent,
    content: req.body.content,
  });

  newReply.save().then((reply) => res.send(reply));
});

router.post("/group", auth.ensureLoggedIn, (req, res) => {
  const newGroup = new Group({
    name: req.body.name,
    users: [req.user.name],
    restrictions: req.body.restrictions,
    allergies: req.body.allergies,
    location: req.body.location,
    description: req.body.description,
    img: req.body.img
  });

  newGroup.save().then((group) => res.send(group));
});

router.post("/event", (req, res) => {
  const newEvent = new Event({
    title: req.body.name,
    date: req.body.date,
    description: req.body.description,
    group: req.body.group
  });

  console.log("sent event?");

  // newEvent.save().then((event) => res.send(event)).catch((err) => console.error(err));
  newEvent.save((err, event) => {if (err) {console.error(err);} else {console.log(event);}})
});

router.get("/get_events", (req, res) => {
  Event.find({"group": "global"}, "title date", (err, events) => {
      if (err) return handleError(err);
      console.log(events);
      res.send(events);
  });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
