import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function And(){

  return(
    <div>
      <Draggable grid={[20, 20]}>
        <img src={require('./AND.svg')} draggable = "false" width = "240" height = "120" / > 
      </Draggable>
    </div>
  );
}

export default And;
