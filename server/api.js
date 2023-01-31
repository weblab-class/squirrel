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
const Forum = require("./models/forum");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.get("/activeUsers", (req, res) => {
  res.send({ activeUsers: socketManager.getAllConnectedUsers() });
});

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }
  console.log(req.user);
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
  console.log(req.user);
  const newEvent = new Event({
    title: req.body.name,
    start: req.body.start,
    end: req.body.end,
    description: req.body.description,
    group: req.body.group,
    allDay: req.body.allDay,
    users: [req.user.googleid]
  });

  console.log("sent event?");

  // newEvent.save().then((event) => res.send(event)).catch((err) => console.error(err));
  newEvent.save((err, event) => {if (err) {console.error(err);} else {console.log(event);}})
});

router.get("/get_events", (req, res) => {
  if (req.user) {
    Event.find({ $or: [{"group": "global"}, {"users": req.user.googleid}]}, "title start end allDay date", (err, events) => {
      if (err) return handleError(err);
      console.log(events);
      res.send(events);
    });
  } else {
    Event.find({"group": "global"}, "title start end allDay date", (err, events) => {
      if (err) return handleError(err);
      console.log(events);
      res.send(events);
    });
  }
});

router.get("/get_groups", (req, res) => {
  Group.find({}, "title link", (err, groups) => {
    if (err) return handleError(err);
    res.send(groups);
  });
});

router.post("/del_event", (req, res) => {
  Event.findOneAndDelete({title: req.body.title, start: req.body.start, end: req.body.end}, (err) => {if (err) console.error(err);})
});

router.get("/chat", (req, res) => {
  Post.find({}).then((messages) => res.send(messages));
});

router.post("/message", auth.ensureLoggedIn, (req, res) => {
  console.log(`Received a chat message from ${req.user.name}: ${req.body.content}`);

  // insert this message into the database
  const message = new Post({
    username: req.user.name,
    content: req.body.content
  });
  message.save();

  socketManager.getIo().emit("message", message);
});

router.post("/story", auth.ensureLoggedIn, (req, res) => {
  console.log(req.body);
  const newForum = new Forum({
    username: req.user.name,
    content: req.body.content
  });
  newForum.save().then((group) => res.send(group));
});

router.post("/join_group", (req, res) => {
  User.update({_id: req.user._id}, {group: req.body.group}, (err, affected, resp) => {
    if (err) console.error(err);
    console.log(resp);
  });
});

router.get("/stories", (req, res) => {
  Forum.find({}).then((messages) => res.send(messages));
});

router.post("/comment", auth.ensureLoggedIn, (req, res) => {
  const newComment = new Reply({
    username: req.user.name,
    parent: req.body.parent,
    content: req.body.content,
  });

  newComment.save().then((comment) => res.send(comment));
});

router.get("/comment", (req, res) => {
  Reply.find({ parent: req.query.parent }).then((comments) => {
    res.send(comments);
  });
});

router.post("/update_location", (req, res) => {
  console.log(req);
  console.log("BODY UNDER");
  console.log(req.body);
  console.log(req.body._id);
  return 1;
  /*
  User.update({_id: req.user._id}, {group: req.body.location}, (err, affected, resp) => {
    if (err) console.error(err);
    console.log(resp);
  });
  */
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router; 

