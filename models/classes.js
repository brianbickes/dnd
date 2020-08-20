const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hitDie: {
        type: String,
        required: true
    },
    primaryAbility: {
        type: String,
        required: true
    },
    saves: {
    type: String,
    default: true
}
}, {
    timestamps: true
});

const Classes = mongoose.model('Classes', classesSchema);

//EXPORT ROUTER
module.exports = Classes; 