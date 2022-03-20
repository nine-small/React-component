import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
    }
    

  render() {
      console.log("render")
    return (
      <div>Comp</div>
    )
  }
}
