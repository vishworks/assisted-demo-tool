import React, { Component } from 'react';




class StepContent extends Component {


  constructor(props) {
    super(props);
  }

  render() {

    let className = ['StepContent'];

    return (
      <div
        className={className.join(' ')}
        dangerouslySetInnerHTML={{ __html: this.props.content }}
        >
      </div>
    );
  }

}

export default StepContent;