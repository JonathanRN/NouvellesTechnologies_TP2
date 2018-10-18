//import mongoose from 'mongoose';
import MongoClient from 'mongodb';
import config from '../config/index';

//mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        //await mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
        await MongoClient.connect(config.mongoUrl, function(err, db) {
            if (err) throw err;
            console.log("Connected to DB!")
            //db.close();
        });
    }
    catch (err) {
      console.log(err);
    }
}

export default connectToDb;