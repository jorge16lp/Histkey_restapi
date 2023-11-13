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
    console.log(`API REST corriendo en http://localhost:${port}`)
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

// obtener profesor por email
app.get('/teacher/', (req, res) => {
    const email = req.query.email
    const pass = req.query.pass
    db.findTeacherByEmail(res, email, pass)
})

// obtener estudiante por email
app.get('/student/', (req, res) => {
    const email = req.query.email
    const pass = req.query.pass
    db.findStudentByEmail(res, email, pass)
})

// añadir usuario
app.post('/user/', (req, res) => {
    db.addUser(res, req.body.type, req.body.name, req.body.surname, req.body.email, req.body.pass)
})

// añadir examen
app.post('/exam/', (req, res) => {
    db.addExam(res, req.body.public_id, req.body.questions)
})

// obtener examen por id pública
app.get('/exam/:id', (req, res) => {
    const public_id = req.params.id
    // console.log(public_id)
    db.findExamByPublicId(res, public_id)
})