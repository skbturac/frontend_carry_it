import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


class UserSignUpForm extends Component {
  render() {
    return (
      <div className="user-signup-form">
        <Button content='Sign up' icon='signup' size='big' />
      </div>
    );
  }
}

export default UserSignUpForm;
