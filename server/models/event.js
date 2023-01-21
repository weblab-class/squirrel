const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    group: String,
    start: String,
    end: String,
    allDay: Boolean
});


// compile model from schema
module.exports = mongoose.model("event", EventSchema);

