var express = require('express');
var router = express.Router();
var db = require('../app/db');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );     
app.use(express.json());   

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next){
    res.send(req.body.name)
    
});

module.exports = router;