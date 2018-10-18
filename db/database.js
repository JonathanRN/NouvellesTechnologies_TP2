import MongoClient from 'mongodb';
import config from '../config/index';

let tp2db;
let dbo = null;

class database {

    connectToDb()  {
        try {
            MongoClient.connect(config.mongoUrl, { useNewUrlParser: true }, function(err, db) {
                tp2db = db;
                dbo = tp2db.db(config.dbName)
                if (err) throw err;
                console.log("Connected to DB!")
            });
        }
        catch (err) {
        console.log(err);
        }
    }

    createUser(name, routerRes) {
        let user = { name: name };
        dbo.collection("users").insertOne(user, function(err, res) {
        if (err) throw err;
        routerRes.send(`User: ${name} added!`)
        tp2db.close();
        });
    }
}

export default database;