import React, { Component } from 'react';


import './FloatingHamburgerBtn.css'

class FloatingHamburgerBtn extends Component {


  constructor(props) {
    super(props);

  }

  render() {

    let className = ['FloatingHamburgerBtn'];

    

    return (
      <div
        className={className.join(' ')}
        onClick={this.props.onClick}
        >

        <div style={{ display: 'none' }}>
          &#x1f86c;
        </div>
        <div style={{ display: 'block' }}>
          &#x2630;
        </div>

      </div>
    );
  }

}

export default FloatingHamburgerBtn;