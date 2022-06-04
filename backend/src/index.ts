import express from 'express'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5050

app.get('/', (req, res) => {
  res.json({ message: 'Hello World! Changes hh' })
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
