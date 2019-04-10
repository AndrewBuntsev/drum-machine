import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PADS } from '../const/pads';



const DEFAULT_BACKGOUND = '#449988';
const PRESSED_BACKGOUND = '#66BBAA';

class Pad extends Component {

  constructor(props){
    super(props);

    this.state = { 
      background: DEFAULT_BACKGOUND,
      padConfig: PADS.find(p => p.keyTrigger === this.props.keyTrigger)
    };

    document.addEventListener('keydown', this.onKeyPress);
  }

  
  onKeyPress = (e) => {
    
    if (e.keyCode === this.state.padConfig.keyCode) {
      this.onMouseDown(e);
    }
  };

  onMouseDown = (e) => {
    this.setState({ background: PRESSED_BACKGOUND })
    document.getElementById(this.props.keyTrigger).play();
    this.props.padPressed(this.state.padConfig);
  };

  onMouseUp = (e) => this.setState({ background: DEFAULT_BACKGOUND });
  
  render() {
    
    return (
      <div className="drum-pad" style={{
        background: this.state.background,
        borderRadius: '3px',
        gridColumn: this.props.column.toString(),
        gridRow: this.props.row.toString(),
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#FFFFFF'}}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseUp}
        id={this.state.padConfig.id}>
        <div style={{marginTop: '15%'}}>
          {this.props.keyTrigger}
        </div>
        <audio className='clip' id={this.props.keyTrigger} src={this.state.padConfig.url}></audio>
      </div>
    );
  }
}


Pad.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  keyTrigger: PropTypes.string.isRequired,
  padPressed: PropTypes.func.isRequired
};



export default Pad;
