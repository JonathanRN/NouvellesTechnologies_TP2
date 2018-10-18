import bodyParser from 'body-parser'
import 'dotenv/config';
import database from '../db/database'
import router from '../routes/users'
import express from 'express'
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

new database().connectToDb(router);

app.use('/', router);

app.listen(3000, function () {
  console.log('Server up and running')
})