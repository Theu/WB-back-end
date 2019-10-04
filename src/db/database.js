const mongoose = require('mongoose');

const initDB = (app) => {
    mongoose.connect(
        'mongodb://127.0.0.1:27017/dictionary',
        { useNewUrlParser: true }
    )
    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

}

module.exports = initDB;
