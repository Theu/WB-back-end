const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    word: String,
    gender: String,
    plural: String,
    function: String,
    translation: String,
    article: String
})

module.exports = mongoose.model('word', wordSchema)