const app = require('express')()
const PORT = process.env.HTTP_PORT || 8080

app.get('/*', (req, res) => { res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
</head>
<body style="font-family:sans-serif; font-size:large;">
  <h1>Hello ${req.path.slice(1)}</h1>
  ${new Date()}
</body>
</html>
`)})

app.listen(PORT)
console.log(`listening on ${PORT}`)