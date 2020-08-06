import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>{this.props.title}</strong>
        </p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Text;
