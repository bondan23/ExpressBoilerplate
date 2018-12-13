import parser from 'body-parser'
import express from 'express'

const app = express()

// Using json parser
app.use(parser.json())

app.get('/', (_, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000!`)
})
