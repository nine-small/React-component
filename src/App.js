import React from 'react'

class Comp extends React.Component{
  static defaultProps = {
    a: 1,
    b:2
  }
  render(){
    return (
      <h1>a:{this.props.a},b:{this.props.b}</h1>
    )
  }
}



export default function App() {
  return (
    <div>
      <Comp></Comp>
    </div>
  )
}
