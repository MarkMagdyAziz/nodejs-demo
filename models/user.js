const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 22
    },
    lastName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 22
    },
    email: {
        type: String,
        minLength: 4,
        maxLength: 22,
        unique: true
    },
    dob: Date,

})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel