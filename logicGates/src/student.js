import React, { Component } from 'react';
//import Tweet from './tewwt'
import Table from './table'
import Header from './header'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';

/*
class Student extends React.Component{
  constructor(name, email){
    super();
    this.name = name;
    this.email = email;
  }

  callAPI(){
    fetch("http://localhost:9000/studentController")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }
}

*/




export default class Student extends Component {
    render() {
        return (
          <div className="">
            <Header />
            <Table /> 
            <Canvas />
          </div>
        )
    }
}
