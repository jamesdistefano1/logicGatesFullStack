const mongoose = require('mongoose');
constSchema = mongoose.Schema;
import assignmentSpec from '../logicGates/src/assignmentSpec.js';

// this is going to have either the student or teacher specifications, depending on whether the 'teacher' flag is true
// if isTeacher is false, then this is a student submission
// if isTeacher is true, then these are assignment requirements

const assignmentSpec = new Schema({
    isTeacher: {type: Boolean, required: true},
    gateTypes: {type: [String], required: true}, // this is a list of all the gate types that are involved in either the student submission, or requirements for the assignment
    gateCounts: {type: [Number], required: true}, // the idea here is that the indices in these two arrays are connected. This will have the counts for each type of gate
    assignment: {type: Number, required: true} // this is the assignment that these specifications are connected to
});

module.exports = mongoose.model('assignmentSpec', assignmentSpec);