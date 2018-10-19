import mongoose from 'mongoose';
import User from './user';

class Database {

    connectToDb()  {
        try {
            mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function() {
                console.log("Connected to DB!")
            });
        }
            catch (err) {
            console.log(err);
        }
    }

    connectToTestDb()  {
        try {
            mongoose.connect("mongodb://localhost:27017/tp2db_tests", { useNewUrlParser: true });
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function() {
                console.log("Connected to test DB!")
            });
        }
            catch (err) {
            console.log(err);
        }
    }

    createUser(userToAdd,callback) {
        let newUser = new User(userToAdd);

        /* https://teamtreehouse.com/community/
        how-would-i-check-to-see-if-an-email-entered-in-a-registration-form-was-already-in-the-a-mongo-database*/
        User.findOne({ email: newUser.email }, function(err, result) {
            // result is true if the email exists.
            if (result) {
                    //routerRes.send(`The email ${newUser.email} already exists.`);
                    console.log(`The email ${newUser.email} already exists.`)
                    callback(false);
            } else {
                newUser.save(function (err, newUser) {
                    if (err) return console.error(err);
                    //routerRes.send(`User: ${newUser.name} added!`);
                    console.log(`User: ${newUser.name} added!`)
                    callback(true);
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