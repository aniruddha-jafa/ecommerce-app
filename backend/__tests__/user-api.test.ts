import request from 'supertest'

import app from '../src/app'

const agent = request(app)

/**@todo - for prototyping only */
it('can get hello response', async () => {
  const res = await agent.get('/')
  expect(res.status).toBe(200)

  const message = res.body.message + ''
  expect(message).not.toBeNull()
  expect(message.startsWith('Hello World!')).toBe(true)
})

it('can list users', async () => {
  const res = await agent.get('/api/users/')
  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(Array.isArray(res.body)).toBe(true)
})

/**@todo */
// it('can create user', async () => {
//   const testUser = {
//     email: 'test.user@12345.com',
//     password: '20cnO&9cbK',
//   }
//   const res = await agent.post('/api/users').send(testUser)
//   console.debug('Response BODY: ', res.body)
//   expect(res.status).toBe(200)
// })
