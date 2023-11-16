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

// app.use(cors({
//     origin: 'http://localhost:3000/Histkey_webapp',
//     // origin: 'https://jorge16lp.github.io/Histkey_webapp/'
// }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
    console.log(`API REST corriendo en https://histkey-restapi.onrender.com`)
})

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// TEXT
// obtener el texto de prueba
app.get('/read-demo-file/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    demoTextLoader.getDemoText().then(obj => res.send({
        demoText: obj
    }))
})

// KEYWORDS
// obtener las keywords a partir del texto
app.post('/keywords/', (req, res) => {
    keywords.getKeyWords(req.body.theText).then(obj => res.send({
        keywords: obj
    }))
})

// QUESTIONS
// obtener las preguntas a partir del texto, las keywords y sus repeticiones
app.post('/questions/', (req, res) => {
    questions.getQuestions(req.body.theText, req.body.keywords, req.body.repetitions).then(obj => res.send({
        questions: obj
    }))
})

// USERS
// obtener profesor por email
app.get('/teacher/', (req, res) => {
    const email = req.query.email
    const pass = req.query.pass
    db.findTeacherByEmail(email, pass).then(obj => res.send({
        user: obj
    }))
})

// obtener estudiante por email
app.get('/student/', (req, res) => {
    const email = req.query.email
    const pass = req.query.pass
    db.findStudentByEmail(email, pass).then(obj => res.send({
        user: obj
    }))
})

// añadir usuario
app.post('/user/', (req, res) => {
    db.addUser(req.body.type, req.body.name, req.body.surname, req.body.email, req.body.pass).then(obj => res.send({
        user: obj
    }))
})

// eliminar profesor por email (para testing)
app.delete('/teacher/:email', (req, res) => {
    const email = req.params.email
    db.deleteTeacherByEmail(email).then(obj => res.send({
        user: obj
    }))
})

// eliminar estudiante por email (para testing)
app.delete('/student/:email', (req, res) => {
    const email = req.params.email
    db.deleteStudentByEmail(email).then(obj => res.send({
        user: obj
    }))
})

// EXAMS
// añadir examen
app.post('/exam/', (req, res) => {
    db.addExam(req.body.public_id, req.body.questions).then(obj => res.send({
        exam: obj
    }))
})

// eliminar examen (para testing)
app.delete('/exam/:id', (req, res) => {
    const public_id = req.params.id
    db.deleteExamByPublicId(public_id).then(obj => res.send({
        exam: obj
    }))
})

// obtener examen por id pública
app.get('/exam/:id', (req, res) => {
    const public_id = req.params.id
    // console.log(public_id)
    db.findExamByPublicId(public_id).then(obj => res.send({
        exam: obj
    }))
})

module.exports = app