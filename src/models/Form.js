const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    eboard: String,
    positiveText: String,
    negativeText: String,
    commentsText: String,
    anonymous: Boolean

});

module.exports = mongoose.model('Form', formSchema, 'Forms');