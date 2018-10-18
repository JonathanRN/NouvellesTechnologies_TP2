import database from '../db/database'
import express from 'express'
let router = express.Router();
let app = express();
let db = new database();

app.use(express.json());

router.get('/', function(req, res, next) {
    res.send('Home Page');
});

router.get('/users', function(req, res, next) {
    db.getUsers(res);
});

router.post('/users/create', function(req, res, next){
    db.createUser(req.body.name, res);
});

module.exports = router;