const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogicGate = new Schema({
    gate: {type: mongoose.ObjectID, required: true},
    id: {type: Number, required: true},
    type: {type: String, required: true},
    inGates: {type: [Number], required: true},
    inVal: {type: [Number], required: true}
});

module.exports = mongoose.model('LogicGate', LogicGate);