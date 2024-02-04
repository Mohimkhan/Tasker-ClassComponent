import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { btnType = "button", className, children, ...rest } = this.props;
    return (
      <button type={btnType} className={className ? className : ""} {...rest}>
        {children}
      </button>
    );
  }
}
