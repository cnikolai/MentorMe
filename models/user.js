const mongoose = require("mongoose");
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
        // required: true
    },
    hash: {
        type: String
        // required: true
    },
    salt: {
        type: String
        // required: true
    },
    email: {
        type: String
        // required: true
    },
    // true = mentee, false = mentor
    isMentee: {
        type: Boolean
        // required: true
    },
    interest: {
        type: Schema.Types.ObjectId,
        ref: "Interest"
    },
    profileImage: {
      type: Buffer
    },
    location: {
      type: String
    },
    savedMentor: [{
        type: Schema.Types.ObjectId,
        ref: "SavedMentor"
    }]

});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

const User = mongoose.model("User", userSchema);

module.exports = User;