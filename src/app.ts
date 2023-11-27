import express from 'express'
const app = express()

const add = (a: number, b: number): number => a + b

app.get('/', (_req, res) => {
  const result = add(2, 2)
  res.send(`2 plus 2 is ${result}`)
})

const PORT = 3000
app.listen(3000, () => console.log(`Server running on port ${PORT}`))
