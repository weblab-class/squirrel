const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    username: String,
    group: String,
    content: String
});


// compile model from schema
module.exports = mongoose.model("post", PostSchema);

