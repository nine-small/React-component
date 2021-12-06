import React, { Component } from "react";
import PropTypes from "prop-types";
import Images from "./Images";
import Circle from "./Circle";
import Btn from "./Btn";
import "./assets/css/banner.css";

import img1 from "./assets/img/1.jpeg";
import img2 from "./assets/img/2.jpeg";
import img3 from "./assets/img/3.jpeg";
import img4 from "./assets/img/4.jpeg";
import img5 from "./assets/img/5.jpeg";
const images = [img1, img2, img3, img4, img5];

export default class Banner extends Component {
  static defaultProps = {
    width: 600,
    height: 400,
    images,
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = {
    index: 0,
    images: this.props.images,
  };
  move = (val) => {
    if (val < 0) {
      this.container.style.left =
        -this.state.images.length * this.props.width + "px";
      this.setState({
        index: this.state.images.length - 1,
      });
      return;
    }
    if (val > this.state.images.length) {
      this.container.style.left = 0;
      this.setState({
        index: 1,
      });
      return;
    }
    this.setState({
      index: val,
    });
  };

  autoMove = ()=>{
      return setInterval(() => {
        this.move(this.state.index + 1);
      }, 3000);
  }
  timer = this.autoMove()

  refImg = (el) => {
    this.container = el.container;
  };
  render() {
    const { width, height, images } = this.props;
    return (
      <div
        onMouseEnter={() => {
          clearInterval(this.timer);
        }}
        onMouseLeave={() => {
          this.timer = this.autoMove()
        }}
        className="container"
        style={{ width: this.props.width, height: this.props.height }}
      >
        <Images
          ref={this.refImg}
          {...{ width, height, images, index: this.state.index }}
        />
        <Circle images={images} index={this.state.index} move={this.move} />
        <Btn direction="left" move={this.move} index={this.state.index} />
        <Btn direction="right" move={this.move} index={this.state.index} />
      </div>
    );
  }
}
