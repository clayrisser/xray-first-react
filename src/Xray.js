import ColorHash from 'color-hash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import invertColor from 'invert-color';
import { XrayContext } from './XrayProvider';

const colorHash = new ColorHash();

@autobind
export default class Xray extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    minHeight: PropTypes.string,
    minWidth: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    children: null,
    className: '',
    color: null,
    minHeight: '0px',
    minWidth: '0px',
    style: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      color: props.color || colorHash.hex(props.label)
    };
  }

  renderContext(context) {
    const enabled = context?.enabled;
    const showLabels = context?.showLabels;
    const hideContent = context?.hideContent;
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
    delete props.label;
    delete props.minHeight;
    delete props.minWidth;
    return (
      <div
        {...props}
        style={{
          ...props.style,
          backgroundColor: this.state.color,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTopWidth: '0px',
          minHeight: this.props.minHeight,
          minWidth: this.props.minWidth,
          color: invertColor(this.state.color, {
            black: '#3a3a3a',
            white: '#fafafa'
          })
        }}
      >
        {showLabels ? <div>{this.props.label}</div> : <div />}
        {hideContent ? this.getXrayTree(this) : this.props.children}
      </div>
    );
  }

  getXrayTree(node, tree = []) {
    if (this.isXray(node)) {
      tree.push(node);
    } else if (node.props?.children) {
      const { children } = node.props;
      if (Array.isArray(children)) {
        children.map(node => {
          this.getXrayTree(node, tree);
          return node;
        });
      } else {
        this.getXrayTree(children, tree);
      }
    }
    return tree;
  }

  isXray(node) {
    return node?.type?.name === 'Xray';
  }

  render() {
    return (
      <XrayContext.Consumer>
        {context => this.renderContext(context)}
      </XrayContext.Consumer>
    );
  }
}
