import React from 'react'
import types from '../../utils/commonTypes'
import PropTypes from 'prop-types'

export default function SelectBoxGroup(props) {
    const {datas,choose,name} = props
    function getBoxGroup(){
        return (datas.map(ele=>{
            return (
                <option value={ele.value} key={ele.value}>{ele.text}</option>
            )
        }))
    }
    function changeHandle(e){
        props.onChange && props.onChange(e.target.value)
    }
    const BoxGroup = getBoxGroup()
    return (
        <div>
            <select 
            name={name}
            value={choose}
            onChange = {changeHandle}
            >
                {BoxGroup}
            </select>
        </div>
    )
}

SelectBoxGroup.propTypes = {
    datas:types.datas.isRequired,
    choose:types.choose,
    name:PropTypes.string,
    onChange:PropTypes.func
}
