const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please provide your name!"],
        unique: false
    },
    email : {
        type: String,
        required: [true, "Please provide your Email!"],
        unique: [true, "Email Exists"]
    },
    password : {
        type: String,
        required: [true, "Please provide your Password!"],
        unique: false
    }
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel