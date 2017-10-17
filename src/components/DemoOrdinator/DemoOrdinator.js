import React, { Component } from 'react';


import DemoOrdinatorListItem from './DemoOrdinatorListItem.js'

import './DemoOrdinator.css'


class DemoOrdinator extends Component {


  render() {

    let list = this.props.demos.map((demo) => {
      return <DemoOrdinatorListItem demoName={demo.name} />

    });

    return (
      <div className="DemoOrdinator">
        { list }
      </div>
    );
  }

}

export default DemoOrdinator;