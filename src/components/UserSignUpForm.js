import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'


class UserSignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      userNameInput: '',
      passwordInput: '',
    }
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.userNameInput);
    this.setState({
      [event.target.name]:event.target.value,
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:4000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.firstNameInput,
          last_name: this.state.lastNameInput,
          username: this.state.userNameInput,
          password: this.state.passwordInput,
          bio: 'King of Flavortown, USA',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg'
        }
      })
    })
    // .then(response => response.json())
    // .then(console.log)
  }

  render() {
    console.log(this.state.userNameInput);
    console.log(this.state.passwordInput);
    return (
      <div className="user-signup-form">
      <Form onSubmit={this.handleSubmit}>
        <Form.Input iconPosition='left' label='First Name' placeholder='First Name' value={this.state.firstNameInput} onChange={this.handleInputChange}
        name='firstNameInput' />
        <Form.Input iconPosition='left' label='Last Name' placeholder='Last Name' value={this.state.lastNameInput} onChange={this.handleInputChange}
        name='lastNameInput'  />
        <Form.Input iconPosition='left' label='Username' placeholder='Username' value={this.state.userNameInput} onChange={this.handleInputChange}
        name='userNameInput' />
        <Form.Input icon='lock' iconPosition='left' label='Password' type='password' value={this.state.passwordInput} onChange={this.handleInputChange}
        name='passwordInput' />

        <Button content='Sign up' icon='signup' size='medium' primary/>
        </Form>
      </div>
    );
  }
}

export default UserSignUpForm;
