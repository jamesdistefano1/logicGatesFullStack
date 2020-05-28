/* So here's how this is going to go. This is going to take in three things.
- The student submission (using both the final results, as well as the number of each gate that is used.)
- The teacher desired results
- The teacher specifications (the number of gates of each type that are expected. )
-- These specifications will not be shown to the student, so they do not try to create the final result and then just add gates to match the specs
- And then it will make sure everything matches up.*/
import truthTable from '../logicGates/src/truthTable.js';
import assignmentSpec from '../logicGates/src/assignmentSpec.js';


class Grader extends React.Component {

    constructor(studentSub, teacherSub, studentSpecs, teacherSpecs, currAssign) {
        super();
        this.studentSub = studentSub; // this is the student truth table object
        this.teacherSub = teacherSub; // this is the teacher truth table object
        this.studentSpecs = studentSpecs; // this is the student assignment specification
        this.teacherSpecs = teacherSpecs; // this is the assignment requirements submitted by the teacher
        this.currAssign = currAssign; // this is the assignment the autograder is being used for 
    }

    evaluate() {
        if ((this.studentSub.assignment == this.currAssign && this.studentSpecs.assignment == currAssign) && (this.teacherSub.assignment == this.currAssign && this.teacherSpecs.assignment == currAssign)) { // checking to make sure we have the proper evaluation objects
            if (this.studentSub.values.length == this.teacherSub.values.length && this.studentSpecs.gateTypes.length == this.teacherSpecs.gateTypes.length) { // all of the array lengths must match up for this to be proper
                for (var i = 0; i < this.studentSub.values.length; i++) { // we are going to make sure literally every element matches. The truth tables should be the same length, and the gate types arrays should be the same length
                    // provided that the specification file is updated correctly, the gateTables and gateCounts arrays should be updated in tandem
                    if(this.studentSub.values[i] != this.teacherSub.values[i]){ // this is essentially checking to make sure all the truth table values in the student submission match up with the ones in the teacher submission
                        return false;
                    }
                }
                for(var j = 0; j < this.studentSpecs.gateTypes.length; j++){
                    if((this.studentSpecs.gateTypes[j] != this.teacherSpecs.gateTypes[j]) && (this.studentSpecs.gateCounts[j] != this.teacherSpecs.gateCounts[j])){
                        return false
                    }
                }
                return true; // this is only reached if we successfully get through both of the for loops
            }
        }
        else {
            return false;
        }
    }
}
