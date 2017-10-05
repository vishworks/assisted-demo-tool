import React, { Component } from 'react';

import { forEach } from 'lodash'


import './ViewPort.css'

class ViewPort extends Component {


  constructor(props) {
    super(props);
  }


  render() {

    let className = ['ViewPort'];

    let renderers = [];
    forEach(this.props.urls, (url) => {
      let iframe =
        <iframe
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