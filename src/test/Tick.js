import React, { Component } from "react";

export default class Tick extends Component {
  state = {
    num: this.props.num,
  };
  constructor(props) {
    super(props);
    this.timer = setInterval(() => {
      this.setState(
        () => ({
          num: this.state.num - 1,
        }),
        () => {
          if (this.state.num == 0) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }
      );
    }, 1000);
  }
  render() {
    return <div>{this.state.num}</div>;
  }
}
