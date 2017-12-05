import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { forEach } from 'lodash';

import './ViewPort.css';

class ViewPort extends Component {
  render() {
    let renderers = [];
    forEach(this.props.urls, url => {
      let className = 'view-frame';
      if (this.props.currentUrl === url) {
        className += ' current';
      }
      let iframe = (
        <iframe key={url} title={url} className={className} src={url} />
      );
      renderers.push(iframe);
    });

    return <div className="ViewPort">{renderers}</div>;
  }
}

ViewPort.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ViewPort;
