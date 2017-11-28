import React, { Component } from 'react';

import { map } from 'lodash';

import HighlightListItem from '../components/HighlightListItem.js';

class HighlightList extends Component {
  render() {
    let list = map(this.props.highlights, highlight => (
      <HighlightListItem text={highlight} />
    ));
    return <div className="HighlightList">{list}</div>;
  }
}

export default HighlightList;
