import React, { Component } from 'react';
import { Title, H2red, H2grey } from './styles';

class Titles extends Component {
  render() {
    return (
      <Title>
        <H2red>{this.props.first}</H2red>
        <H2grey>{this.props.second}</H2grey>
      </Title>
    );
  }
}

export default Titles;
