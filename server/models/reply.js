const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
    parent: String,
    username: String,
    content: String
});


// compile model from schema
module.exports = mongoose.model("reply", ReplySchema);

