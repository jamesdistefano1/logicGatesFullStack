import React, { Component } from 'react';
import Tweet from './tewwt'
import Table from './table'
import Header from './header'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';

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