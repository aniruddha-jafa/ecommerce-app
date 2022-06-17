import express from 'express'
import cors from 'cors'

import { userRouter } from './routes/index'

import type { ErrorRequestHandler } from 'express'
// ----------------------------------------------------------------

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// route handlers
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' + new Date().toTimeString() })
})

// default handler
const defaultErrandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

app.use(defaultErrandler)

export default app
