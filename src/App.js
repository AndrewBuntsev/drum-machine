import React, { Component } from 'react';
import './App.css';

import Pad from './components/Pad';


const displayStyle = {
  background: '#999999',
  width: '200px',
  height: '50px',
  borderRadius: '5px',
  margin: 'auto',
  padding: '5px',
  color: '#2233AA'
};

const padsGridStyle = {
  background: '#39393b',
  width: '400px',
  height: '300px',
  borderRadius: '15px',
  margin: 'auto',
  marginTop: '5px',
  display: 'grid',
  padding: '20px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  gridColumnGap: '35px',
  gridRowGap: '35px'
};


function padPressed(padConfig){
  document.getElementById('display').innerHTML = padConfig.id;
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{background: '#456789'}}>
        <div id='drum-machine'>
          <div id='display' style={displayStyle}></div>
          <div id='drum-pads' style={padsGridStyle}>
            <Pad row={1} column={1} keyTrigger='Q' padPressed={padPressed}/>
            <Pad row={1} column={2} keyTrigger='W' padPressed={padPressed}/>
            <Pad row={1} column={3} keyTrigger='E' padPressed={padPressed}/>
            <Pad row={2} column={1} keyTrigger='A' padPressed={padPressed}/>
            <Pad row={2} column={2} keyTrigger='S' padPressed={padPressed}/>
            <Pad row={2} column={3} keyTrigger='D' padPressed={padPressed}/>
            <Pad row={3} column={1} keyTrigger='Z' padPressed={padPressed}/>
            <Pad row={3} column={2} keyTrigger='X' padPressed={padPressed}/>
            <Pad row={3} column={3} keyTrigger='C' padPressed={padPressed}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
