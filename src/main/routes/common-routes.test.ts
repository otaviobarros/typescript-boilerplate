import request from 'supertest'
import app from '../config/app'

describe('Common Routes', () => {
  test('Should return status code 200 on success', async () => {
    await request(app).get('/api/').expect(200)
  })
})
