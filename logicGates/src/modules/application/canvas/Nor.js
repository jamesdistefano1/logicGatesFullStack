import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
//import logicGate from './logicGate.js'

function Nor(){

  return(
    <div>
      <Draggable grid={[20, 20]}>
        <img src={require('./NOR.svg')} draggable = "false" width = '240' height = '120'/> 
      </Draggable>
    </div>
  );
}

export default Nor;
