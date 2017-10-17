import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'



import './SortButton.css'


class SortButton extends PureComponent {
  render() {
    return (
      <div className="SortButton">
        <i className="fa fa-caret-up" />
        <i className="fa fa-caret-down" />
      </div>
    );
  }
}

SortButton.propTypes = {
  //checked: PropTypes.bool.isRequired
};

SortButton.defaultProps = {
  //checked: false
};

export default SortButton;