import bodyParser from 'body-parser'
import database from '../db/database'
import router from '../routes/users'
import indexRouter from '../routes/index'
import express from 'express'
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let db = new database();
db.connectToDb();

app.use('/', router);


app.listen(3000, function () {
  console.log('Server up and running')
})