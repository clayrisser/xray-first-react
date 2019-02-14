import React, { Component } from 'react';
import { XrayProvider, Xray } from '../src';

export default class App extends Component {
  render() {
    return (
      <XrayProvider enabled hideContent>
        <Xray
          label="parent"
          style={{
            backgroundColor: 'red',
            borderRadius: 20
          }}
        >
          Hello
          <Xray
            label="child"
            style={{
              backgroundColor: 'blue',
              borderRadius: 20
            }}
          >
            World
          </Xray>
        </Xray>
      </XrayProvider>
    );
  }
}
