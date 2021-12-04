import React from 'react'

export default function RadioBoxGroup(props) {
    const {datas,choose,name} = props;
    function getBoxGroup(){
        return datas.map(el=>{
            return (
            <label key={el.value}>
                <input 
                type="radio" 
                name={name} 
                value={el.value}
                checked={choose === el.value}
                onChange={changeHandle}
                />{el.text}
            </label>)
        })
    }

    function changeHandle(e){
        props.onChange && props.onChange(e.target.value)
    }
    const BoxGroup = getBoxGroup()
    return (
        <div>
            {BoxGroup}
        </div>
    )
}
