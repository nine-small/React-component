import React from "react";
import PropTypes from "prop-types";


export default function CheckBox(props) {
  const { info, name, choose } = props;

  function handleChange(e){
    let newArr;
    if(e.target.checked){
        newArr = [...choose,info.value]
    }else{
        newArr = choose.filter(el=>el !== info.value)
    }
    console.log(choose)
    props.onChange && props.onChange(newArr)
  }
  return (
    <label value={info.value}>
      <input
        type="checkbox"
        value={info.value}
        checked={choose.includes(info.value)}
        name={name}
        onChange={handleChange}
      />{info.text}
    </label>
  );
}
// 属性验证
CheckBox.propTypes = {
  info: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  choose: PropTypes.arrayOf(PropTypes.string),
  onChange:PropTypes.func.isRequired

};

// export default function CheckBoxGroup(props) {
//     const {datas,choose,name} = props

//     function getCheckBox(){
//         return datas.map(ele => {
//             return <label key={ele.value}>
//                 <input
//                 type="checkbox"
//                 name={name}
//                 value={ele.value}
//                 checked = {choose.includes(ele.value)}
//                 onChange={handleChange}
//                 />{ele.text}
//             </label>
//         })
//     }

//     function handleChange(e){
//         console.log(e.target.value)
//         let newArr = [];
//         if(e.target.checked){
//             newArr = [...choose,e.target.value]
//         }else{
//             newArr = choose.filter(it => it !== e.target.value)
//         }
//         props.onChange && props.onChange(newArr,name,e)
//     }

//     const checkBox = getCheckBox()
//     return (
//         <div>
//           {checkBox}
//         </div>
//     )
// }
