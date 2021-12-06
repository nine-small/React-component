import React, { Component } from "react";
import {slowDownMove} from '../utils/tools'

export default class Images extends Component {
  containerRef = (el)=>{
    this.container = el
  }
  render() {
    const { width, height, images, index } = this.props;
    const newArr = [...images, images[0]];
    const liList = newArr.map((el, i) => {
      return (
        <li key={i} style={{ width, height }}>
          <img
            src={el}
            style={{ width, height, display: "block" }}
            alt=''
          />
        </li>
      );
    });
    this.container && slowDownMove(this.container,{left:- index * width})
    return (

      <ul
        ref={this.containerRef}
        className="images"
        style={{ width: width * newArr.length, height }}
      >
        {liList}
      </ul>
    );
  }
}
