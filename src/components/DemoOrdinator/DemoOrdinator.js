import React, { Component } from 'react';


import DemoOrdinatorListItem from './DemoOrdinatorListItem.js'

import './DemoOrdinator.css'


class DemoOrdinator extends Component {


  constructor(props) {
    super(props);
    this.onClickCheckbox = this.onClickCheckbox.bind(this);
  }

  render() {

    let list = this.props.demos.map((demo, i) => {

      return <DemoOrdinatorListItem key={demo.id}
                                    demoName={demo.name}
                                    demoIncluded={demo.included}
                                    onClickCheckbox={this.onClickCheckbox(demo.id, i)}

        />;

    });

    return (
      <div className="DemoOrdinator">
        { list }
      </div>
    );
  }

  onClickCheckbox(demoId, demoIndex) {
    return (ev, checked) => {
      if (checked) {
        this.props.includeDemo(demoId, demoIndex);
      } else {
        this.props.excludeDemo(demoId, demoIndex);
      }
    };
  }

}

export default DemoOrdinator;