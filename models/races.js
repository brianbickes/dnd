const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const racesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    traits: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Races = mongoose.model('Races', racesSchema);

module.exports = Races; 