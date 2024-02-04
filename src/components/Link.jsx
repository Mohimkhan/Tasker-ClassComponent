import React, { Component } from "react";

export default class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, className, to = "/", ...rest } = this.props;
    return (
      <a className={className ? className : ""} href={to} {...rest}>
        {children}
      </a>
    );
  }
}
