import React, { Component } from 'react';


import './SidePopup.css'


class SidePopup extends Component {

  render() {

    let className = ['SidePopup'];
    if (this.props.className) {
      className.push(this.props.className);
    }

    return (
      <div className={className.join(' ')} style={{ display: this.props.open ? 'block' : 'none'}}>
        { this.props.children }
      </div>
    );
  }


}

export default SidePopup;