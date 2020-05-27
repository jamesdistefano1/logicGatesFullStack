import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class Wire extends React.Component{


  render(){
  
    return(
      <div>
        <Draggable grid={[20, 20]} defaultPosition={{x: 0, y: 0}}>
          <img id = 'start' src={require('./WIRE_NODE.svg')} draggable = "false" width = '40' height = '40'/>
        </Draggable>
        <svg>
          <line id = 'wire' x1='0' x2='0' y1='200' x2='200' stroke="black" strokeWidth={2} />
        </svg>
        <Draggable grid={[20, 20]} defaultPosition={{x: 0, y: 0}}>
          <img id = 'end' src={require('./WIRE_NODE.svg')} draggable = "false" width = '40' height = '40'/>
        </Draggable>
      </div>

    );
  }
}

export default Wire;
