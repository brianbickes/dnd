const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    range: {
        type: String,
        default: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Spells = mongoose.model('Spells', spellsSchema);

module.exports = Spells; 