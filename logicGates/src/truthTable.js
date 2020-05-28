import React from 'react';

class truthTable extends React.Component{
    constructor(studentVals, teacherVals, assignment, student){
        super();
        this.studentVals = studentVals;
        this.teacherVals = teacherVals;
        this.assignment = assignment; // represents what assignment this truth table is associated with
        this.student = student; // represents what student this is associated with
    }
}