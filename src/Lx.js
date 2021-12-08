import React, { Component } from 'react'

const ctx = React.createContext();

export default class Lx extends Component {

  render() {
    return (
      <ctx.Provider value={{a:1}}>
        <h1>1</h1>
        <h2>2</h2>
        <A />
      </ctx.Provider>
        
    )
  }
}


function A(props,context){
  console.log(props,context)
  return (
    <ctx.Consumer>
      {(value)=> <h3>A组件:{value.a}</h3>}
    </ctx.Consumer>
  
  )
}

// class A extends Component{
//   static contextType = ctx
//   render(){
//     return <h3>A组件:{this.context.a}</h3>
//   }
// }


// A.contextType = ctx;
