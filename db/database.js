import MongoClient from 'mongodb';
import mongoose from 'mongoose';
import User from './user';

let tp2db;
let dbo = null;


class Database {

    connectToDb()  {
        try {
            mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function() {
                console.log("Connected to DB!")
            });
            /*MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true }, function(err, db) {
                tp2db = db;
                dbo = tp2db.db(process.env.DATABASE_NAME)
                if (err) throw err;
                console.log("Connected to DB!")
                return true;
            });*/
        }
        catch (err) {
        console.log(err);
        return false;
        }
    }

    createUser(userToAdd, routerRes) {
        let newUser = new User(userToAdd);

        /* https://teamtreehouse.com/community/
        how-would-i-check-to-see-if-an-email-entered-in-a-registration-form-was-already-in-the-a-mongo-database*/
        User.findOne({ email: newUser.email }, function(err, result) {
            // result is true if the email exists.
            if (result) {
                    routerRes.send(`The email ${newUser.email} already exists.`);
            } else {
                newUser.save(function (err, newUser) {
                    if (err) return console.error(err);
                    routerRes.send(`User: ${newUser.name} added!`);
                });
            }
        });
    }

    getUsers(routerRes){
        User.find(function(err, users){
            if(err) throw err;
            routerRes.json(users);
        })
    }

    deleteUser(routerRes,name){
        let query = {name: name};
        User.deleteOne(query, function(err, obj) {
            if (err) throw err;
            routerRes.send(obj);
          });
    }

    userLogin(routerRes, body){
        let query = {email: body.email};
        User.findOne(query, function(err, obj) {
            if (err) throw err;
            if(obj) {    
                if(obj.pwd == body.pwd) {
                    routerRes.send("Valid Login");
                } else {
                    routerRes.send("Invalid Password");
                }
            } else {
                routerRes.send("Invalid Email")
            }
          });
        }
}

export default Database;