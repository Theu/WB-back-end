const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Word = new Schema({
    word_gender: {
        type: string
    },
    word_lemma: {
        type: string
    },
    word_article: {
        type: string
    },
    word_plural: {
        type: string
    },
    word_type: {
        type: string
    },
    word_translation: {
        type: string
    },
}); 

module.export = mongoose.model('Word', Word);
