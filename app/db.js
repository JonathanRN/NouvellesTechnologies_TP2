var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tp2db";
var dbo;
var db;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    this.db = db;
    dbo = db.db("tp2db");
    
  });

  function createUser(name)
  {
    user = { name: name };
    dbo.collection("users").insertOne(user, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }

  