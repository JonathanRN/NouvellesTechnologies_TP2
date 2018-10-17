const express = require('express')
const app = express()

var bodyParser = require('body-parser')

app.use( bodyParser.json() );     
app.use(express.json());       

var usersRouter = require('../routes/users');
var indexRouter = require('../routes/index');

app.use('/users',usersRouter);
app.use('/users/',usersRouter);
app.use('/',indexRouter);


app.listen(3000, function () {
  console.log('Server up and running')
})