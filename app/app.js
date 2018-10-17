const express = require('express')
const app = express()

var usersRouter = require('./routes/users')

app.use('/users',usersRouter);

//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

app.listen(3000, function () {
  console.log('Server up and running')
})