const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestSchema = new Schema({
    q1: {
        type: Number
    },
    q2: {
        type: Number
    },
    q3: {
        type: Number
    },
    q4: {
        type: Number
    },
    q5: {
        type: Number
    }
});

const Interest = mongoose.model("Interest", interestSchema);

module.exports = Interest;