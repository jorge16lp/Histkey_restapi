const supertest = require('supertest')
const assert = require('assert')
const app = require('../index')

describe('Test de endpoint /read-demo-file/', () => {
  it('TEXTO DE DEMO: Debería devolver el texto correctamente', (done) => {
    supertest(app)
      .get('/read-demo-file/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        
        // la respuesta debería ser un objeto con la propiedad 'demoText'
        assert.strictEqual(typeof res.body, 'object')
        assert.ok(res.body.demoText)

        done()
      })
  })
})
