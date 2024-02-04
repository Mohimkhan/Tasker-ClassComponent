import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      imgSrc,
      altText = "image",
      width = "",
      height = "",
      ...rest
    } = this.props;
    return (
      <img
        className={className ? className : ""}
        src={imgSrc}
        alt={altText}
        width={width}
        height={height}
        {...rest}
      />
    );
  }
}
