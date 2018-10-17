import connectToDb from '../db/connect'
import express from 'express'
let app = express();


app.get('/', function (req, res) {
  res.send('Hello lul!')
  connectToDb.call();
})

app.listen(3000, function () {
  console.log('Server up and running')
})