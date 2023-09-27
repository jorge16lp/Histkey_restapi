const mongoose = require('mongoose')
const { Schema } = mongoose

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}) 

const TeacherModel = mongoose.model('teachers', TeacherSchema)

module.exports = TeacherModel