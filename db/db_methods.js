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
    findExamByPublicId: findExamByPublicId
};

async function addUser(res, type, theName, theSurname, theEmail, pass) {
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
        res.send({
            user: user
        })
    } catch (err) {
        if (err.code === 11000)
            res.send({
                user: '11000'
            })
        else {
            console.error(err)
            res.send({
                user: err
            })
        }
    }
}

async function addExam(res, id, theQuestions) {
    try {
        connection()
        var newExam = new ExamModel({
            public_id: id,
            questions: theQuestions
        })
        var exam = await newExam.save()
        console.log(exam)
        res.send({
            exam: exam
        })
    } catch (err) {
        if (err.code === 11000)
            res.send({
                exam: '11000'
            })
        else {
            console.error(err)
            res.send({
                exam: err
            })
        }
    }
}

async function getAllTeachers(res) {
    try {
        connection()
        const allTeachers = await TeacherModel.find()
        // console.log(allTeachers)
        res.send(allTeachers)
    } catch (err) {
        console.error(err)
    }
}

async function findUserByEmail(res, email, pass) {
    try {
        connection()
        var finded = false
        const allTeachers = await TeacherModel.find()
        for (var t in allTeachers)
            if (allTeachers[t].email === email && allTeachers[t].password === pass) {
                finded = true
                res.send({
                    user: allTeachers[t]
                })
            }
        const allStudents = await StudentModel.find()
        for (var s in allStudents)
            if (allStudents[s].email === email && allStudents[s].password === pass) {
                finded = true
                res.send({
                    user: allStudents[s]
                })
            }
        if (!finded)
            res.send({
                user: null
            })
    } catch (err) {
        console.error(err)
    }
}

async function findTeacherByEmail(res, email, pass) {
    try {
        connection()
        var finded = false
        const allTeachers = await TeacherModel.find()
        for (var t in allTeachers)
            if (allTeachers[t].email === email && allTeachers[t].password === pass) {
                finded = true
                res.send({
                    user: allTeachers[t]
                })
            }
        if (!finded)
            res.send({
                user: null
            })
    } catch (err) {
        console.error(err)
    }
}

async function findExamByPublicId(res, pId) {
    try {
        connection()
        var finded = false
        const allExams = await ExamModel.find()
        for (var e in allExams)
            if (allExams[e].public_id === pId) {
                finded = true
                res.send({
                    exam: allExams[e]
                })
            }
        if (!finded)
            res.send({
                exam: null
            })
    } catch (err) {
        console.error(err)
    }
}

async function findStudentByEmail(res, email, pass) {
    try {
        connection()
        var finded = false
        const allStudents = await StudentModel.find()
        for (var s in allStudents)
            if (allStudents[s].email === email && allStudents[s].password === pass) {
                finded = true
                res.send({
                    user: allStudents[s]
                })
            }
        if (!finded)
            res.send({
                user: null
            })
    } catch (err) {
        console.error(err)
    }
}

async function getAllStudents(res) {
    try {
        connection()
        const allStudents = await StudentModel.find()
        // console.log(allStudents)
        res.send(allStudents)
    } catch (err) {
        console.error(err)
    }
}

async function getAllExams(res) {
    try {
        connection()
        const allExams = await ExamModel.find()
        // console.log(allExams)
        res.send(allExams)
    } catch (err) {
        console.error(err)
    }
}