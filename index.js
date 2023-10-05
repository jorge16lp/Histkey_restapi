'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const keywords = require('./keywords.js')
const questions = require('./questions.js')
const demoTextLoader = require('./demoTextLoader.js')
const db = require('./db/db_methods.js')

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.listen(port, () => {
    // console.log(`API REST corriendo en http://localhost:${port}`)
    console.log(`API REST corriendo en https://histkey-restapi.onrender.com`)
})

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// obtener las keywords a partir del texto
app.post('/keywords/', (req, res) => {
    keywords.getKeyWords(res, req.body.theText)
})

// obtener las preguntas a partir del texto, las keywords y sus repeticiones
app.post('/questions/', (req, res) => {
    questions.getQuestions(res, req.body.theText, req.body.keywords, req.body.repetitions)
})

// obtener el texto de prueba
app.get('/read-demo-file/', (req, res) => {
    demoTextLoader.getDemoText(res)
})

// obtener usuario por email (creo que no se usa y en todo caso está mal => debería coger users (profesores y estudiantes) no solo uno)
// app.post('/find-user-by-email/', (req, res) => {
//     db.findUserByEmail(res, req.body.email, req.body.pass)
// })

// obtener profesor por email
app.post('/find-teacher-by-email/', (req, res) => {
    db.findTeacherByEmail(res, req.body.email, req.body.pass)
})

// obtener estudiante por email
app.post('/find-student-by-email/', (req, res) => {
    db.findStudentByEmail(res, req.body.email, req.body.pass)
})

// añadir usuario
app.post('/add-user/', (req, res) => {
    db.addUser(res, req.body.type, req.body.name, req.body.surname, req.body.email, req.body.pass)
})

// añadir examen
app.post('/add-exam/', (req, res) => {
    db.addExam(res, req.body.public_id, req.body.questions)
})

// obtener examen por id pública
app.post('/find-exam-by-publicId/', (req, res) => {
    db.findExamByPublicId(res, req.body.public_id)
})