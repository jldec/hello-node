const app = require('express')()
const PORT = process.env.HTTP_PORT || 8080

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT)
console.log(`listening on ${PORT}`)
