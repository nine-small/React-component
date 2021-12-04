import React from 'react'
import PropTypes from 'prop-types'
import types from '../../utils/commonTypes'
// 一组多选框

// 属性验证
CheckBoxGroup.propTypes = {
    datas:types.datas.isRequired,
    name:PropTypes.string,
    choose:PropTypes.arrayOf(PropTypes.string)
}


export default function CheckBoxGroup(props) {
    const {datas,choose,name} = props
    
    function getCheckBox(){
        return datas.map(ele => {
            return <label key={ele.value}>
                <input 
                type="checkbox"
                name={name}
                value={ele.value}
                checked = {choose.includes(ele.value)}
                onChange={handleChange}
                />{ele.text}
            </label>
        })
    }

    function handleChange(e){
        console.log(e.target.value)
        let newArr = [];
        if(e.target.checked){
            newArr = [...choose,e.target.value]
        }else{
            newArr = choose.filter(it => it !== e.target.value)
        }
        props.onChange && props.onChange(newArr,name,e)
    }
    
    const checkBox = getCheckBox()
    return (
        <div>
          {checkBox}
        </div>
    )
}

