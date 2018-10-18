import bodyParser from 'body-parser'
import 'dotenv/config';
import database from '../db/database'
import usersRouter from '../routes/users'
//import indexRouter from '../routes/index'
import express from 'express'
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let db = new database();
db.connectToDb();

app.use('/users', usersRouter);
app.use('/users/', usersRouter);
//app.use('/', indexRouter);

app.get('/', function (req, res) {
  res.send('Hello lul!')
})

app.listen(3000, function () {
  console.log('Server up and running')
})