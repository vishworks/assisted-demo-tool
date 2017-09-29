import React, { Component } from 'react';


import './ControlWidget.css'

class ControlWidget extends Component {


  render() {

    let className = ['control-widget'];
    className.push(this.props.status);


    return (
      <div className={className.join(' ')}>
        Status: { this.props.status }
        <button onClick={this.props.onClickMinimize}> Minimize </button>
      </div>
    );
  }
}

export default ControlWidget;