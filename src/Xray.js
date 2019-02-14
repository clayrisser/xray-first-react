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
    minHeight: null,
    minWidth: null,
    style: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      color: props.color || colorHash.hex(props.label)
    };
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
    if (node === this) return false;
    return node?.type === Xray;
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
    const color = invertColor(this.state.color, {
      black: '#3a3a3a',
      white: '#fafafa'
    });
    return (
      <div
        {...props}
        style={{
          ...props.style,
          backgroundColor: this.state.color,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderColor: color,
          color,
          ...(this.props.minHeight ? { minHeight: this.props.minHeight } : {}),
          ...(this.props.minWidth ? { minWidth: this.props.minWidth } : {})
        }}
      >
        {showLabels ? <div>{this.props.label}</div> : <div />}
        {hideContent ? this.getXrayTree(this) : this.props.children}
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
