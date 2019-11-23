// const mongoose = require('mongoose');

// const initDB = () => {
//     mongoose.connect(
//         'mongodb://127.0.0.1:27017/dictionary',
//         { useNewUrlParser: true }
//     )
//     mongoose.connection.once('open', () => {
//         console.log('connected to database >>');
//     });

// }

// module.exports = initDB;

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://127.0.0.1:27017/dictionary';
module.exports = function (app) {
    MongoClient.connect(MONGO_URL)
        .then((connection) => {
            app.word = connection.collection("word");
            console.log("Database connection established")
        })
        .catch((err) => console.error(err))

};