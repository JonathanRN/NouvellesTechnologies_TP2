import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
	email: String,
    pwd: String,
	team: String
})

let User = mongoose.model('user', UserSchema);

module.exports = User;