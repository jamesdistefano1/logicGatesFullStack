import React from 'react';






class assignmentSpec extends React.Component{
    constructor(isTeacher, gateTypes, gateCounts, assignment){
        super();
        this.isTeacher = isTeacher;
        this.gateTypes = gateTypes;
        this.gateCounts = gateCounts;
        this.assignment = assignment;
    }

    callAPI(){
        fetch("http://localhost:9000/assignmentSpecController")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount(){
        this.callAPI();
    }
}