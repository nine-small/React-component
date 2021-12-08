import React from "react";
import { Consumer } from "./ctx";

const FormButton = (props) => {
  return (
    <Consumer>
      {({formData}) => {
        return (
        <button onClick={()=>{
            console.log(formData)
        }}>{props.children}</button>
        );
      }}
    </Consumer>
  );
};

export default FormButton;
