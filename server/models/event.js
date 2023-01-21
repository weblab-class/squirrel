const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    group: String
});


// compile model from schema
module.exports = mongoose.model("event", EventSchema);

