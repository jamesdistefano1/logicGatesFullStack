import React, { Component } from "react";
//import Tweet from './tewwt'
import Table from './table'
import Header from './header'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Teacher from "./teacher";
import Student from "./student";

class App extends Component{
    render() {
      return (
        <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Logic Gates Game</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/student" className="nav-link">Student</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/teacher" className="nav-link">Teacher</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/teacher" component={Teacher} />
          <Route path="/student" component={Student} />
        </div>
      </Router>
       );
      }
    }

export default App;
