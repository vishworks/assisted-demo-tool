import React, { Component } from 'react';

import HorizontalDemoListContainer from '../containers/HorizontalDemoListContainer.js'


import './ControlPage.css'

class ControlPage extends Component {


  constructor(props) {
    super(props);

  }

  render() {

    let className = ['ControlPage'];


    return (
      <div className={className.join(' ')}>
        <div className="header">

          <HorizontalDemoListContainer />
        </div>
        <div className="small-row">


        </div>
        <div className="main-content">


        </div>
      </div>
    );
  }


}

export default ControlPage;
