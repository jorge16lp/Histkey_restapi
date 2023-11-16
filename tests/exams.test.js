const supertest = require('supertest')
const assert = require('assert')
const app = require('../index')

describe('Test de endpoint /exam/', () => {
  it('AÑADIR EXAMEN CORRECTO: debería agregar el examen correctamente', (done) => {
      const examData = {
        public_id: 'testing_id',
        questions: `Pregunta 1:opA,opB,opC,opD,A ---------- Pregunta 2:opA,opB,opC,opD,B ---------- Pregunta 3:opA,opB,opC,opD,D`
      }

      supertest(app)
        .post('/exam/')
        .send(examData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'exam'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.exam)

          // el public_id y las preguntas deberían ser los esperados
          assert.strictEqual(res.body.exam.public_id, examData.public_id)
          assert.deepStrictEqual(res.body.exam.questions, examData.questions)

          done()
        })
    }),
    it('AÑADIR EXAMEN YA EXISTENTE: debería no agregar el examen', (done) => {
      const examData = {
        public_id: 'testing_id',
        questions: `Pregunta 1:opA,opB,opC,opD,A ---------- Pregunta 2:opA,opB,opC,opD,B ---------- Pregunta 3:opA,opB,opC,opD,D`
      }

      supertest(app)
        .post('/exam/')
        .send(examData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'exam'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.exam)
          
          // debería devolver el código de usuario ya existente de mongoDB
          assert.ok(res.body.exam === '11000')

          done()
        })
    }),
    it('BUSCAR EXAMEN EXISTENTE: debería devolver el examen correctamente', (done) => {
      const publicId = 'testing_id'

      supertest(app)
        .get(`/exam/${publicId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'exam'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.exam)

          // el examen debería tener el public_id esperado
          assert.strictEqual(res.body.exam.public_id, publicId)

          done()
        })
    }),
    it('BUSCAR EXAMEN NO EXISTENTE: debería devolver null', (done) => {
      const publicId = 'noPublicId'

      supertest(app)
        .get(`/exam/${publicId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'exam'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.exam === null)

          done()
        })
    }),
    it('ELIMINAR EXAMEN EXISTENTE: debería devolver true', (done) => {
      const publicId = 'testing_id'

      supertest(app)
        .delete(`/exam/${publicId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'exam'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.exam)
          assert.ok(res.body.exam === true)

          done()
        })
    }),
    it('ELIMINAR EXAMEN NO EXISTENTE: debería devolver null', (done) => {
      const publicId = 'testing_id'

      supertest(app)
        .delete(`/exam/${publicId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'exam'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.exam === null)

          done()
        })
    })
})