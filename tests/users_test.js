const supertest = require('supertest')
const assert = require('assert')
const app = require('../index')

describe('Test de endpoint /teacher/', () => {
  it('BUSCAR PROFESOR EXISTENTE: debería devolver el usuario del profesor correctamente', (done) => {
      const email = 'testing'
      const password = 'testing'

      supertest(app)
        .get(`/teacher/?email=${email}&pass=${password}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)

          // el usuario debería tener email y password esperados
          assert.strictEqual(res.body.user.email, email)
          assert.strictEqual(res.body.user.password, password)

          done()
        })
    }),
    it('BUSCAR PROFESOR NO EXISTENTE: debería devolver null', (done) => {
      const email = 'noEmail'
      const password = 'noPassword'

      supertest(app)
        .get(`/teacher/?email=${email}&pass=${password}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user === null)

          done()
        })
    }),
    it('BUSCAR PROFESOR NO COINCIDEN EMAIL Y PASSWORD: debería devolver null', (done) => {
      const email = 'testing'
      const password = 'noPassword'

      supertest(app)
        .get(`/teacher/?email=${email}&pass=${password}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user === null)

          done()
        })
    }),
    it('ELIMINAR PROFESOR EXISTENTE: debería devolver true', (done) => {
      const email = 'testing'

      supertest(app)
        .delete(`/teacher/${email}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)
          assert.ok(res.body.user === true)

          done()
        })
    }),
    it('ELIMINAR PROFESOR NO EXISTENTE: debería devolver null', (done) => {
      const email = 'noEmail'

      supertest(app)
        .delete(`/teacher/${email}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user === null)

          done()
        })
    })
})

describe('Test de endpoint /student/', () => {
  it('BUSCAR ESTUDIANTE EXISTENTE: debería devolver el usuario del estudiante correctamente', (done) => {
      const email = 'testing'
      const password = 'testing'

      supertest(app)
        .get(`/student/?email=${email}&pass=${password}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)

          // el usuario debería tener email y password esperados
          assert.strictEqual(res.body.user.email, email)
          assert.strictEqual(res.body.user.password, password)

          done()
        })
    }),
    it('BUSCAR ESTUDIANTE NO EXISTENTE: debería devolver null', (done) => {
      const email = 'noEmail'
      const password = 'noPassword'

      supertest(app)
        .get(`/student/?email=${email}&pass=${password}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user === null)

          done()
        })
    }),
    it('BUSCAR ESTUDIANTE NO COINCIDEN EMAIL Y PASSWORD: debería devolver null', (done) => {
      const email = 'testing'
      const password = 'noPassword'

      supertest(app)
        .get(`/student/?email=${email}&pass=${password}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user === null)

          done()
        })
    }),
    it('ELIMINAR ESTUDIANTE EXISTENTE: debería devolver true', (done) => {
      const email = 'testing'

      supertest(app)
        .delete(`/student/${email}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)
          assert.ok(res.body.user === true)

          done()
        })
    }),
    it('ELIMINAR ESTUDIANTE NO EXISTENTE: debería devolver null', (done) => {
      const email = 'noEmail'

      supertest(app)
        .delete(`/student/${email}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user === null)

          done()
        })
    })
})

describe('Test de endpoint /user/', () => {
  it('AÑADIR USUARIO PROFESOR CORRECTO: debería agregar un usuario teacher correctamente', (done) => {
      const userData = {
        type: 'teacher',
        name: 'user testing',
        surname: 'testing',
        email: 'testing',
        pass: 'testing'
      }

      supertest(app)
        .post('/user/')
        .send(userData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)

          // el usuario debería tener email y password esperados
          assert.strictEqual(res.body.user.name, userData.name)
          assert.strictEqual(res.body.user.surname, userData.surname)
          assert.strictEqual(res.body.user.email, userData.email)
          assert.strictEqual(res.body.user.password, userData.pass)

          done()
        })
    }),
    it('AÑADIR USUARIO PROFESOR YA EXISTENTE: debería no agregar al usuario teacher', (done) => {
      const userData = {
        type: 'teacher',
        name: 'user testing',
        surname: 'testing',
        email: 'testing',
        pass: 'testing'
      }

      supertest(app)
        .post('/user/')
        .send(userData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)

          // debería devolver el código de usuario ya existente de mongoDB
          assert.ok(res.body.user === '11000')

          done()
        })
    }),
    it('AÑADIR USUARIO ESTUDIANTE CORRECTO: debería agregar un usuario student correctamente', (done) => {
      const userData = {
        type: 'student',
        name: 'user testing',
        surname: 'testing',
        email: 'testing',
        pass: 'testing'
      }

      supertest(app)
        .post('/user/')
        .send(userData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)

          // el usuario debería tener email y password esperados
          assert.strictEqual(res.body.user.name, userData.name)
          assert.strictEqual(res.body.user.surname, userData.surname)
          assert.strictEqual(res.body.user.email, userData.email)
          assert.strictEqual(res.body.user.password, userData.pass)

          done()
        })
    }),
    it('AÑADIR USUARIO ESTUDIANTE YA EXISTENTE: debería no agregar al usuario student', (done) => {
      const userData = {
        type: 'student',
        name: 'user testing',
        surname: 'testing',
        email: 'testing',
        pass: 'testing'
      }

      supertest(app)
        .post('/user/')
        .send(userData)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)

          // la respuesta debería ser un objeto con la propiedad 'user'
          assert.strictEqual(typeof res.body, 'object')
          assert.ok(res.body.user)

          // debería devolver el código de usuario ya existente de mongoDB
          assert.ok(res.body.user === '11000')

          done()
        })
    })
})