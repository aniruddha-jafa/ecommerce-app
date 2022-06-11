import express from 'express'

import { userRouter } from './routes/index'

// ----------------------------------------------------------------

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 5050

// route handlers
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' + new Date().toTimeString() })
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
