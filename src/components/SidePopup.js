import React, { Component } from 'react';


import './SidePopup.css'


class SidePopup extends Component {

  constructor(props) {
    super(props);
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePopup === this.props.popupId) {
      document.addEventListener('click', this.globalClickHandler);
    } else {
      document.removeEventListener('click', this.globalClickHandler);
    }
  }

  render() {

    let className = ['SidePopup'];
    if (this.props.className) {
      className.push(this.props.className);
    }
    return (
      <div className={className.join(' ')} style={{ display: this.props.activePopup === this.props.popupId ? 'block' : 'none'}}
        onClick={this.onClick}>
        { this.props.children }
      </div>
    );
  }

  globalClickHandler() {
    this.props.openPopup('');
  }

  onClick(ev) {
    if (!this.props.closeOnClick) {
      ev.nativeEvent.stopImmediatePropagation();
    }
  }


}

SidePopup.defaultProps = {
  closeOnClick: true
};

export default SidePopup;