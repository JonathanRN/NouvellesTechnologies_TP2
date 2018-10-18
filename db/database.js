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
                return true;
            });
        }
        catch (err) {
        console.log(err);
        return false;
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

        dbo.collection("users").insertOne(user, function(err, res) {
        if (err) throw err;
        routerRes.send(`User: ${userToAdd.name} added!`);
        });
    }

    getUsers(routerRes){
        dbo.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            routerRes.json(result);
          });
    }

    deleteUser(routerRes,name){
        let query = {name: name};
        dbo.collection("users").deleteOne(query, function(err, obj) {
            if (err) throw err;
            routerRes.send(obj);
          });
    }

    userLogin(routerRes, body){
        let query = {email: body.email};
        dbo.collection("users").findOne(query, function(err, obj) {
            if (err) throw err;
            if(obj)
            {    
                if(obj.pwd == body.pwd){
                    routerRes.send("Valid Login");
                }
                else{
                    routerRes.send("Invalid Password");
                }
            }
            else{
                routerRes.send("Invalid Email")
            }
          });
    }
    
}

export default database;