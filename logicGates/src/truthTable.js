import React from 'react';

class truthTable extends React.Component{
    constructor(isTeacher, values, assignment, student){
        super();
        this.isTeacher = isTeacher;
        this.values = values;
        this.assignment = assignment; // represents what assignment this truth table is associated with
        this.student = student; // represents what student this is associated with
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount(){
        this.callAPI();
    }
}