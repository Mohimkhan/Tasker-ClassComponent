import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputType, className, children, ...rest } = this.props;
    return (
      <input type={inputType} className={className ? className : ""} {...rest}>
        {children}
      </input>
    );
  }
}
