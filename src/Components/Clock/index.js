import React, { Component } from 'react'
import './index.css'

function getTime(date){
    const newDate = new Date(date)
    return [newDate.getHours(),newDate.getMinutes(),newDate.getSeconds()]
}

export default class Clock extends Component {
    state = {
        date : (Date.now())
    }

    tick = ()=>{
        this.setState({
            date:Date.now()
        })
    }
    componentDidMount=()=> {
        this.timer = setInterval(this.tick,1000)
    }
    
    componentWillUnmount = ()=>{
        clearInterval(this.timer)
    }
    render() {
        const date = getTime(this.state.date)
        return (
            <div className='clock'>
                <span>{date[0]}:</span>
                <span>{date[1]}:</span>
                <span>{date[2]}</span>
            </div>
        )
    }
}
