import React, { Component } from 'react';


import './FloatingButton.css'

class FloatingButton extends Component {

  render() {

    let className = ['FloatingButton'];

    return (
      <div
        className={className.join(' ')}
        onClick={this.props.onClick}
        >
        <i className={this.props.iconClassName}/>
      </div>
    );
  }

}

export default FloatingButton;