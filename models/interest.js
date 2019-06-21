const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestSchema = new Schema({
    // Interests will go here
});

const Interest = mongoose.model("Interest", interestSchema);

module.exports = Interest;