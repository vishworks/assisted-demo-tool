import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash'



class List extends Component {


  render() {
    let className = ['List'];
    if (this.props.modelName) {
      className.push(this.props.modelName + 'List');
    }
    if (this.props.className) {
      className.push(this.props.className);
    }

    let renderers = map(this.props.model, this.props.mapFunction);

    return (
      <div className={className.join(' ')}>
        {renderers}
      </div>
    );
  }

}

List.propTypes = {
  modelName: PropTypes.string.isRequired,
  model: PropTypes.array.isRequired,
  mapFunction: PropTypes.func.isRequired,

  className: PropTypes.string
};

export default List;
