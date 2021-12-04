import React, { Component } from 'react'
import CheckBoxGroup from './CheckBoxGroup'

export default class Test extends Component {
    state = {
        datas:[
            {value:'1',text:'蹦迪'},
            {value:'2',text:'唱歌'},
            {value:'3',text:'喝酒'},
            {value:'4',text:'烫头'},
            {value:'5',text:'其他'},
        ],
        choose:['2'],
        name:'loves'
    }
    onChange = (val)=>{
        this.setState({
            choose:val
        })
    }
    render() {
        return (
            <div>
                <CheckBoxGroup {...this.state} onChange={this.onChange}>
                </CheckBoxGroup>
            </div>
        )
    }
}
