import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Provider } from "./ctx";
import FormInput from './FormInput'
import FormButton from './FormButton'

 class Form extends Component {
    static propTypes = {
        formData:PropTypes.object,
        changeFormData:PropTypes.func
    }


    state = {
        formData:{},
        changeFormData:(name,val)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]:val
                }
            })
        }
    }
  render() {
    return (
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
    );
  }
}

Form.input = FormInput;
Form.button = FormButton;

export default Form;

