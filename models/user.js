const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // true = mentee, false = mentor
    isMentee: {
        type: Boolean,
        required: true
    },
    interest: [{
        type: Schema.Types.ObjectId,
        ref: "Interest"
    }]

});

// For cascading delelte of user's interests if the user is deleted
// userSchema.pre('remove', function (next) {
//     Interest.remove({ _id: this._id }).exec();
//     next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;