import React, { Component } from 'react';


import './SidePopup.css'


class SidePopup extends Component {


  constructor(props) {
    super(props);
  }


  render() {

    let className = ['SidePopup'];

    return (
      <div className={className.join(' ')} style={{ display: this.props.open ? 'block' : 'none'}}>
        { this.props.children }
      </div>
    );
  }


}

export default SidePopup;