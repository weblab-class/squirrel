const mongoose = require("mongoose");

const ForumSchema = new mongoose.Schema({
    username: String,
    content: String
});


// compile model from schema
module.exports = mongoose.model("forum", ForumSchema);

