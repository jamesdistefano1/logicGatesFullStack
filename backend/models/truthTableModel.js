const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import truthTable from '../logicGates/src/truthTable.js'

const truthTable = new Schema({
    studentTable: {type: [Number], required: true},
    teacherTable: {type: [Number], required: true}
});

module.exports = mongoose.model('TruthTable', truthTable);