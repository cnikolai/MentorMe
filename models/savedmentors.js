const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedMentorSchema = new Schema({
    username: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    profession: {
        type: String
    },
    location: {
        type: String
    }
});

const SavedMentor = mongoose.model("SavedMentor", savedMentorSchema);

module.exports = SavedMentor;