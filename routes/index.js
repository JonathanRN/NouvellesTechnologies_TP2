import database from '../db/database'
import express from 'express'
let router = express.Router();
let app = express();

app.use(express.json());

router.get('/', function(req, res, next) {
    res.send('Home Page');
});

module.exports = router;