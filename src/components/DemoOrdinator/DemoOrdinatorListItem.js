import React, { Component } from 'react';


import CustomCheckBox from '../CustomCheckBox/CustomCheckBox.js'
import SortButton from '../SortButton/SortButton.js'

import './DemoOrdinatorListItem.css'

class DemoOrdinatorListItem extends Component {


  render() {


    return <div className="DemoOrdinatorListItem">
      <CustomCheckBox />
      <div className="demo-name">{this.props.demoName}</div>
      <SortButton />
    </div>;



  }

}

export default DemoOrdinatorListItem;