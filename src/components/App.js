import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import SuperButton from './Button';

const some = css`
  font-size: 22px;
  background-color: 'red';
  color: blue;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeSwich: true,
    }
  }

  swichType = () => this.setState(({ typeSwich }) => ({ typeSwich: !typeSwich }))

  render() {
    console.log(some);
    const { typeSwich } = this.state;
    return (
      <SuperButton
        label="Submit"
        onClick={this.swichType}
        type={typeSwich ? 'primary' : 'default' }
        customStyle={some}
      />
    );  
  }
}

export default App;