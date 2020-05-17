import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Or(){

  return(
    <div>
      <Draggable grid={[20, 20]}>
        <img src={require('./OR.svg')} draggable = "false" width = '240' height = '120'/> 
      </Draggable>
    </div>
  );
}

export default Or;
