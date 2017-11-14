import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'



import './CustomCheckBox.css'


class CustomCheckBox extends PureComponent {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="CustomCheckBox"
           onClick={this.onClick}>
        { this.props.checked ? <i className="fa fa-check tick" /> : null }
      </div>
    );
  }

  onClick(ev) {
    this.props.onClick(ev, !this.props.checked);
  }
}

CustomCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired
};

CustomCheckBox.defaultProps = {
  checked: false
};

export default CustomCheckBox;