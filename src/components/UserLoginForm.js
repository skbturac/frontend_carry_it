import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'


class UserLoginForm extends Component {
  render() {
    return (
      <div className="user-login-form">
        <Form>
          <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

          <Button content='Login' primary />
        </Form>
      </div>
    );
  }
}

export default UserLoginForm;
