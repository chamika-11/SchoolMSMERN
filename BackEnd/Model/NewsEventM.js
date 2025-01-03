const mongoose = require('mongoose');

const { Schema } = mongoose;

const newseventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    }, { collection: 'NewsEvent' });

module.exports = mongoose.model('NewsEvent', newseventSchema);
