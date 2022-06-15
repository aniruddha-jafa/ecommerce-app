import express from 'express'

import { userRouter } from './routes/index'

// ----------------------------------------------------------------

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// route handlers
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' + new Date().toTimeString() })
})

export default app
