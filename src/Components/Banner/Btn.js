import React, { Component } from "react";

export default class Btn extends Component {
    handleClick = ()=>{
        console.log(this.props.index)
        if(this.props.direction === 'left'){
            this.props.move(+this.props.index - 1)
        }else{
            this.props.move(+this.props.index + 1)
        }
    }
  render() {
    return (
      <div className={this.props.direction + " btn"} onClick={this.handleClick}>
        {this.props.direction === "left" ? "<" : ">"}
      </div>
    );
  }
}
