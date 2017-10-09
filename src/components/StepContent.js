import React, { Component } from 'react';




class StepContent extends Component {

  render() {

    let className = ['StepContent'];

    return (
      <div
        className={className.join(' ')}
        dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
    );
  }

}

export default StepContent;