import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ScoreSchema = new Schema({
    name: String,
    score: Number
})

let Score = mongoose.model('score', ScoreSchema);

module.exports = Score;