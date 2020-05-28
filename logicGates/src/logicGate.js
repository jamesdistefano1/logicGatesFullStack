import React from 'react';



class logicGate extends React.Component{
    constructor(id, type, inGates, inVal, outGates, result){
      super();
      this.id = id; // represents the unique ID of the gate
      this.type = type; // determines what type of gate this is 
      this.inGates = inGates; // this will likely be an array of ints representing the IDs of the input gates
      this.inVal = inVal // represents the input values that are provided by the two input gates
      this.outGates = outGates; // will likely be an array of ints representing the IDs of the output gates
      this.result = result; // represents the value that is being output from this gate. Calculated in 'getResult'
    }
  
    getResult(inVal, type){ // this is getting the output value of a gate 
      // given the two inputs
      switch(type){
        case 'AND':
          if(inVal[0] == 1 && inVal[1] == 1){ // this is the only instance where an AND gate evaluates to TRUE
            return 1;
          }
          else{
            return 0;
          }
        case 'OR':
          if(inVal[0] == 0 && inVal[1] == 0){ // the only case for FALSE in an OR gate is both inputs being FALSE
            return 0;
          }
          else{
            return 1;
          }
        case 'XOR':
          if((inVal[0] == 0 && inVal[1] == 0) || (inVal[0] == 1 && inVal[1] == 1)){
            return 0;
          }
          else{
            return 1;
          }
        case 'NOT':
          if(inVal[0] == 0){
            return 1;
          }
          else{
            return 0;
          }
        case 'NAND':
          if(inVal[0] == 1 && inVal[1] == 1){ // this is the only instance where a NAND gate evaluates to FALSE
            return 0;
          }
          else{
            return 1;
          }
        case 'NOR':
          if(inVal[0] == 0 && inVal[1] == 0){ // the only case for FALSE in an OR gate is both inputs being FALSE
            return 1;
          }
          else{
            return 0;
          }
      }
    }


    callAPI(){
      fetch("http://localhost:9000/logicGateController")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}));
    }

    componentWillMount(){
      this.callAPI();
    }
    
  
    render(){ // I think we need to edit this right here thing to make it work
      /* so what we want, is for clicking a "Gate Generator" button on the canvas,
       to generate individual instances of this component with the needed properties. From there, we can try to have everything else
      handled within this render function it seems like. It seems like we should be able to localize all the logicGate moving stuff 
      to here, which would be good because then maybe we can modify props in house 
      */
    }
  }