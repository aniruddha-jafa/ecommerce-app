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
