import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { XrayContext } from './XrayProvider';

@autobind
export default class Xray extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.string,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    width: PropTypes.string
  };

  static defaultProps = {
    children: null,
    className: '',
    height: '100px',
    style: {},
    width: '100px'
  };

  renderContext(context) {
    const enabled = context?.enabled;
    if (!enabled) {
      return (
        <div className={this.props.className} style={this.props.style}>
          {this.props.children}
        </div>
      );
    }
    const props = { ...this.props };
    delete props.children;
    delete props.color;
    delete props.height;
    delete props.label;
    delete props.width;
    return (
      <div
        {...props}
        style={{
          ...props.style,
          backgroundColor: this.props.color,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTopWidth: '0px',
          height: this.props.height,
          width: this.props.width
        }}
      >
        {this.props.label}
      </div>
    );
  }

  render() {
    return (
      <XrayContext.Consumer>
        {context => this.renderContext(context)}
      </XrayContext.Consumer>
    );
  }
}
