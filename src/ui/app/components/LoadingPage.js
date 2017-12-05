import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LoadingPage.css';

class LoadingPage extends Component {
  render() {
    let className = ['LoadingPage'];
    let child = <h1>LOADING CONFIGURATION</h1>;
    if (this.props.errorMessage) {
      child = (
        <div className="error-container">
          <h1>Configuration errors:</h1>
          <pre>{this.props.errorMessage}</pre>
        </div>
      );
    }

    return <div className={className.join(' ')}>{child}</div>;
  }
}

LoadingPage.propTypes = {
  errorMessage: PropTypes.string
};

export default LoadingPage;
