import React, { Component } from 'react';

import { forEach } from 'lodash'


import './ViewPort.css'

class ViewPort extends Component {

  render() {

    let className = ['ViewPort'];

    let renderers = [];
    forEach(this.props.urls, (url) => {
      let iframe =
        <iframe
          key={url}
          title={url}
          className="view-frame"
          src={url}
          style={{ display: this.props.currentUrl === url ? 'block' : 'none'}}
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