import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'



import './SortButton.css'


class SortButton extends PureComponent {
  render() {
    return (
      <div className="SortButton">
        <i className={'fa fa-caret-up' + (this.props.disableUp ? ' disabled' : '')} onClick={this.props.onClickUp} />
        <i className={'fa fa-caret-down' + (this.props.disableDown ? ' disabled' : '')} onClick={this.props.onClickDown} />
      </div>
    );
  }
}

SortButton.propTypes = {
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
  disableUp: PropTypes.bool,
  disableDown: PropTypes.bool
};

SortButton.defaultProps = {
  disableUp: false,
  disableDown: false
};

export default SortButton;