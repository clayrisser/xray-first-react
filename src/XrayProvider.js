import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

const XrayContext = createContext();

export default class XrayProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    enabled: PropTypes.bool
  };

  static defaultProps = {
    enabled: false
  };

  constext = {};

  render() {
    const { enabled } = this.props;
    this.context = {
      ...this.context,
      enabled
    };
    return (
      <XrayContext.Provider value={this.context}>
        {this.props.children}
      </XrayContext.Provider>
    );
  }
}

export { XrayContext };
