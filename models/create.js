const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createSchema = new Schema({
    userclass: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    cantrip1: {
        type: String,
        required: true
    },
    cantrip2: {
        type: String,
        required: true
    },
    firstlevelspell: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    description: {
    type: String,
    default: true
},
username: {
    type: String,
    default: true
},
    image: {
    type: String
}
}, {
    timestamps: true
});

const Create = mongoose.model('Create', createSchema);

//EXPORT ROUTER
module.exports = Create; 