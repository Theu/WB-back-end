const mongoose = require('mongoose');

const initDB = () => {
    mongoose.connect(
        'mongodb+srv://macaco:6iP80O9su6yLZYR4@shared-dictionary-ymyl5.mongodb.net/test?retryWrites=true&w=majority',
        { useUnifiedTopology: true }
    );

    mongoose.connection.once('open', () => {
        console.log('eccoci connessi al DB');
    });
}

module.exports = initDB;