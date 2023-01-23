const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    name: String,
    users: [String],
    allergies: [String],
    restrictions: [String],
    location: String,
    img: String,
    description: String,
    title: String,
    link: String
});


// compile model from schema
module.exports = mongoose.model("group", GroupSchema);

