import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HtmlContent extends Component {
  render() {
    let filteredProps = Object.assign({}, this.props);
    delete filteredProps.html;
    return (
      <div
        {...filteredProps}
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  }
}

HtmlContent.propTypes = {
  html: PropTypes.string.isRequired
};

export default HtmlContent;
