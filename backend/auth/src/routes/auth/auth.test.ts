import app from '@/app'
import request from 'supertest'

describe('Express - Auth', () => {
  beforeAll(async () => {
    // app.get('/test', expressVerifyToken, (_req: Request, res: Response) => {
    //   res.status(200).send()
    // })
  })

  it('should authenticate a valid username', async () => {
    const response = await request(app)
      .post('/auth')
      .send({
        username: 'test',
        password: 'test'
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('accessToken')
    expect(response.body).toHaveProperty('refreshToken')
  })

  it('should not authenticate a invalid user', async () => {
    const response = await request(app)
      .post('/auth')
      .send({
        username: 'invalid-username',
        password: 'invalid-pass'
      })

    expect(response.status).toBe(401)
    expect(response.body.message).toBe('Credentials invalid.')
  })

  it('should get user data', async () => {
    const response = await request(app)
      .post('/auth')
      .send({
        username: 'test',
        password: 'test'
      })
    expect(response).not.toBe(response)
  })
})
