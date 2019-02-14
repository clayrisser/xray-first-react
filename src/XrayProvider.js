import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

const XrayContext = createContext();

export default class XrayProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    enabled: PropTypes.bool,
    hideContent: PropTypes.bool,
    showLabels: PropTypes.bool
  };

  static defaultProps = {
    enabled: false,
    hideContent: false,
    showLabels: false
  };

  constext = {};

  render() {
    const { enabled, hideContent, showLabels } = this.props;
    this.context = {
      ...this.context,
      enabled,
      hideContent,
      showLabels
    };
    return (
      <XrayContext.Provider value={this.context}>
        {this.props.children}
      </XrayContext.Provider>
    );
  }
}

export { XrayContext };
