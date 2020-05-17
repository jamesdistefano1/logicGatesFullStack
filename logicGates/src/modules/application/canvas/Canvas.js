import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import And from  './And.js';
import Or from  './Or.js';
import Nand from './Nand.js';
import Nor from './Nor.js';

function Canvas(){

  return(
    <div id="canvas" style={{height: '500px', width: '90%', position: 'relative', overflow: 'auto',  padding: '0'}}>
      <And />
      <Or />
      <Nand />
      <Nor />
    </div>
  );
}

export default Canvas;
