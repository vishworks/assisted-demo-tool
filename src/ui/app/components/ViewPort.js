import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { forEach } from 'lodash';

import './ViewPort.css';

class ViewPort extends Component {
  render() {
    let renderers = [];
    forEach(this.props.currentPersonasUrls, item => {
      let className = 'view-frame';
      if (this.props.currentPersonaId === item.personaId) {
        className += ' current';
      }
      let iframe = (
        <iframe
          key={item.personaId}
          title={item.currentUrl}
          className={className}
          src={item.currentUrl}
        />
      );
      renderers.push(iframe);
    });

    return <div className="ViewPort">{renderers}</div>;
  }
}

ViewPort.propTypes = {
  currentPersonaId: PropTypes.string.isRequired,
  currentPersonasUrls: PropTypes.arrayOf(
    PropTypes.shape({
      personaId: PropTypes.string.isRequired,
      currentUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ViewPort;
