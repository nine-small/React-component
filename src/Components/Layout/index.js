import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
export default function Layout(props) {
    return (
        <div className='layout' style={{minWidth:props.minWidth}}>
            <div className="left" style={{'width':props.leftWidth,backgroundColor:'#f40'}}>
                {props.left}
            </div>
            <div className="main" style={{backgroundColor:'#00f'}}>
                {props.children}
            </div>
            <div className="right" style={{'width':props.rightWidth}}>
                {props.right}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    leftWidth:0,
    rightWidth:0,
    minWidth:800
}

Layout.propTypes = {
    left:PropTypes.node,
    right:PropTypes.node,
    children:PropTypes.node,
    leftWidth:PropTypes.number,
    rightWidth:PropTypes.number,
    minWidth:PropTypes.number
}
