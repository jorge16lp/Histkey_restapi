const connection = require('./dbConnection/connection.js')
const ExamModel = require('./models/exam.model.js')
const TeacherModel = require('./models/teacher.model.js')
const StudentModel = require('./models/student.model.js')

module.exports = {
    getTeachers: getAllTeachers,
    getStudents: getAllStudents,
    getExams: getAllExams,
    findUserByEmail: findUserByEmail,
    findTeacherByEmail: findTeacherByEmail,
    findStudentByEmail: findStudentByEmail,
    addUser: addUser,
    addExam: addExam,
    findExamByPublicId: findExamByPublicId,
    deleteStudentByEmail: deleteStudentByEmail,
    deleteTeacherByEmail: deleteTeacherByEmail,
    deleteExamByPublicId: deleteExamByPublicId
};

async function addUser(type, theName, theSurname, theEmail, pass) {
    try {
        connection()
        if (type === 'teacher') {
            var newUser = new TeacherModel({
                name: theName,
                surname: theSurname,
                email: theEmail,
                password: pass
            })
        } else {
            var newUser = new StudentModel({
                name: theName,
                surname: theSurname,
                email: theEmail,
                password: pass
            })
        }
        var user = await newUser.save()
        // console.log(user)
        return user
    } catch (err) {
        if (err.code === 11000)
            return '11000'
        else {
            console.error(err)
            return err
        }
    }
}

async function deleteStudentByEmail(emailToDelete) {
    try {
        connection()
        const result = await StudentModel.deleteOne({ email: emailToDelete })
        // console.log(result)
        if (result.deletedCount === 0)
            return null
        return true
    } catch (err) {
        console.error(err)
    }
}

async function deleteTeacherByEmail(emailToDelete) {
    try {
        connection()
        const result = await TeacherModel.deleteOne({ email: emailToDelete })
        // console.log(result)
        if (result.deletedCount === 0)
            return null
        return true
    } catch (err) {
        console.error(err)
    }
}

async function addExam(id, theQuestions) {
    try {
        connection()
        var newExam = new ExamModel({
            public_id: id,
            questions: theQuestions
        })
        var exam = await newExam.save()
        // console.log(exam)
        return exam
    } catch (err) {
        if (err.code === 11000)
            return '11000'
        else {
            console.error(err)
            return err
        }
    }
}

async function deleteExamByPublicId(publicId) {
    try {
        connection()
        const result = await ExamModel.deleteOne({ public_id: publicId })
        // console.log(result)
        if (result.deletedCount === 0)
            return null
        return true
    } catch (err) {
        console.error(err)
    }
}

async function getAllTeachers() {
    try {
        connection()
        const allTeachers = await TeacherModel.find()
        // console.log(allTeachers)
        return allTeachers
    } catch (err) {
        console.error(err)
    }
}

async function findUserByEmail(email, pass) {
    try {
        connection()
        const allTeachers = await TeacherModel.find()
        for (var t in allTeachers)
            if (allTeachers[t].email === email && allTeachers[t].password === pass)
                return allTeachers[t]
        const allStudents = await StudentModel.find()
        for (var s in allStudents)
            if (allStudents[s].email === email && allStudents[s].password === pass)
                return allStudents[s]
        return null
    } catch (err) {
        console.error(err)
    }
}

async function findTeacherByEmail(email, pass) {
    try {
        connection()
        const allTeachers = await TeacherModel.find()
        for (var t in allTeachers)
            if (allTeachers[t].email === email && allTeachers[t].password === pass)
                return allTeachers[t]
        return null
    } catch (err) {
        console.error(err)
    }
}

async function findExamByPublicId(pId) {
    try {
        connection()
        const allExams = await ExamModel.find()
        for (var e in allExams)
            if (allExams[e].public_id === pId)
                return allExams[e]
        return null
    } catch (err) {
        console.error(err)
    }
}

async function findStudentByEmail(email, pass) {
    try {
        connection()
        const allStudents = await StudentModel.find()
        for (var s in allStudents)
            if (allStudents[s].email === email && allStudents[s].password === pass)
                return allStudents[s]
        return null
    } catch (err) {
        console.error(err)
    }
}

async function getAllStudents() {
    try {
        connection()
        const allStudents = await StudentModel.find()
        // console.log(allStudents)
        return allStudents
    } catch (err) {
        console.error(err)
    }
}

async function getAllExams() {
    try {
        connection()
        const allExams = await ExamModel.find()
        // console.log(allExams)
        return allExams
    } catch (err) {
        console.error(err)
    }
}