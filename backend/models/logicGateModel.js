const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import logicGate from '../logicGates/src/logicGate.js';

const LogicGate = new Schema({
    gate: {type: mongoose.ObjectID, required: true},
    id: {type: Number, required: true},
    type: {type: String, required: true},
    inGates: {type: [Number], required: true},
    inVal: {type: [Number], required: true},
    theGate: {type: [logicGate], required: true}
});

module.exports = mongoose.model('LogicGate', logicGate);