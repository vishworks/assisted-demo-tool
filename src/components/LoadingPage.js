import React, { Component } from 'react';

import './LoadingPage.css'

class LoadingPage extends Component {


  render() {

    let className = ['LoadingPage'];


    return (
      <div className={className.join(' ')}>
        <h1>LOADING CONFIGURATION</h1>
      </div>
    );
  }


}

export default LoadingPage;