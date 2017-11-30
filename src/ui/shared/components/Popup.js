import React, { Component } from 'react';
import { isFunction } from 'lodash';

import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // on open and on close behaviors
    if (nextProps.activePopup === this.props.popupId) {
      document.addEventListener('click', this.globalClickHandler);
      isFunction(this.props.onOpen) && this.props.onOpen();
    } else {
      document.removeEventListener('click', this.globalClickHandler);
      isFunction(this.props.onClose) && this.props.onClose();
    }
  }

  render() {
    let className = ['Popup'];
    if (this.props.className) {
      className.push(this.props.className);
    }
    let style =
      this.props.activePopup !== this.props.popupId
        ? { display: 'none' }
        : undefined;
    return (
      <div className={className.join(' ')} style={style} onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }

  globalClickHandler() {
    this.props.closeAllPopups();
  }

  onClick(ev) {
    if (!this.props.closeOnClick) {
      ev.nativeEvent.stopImmediatePropagation();
      ev.stopPropagation();
      ev.nativeEvent.stopPropagation();
    }
  }
}

Popup.defaultProps = {
  closeOnClick: true
};

export default Popup;
