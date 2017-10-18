import React, { Component } from 'react';
import { map } from 'lodash';

import DemoOrdinatorListItem from './DemoOrdinatorListItem.js'

import './DemoOrdinator.css'


class DemoOrdinator extends Component {


  constructor(props) {
    super(props);
    this.onClickCheckbox = this.onClickCheckbox.bind(this);
    this.moveDemo = this.moveDemo.bind(this);
    this.onClickApply = this.onClickApply.bind(this);
  }

  render() {

    let list = map(this.props.demos, (demo, i) => {

      return <DemoOrdinatorListItem key={demo.id}
                                    demoName={demo.name}
                                    demoIncluded={demo.included}
                                    onClickCheckbox={this.onClickCheckbox(demo.id, i)}
                                    onClickMoveUp={this.moveDemo(demo.id, i, i-1)}
                                    onClickMoveDown={this.moveDemo(demo.id, i, i+1)}
                                    isFirstItem={i===0}
                                    isLastItem={i+1===this.props.demos.length}
        />;

    });

    return (
      <div className="DemoOrdinator">
        { list }
        <div className="btn-section">
          <button className="big-blue-btn"
                  onClick={this.onClickApply}
            >
            Apply
          </button>
        </div>
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

  moveDemo(demoId, oldIndex, newIndex) {
    return (ev) => {
      this.props.moveDemo(demoId, oldIndex, newIndex);
    };
  }

  onClickApply() {
    this.props.applyDemoSettings();
    this.props.closeAllPopups();
  }

}

export default DemoOrdinator;