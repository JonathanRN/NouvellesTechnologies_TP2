import Database from '../db/database'
import express from 'express'
let router = express.Router();
let app = express();
let db = new Database();

app.use(express.json());

router.get('/', function(req, res, next) {
    res.send('Home Page');
});

router.get('/users', function(req, res, next) {
    db.getUsers(res);
});

router.post('/users/create', function(req, res, next){
    db.createUser(req.body,function(){});
});

router.post('/users/delete', function(req, res, next) {
    db.deleteUser(res,req.body.name);
});

router.post('/users/login', function(req, res, next) {
    db.userLogin(res,req.body);
});

module.exports = router;