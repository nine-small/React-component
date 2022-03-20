import React, { Component } from "react";
import Form from './'


export default class Test extends Component {

  render() {
    return <div>
        <Form>
            <div>
              用户名：<Form.input type='text' name='loginId'/>
            </div>
            <div>
              密码：<Form.input type='password' name='loginPwd'/>
            </div>
            <div>
              <Form.button>提交</Form.button>
            </div>
        </Form>
    </div>;
  }
}
