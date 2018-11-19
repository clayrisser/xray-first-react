import React, { Component } from 'react';
import { XrayProvider, Xray } from '../src';

export default class App extends Component {
  render() {
    return (
      <XrayProvider enabled>
        <Xray
          label="content"
          height="50px"
          style={{
            backgroundColor: 'red',
            borderRadius: 20
          }}
        >
          Hello, world!
        </Xray>
      </XrayProvider>
    );
  }
}
