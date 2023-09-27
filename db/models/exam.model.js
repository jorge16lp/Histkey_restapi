const mongoose = require('mongoose')
const { Schema } = mongoose

const ExamSchema = new Schema({
    public_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    questions: {
        type: String,
        required: true
    }
}) 

const ExamModel = mongoose.model('exams', ExamSchema)

module.exports = ExamModel