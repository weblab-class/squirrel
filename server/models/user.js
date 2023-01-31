const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    googleid: String,
    username: String,
    password: String,
    allergies: [String],
    restrictions: [String],
    times: [String],
    name: String,
    img: String,
    locations: [String],
    badges: String,
    group: String
});


// compile model from schema
module.exports = mongoose.model("user", UserSchema);

