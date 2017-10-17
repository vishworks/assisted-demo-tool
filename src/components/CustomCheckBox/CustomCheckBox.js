import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'



import './CustomCheckBox.css'


class CustomCheckBox extends PureComponent {
  render() {
    return (
      <div className="CustomCheckBox">
        { this.props.checked ? <i className="fa fa-check tick" /> : null }
      </div>
    );
  }
}

CustomCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired
};

CustomCheckBox.defaultProps = {
  checked: false
};

export default CustomCheckBox;