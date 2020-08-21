const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment; 