import React, { Component } from 'react';

//import './Comment.css'


class Comment extends Component {


  render() {
    let className = ['Comment'];
    if (this.props.className) {
      className.push(this.props.className);
    }

    return (
      <div className={className.join(' ')}
           style={{ display:'flex', flexDirection: 'row', marginTop: '10px', padding: '20px'}}>
        <div>
          <div
            className="PersonaAvatar"
            style={{ backgroundImage: 'url(\'img/user-1.jpg\')', minWidth: '40px', maxWidth: '40px', minHeight: '40px', maxHeight: '40px', borderWidth: '1px', marginRight: '20px' }}>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '16px'}}>Carol Schmidt</div>
          <div>Business Manager</div>
          <div style={{ marginTop: '20px' }}>
            Lorem ipsum dolor sit amet, sociis et, euismod elit, erat convallis fusce pellentesque adipisci, aliquam orci libero dictumst ornare id arcu, fames id. Velit quis eu pellentesque mauris, dignissim donec, tristique dapibus praesent duis tristique.
          </div>
        </div>
      </div>
    );
  }

}

export default Comment;