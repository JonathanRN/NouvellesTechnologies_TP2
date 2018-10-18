import MongoClient from 'mongodb';

let tp2db;
let dbo = null;

class database {

    connectToDb()  {
        try {
            MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true }, function(err, db) {
                tp2db = db;
                dbo = tp2db.db(process.env.DATABASE_NAME)
                if (err) throw err;
                console.log("Connected to DB!")
            });
        }
        catch (err) {
        console.log(err);
        }
    }

    createUser(userToAdd, routerRes) {
        let user = { 
            name: userToAdd.name,
	        email: userToAdd.email,
	        pwd: userToAdd.pwd,
	        team: userToAdd.team,
	        score: userToAdd.score
        };

        /* https://teamtreehouse.com/community/
        how-would-i-check-to-see-if-an-email-entered-in-a-registration-form-was-already-in-the-a-mongo-database*/
        dbo.collection("users").findOne({ email: user.email }, function(err, result) {
            // result is true if the email exists.
            if (result) {
                    routerRes.send(`The email ${user.email} already exists.`);
            } else {
                dbo.collection("users").insertOne(user, function(err, res) {
                    if (err) throw err;
                    routerRes.send(`User: ${userToAdd.name} added!`);
                });
            }
        });
    }

    getUsers(routerRes){
        dbo.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            routerRes.json(result);
        });
    }
}

export default database;