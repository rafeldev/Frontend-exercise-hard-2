import React, { Component } from 'react';
import { H5, Div, Img } from './styles';

class SocialItem extends Component {
  render() {
    return (
      <Div>
        <Img src={this.props.icon} alt="Icon" />
        <H5>{this.props.url}</H5>
      </Div>
    );
  }
}

export default SocialItem;
