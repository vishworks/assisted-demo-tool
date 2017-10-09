import React, { Component } from 'react';

import { forEach } from 'lodash'


import './ViewPort.css'

class ViewPort extends Component {

  render() {

    let className = ['ViewPort'];

    let renderers = [];
    forEach(this.props.urls, (url) => {
      let className = 'view-frame';
      if (this.props.currentUrl === url) {
        className += ' current';
      }
      let iframe =
        <iframe
          key={url}
          title={url}
          className={className}
          src={url}
          />;
      renderers.push(iframe);
    });

    return (
      <div className={className.join(' ')}>
        {renderers}
      </div>
    );
  }


}

export default ViewPort;