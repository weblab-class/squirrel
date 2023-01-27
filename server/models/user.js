const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    googleid: String,
    username: String,
    password: String,
    preferences: {
       allergies: [String],
       restrictions: [String],
       time: String,
       cookingpref: String
    },
    name: String,
    img: String,
    location: String,
    badges: String,
    group: String
});


// compile model from schema
module.exports = mongoose.model("user", UserSchema);

