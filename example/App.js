import React, { Component } from 'react';
import { XrayProvider, Xray } from '../src';

export default class App extends Component {
  renderContent() {
    return (
      <div>
        <Xray
          label="parent"
          style={{
            backgroundColor: 'red',
            borderRadius: 20,
            padding: '20px'
          }}
        >
          <h2>Parent Content</h2>
          <Xray
            label="child1"
            style={{
              backgroundColor: 'green',
              borderRadius: 20,
              padding: '20px'
            }}
          >
            <h2>Child 1 Content</h2>
          </Xray>
          <Xray
            label="child2"
            style={{
              backgroundColor: 'purple',
              borderRadius: 20,
              padding: '20px'
            }}
          >
            <h2>Child 2 Content</h2>
            <Xray
              label="grandchild"
              style={{
                backgroundColor: 'orange',
                borderRadius: 20,
                padding: '20px'
              }}
            >
              <h2>Grandchild Content</h2>
            </Xray>
          </Xray>
        </Xray>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <h1>{'<XrayProvider>'}</h1>
          <XrayProvider>{this.renderContent()}</XrayProvider>
        </div>
        <div>
          <h1>{'<XrayProvider enabled>'}</h1>
          <XrayProvider enabled>{this.renderContent()}</XrayProvider>
        </div>
        <div>
          <h1>{'<XrayProvider enabled showLabels>'}</h1>
          <XrayProvider enabled showLabels>
            {this.renderContent()}
          </XrayProvider>
        </div>
        <div>
          <h1>{'<XrayProvider enabled showLabels hideContent>'}</h1>
          <XrayProvider enabled showLabels hideContent>
            {this.renderContent()}
          </XrayProvider>
        </div>
      </div>
    );
  }
}
