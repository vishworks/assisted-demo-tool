import React, { Component } from 'react';


import './MiniControlWidget.css'

class MiniControlWidget extends Component {


  constructor(props) {
    super(props);


  }

  render() {

    let className = ['MiniControlWidget'];
    className.push(this.props.status);

    let personasCount = this.props.personas.length;

    let personasRenderers = [];
    for (let i=0; i<personasCount; ++i) {
      personasRenderers.push(
        <div
          className="persona"
          onClick={() => { alert('Selecting persona: ' + this.props.personas[i].name) }}
          >
          {this.props.personas[i].label}
        </div>
      );
    }


    return (
      <div
        className={className.join(' ')}
        >
        <div>

          {personasRenderers}
          <div className="big-persona"></div>
          <div className="persona" onClick={this.props.onClickMaximize}></div>



        </div>
      </div>
    );
  }

}

export default MiniControlWidget;