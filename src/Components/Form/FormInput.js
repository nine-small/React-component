import React from "react";
import { Consumer } from "./ctx";

const FormInput = (props) => {
  return (
    <Consumer>
      {(data) => {
        return (
        <input 
        type={props.type} 
        name={props.name}
        value = {data.formData[props.name] || ''}
        onChange={(e)=>{
            data.changeFormData(props.name,e.target.value)
        }}
        />
            );
      }}
    </Consumer>
  );
};

export default FormInput;
