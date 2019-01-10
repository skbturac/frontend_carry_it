import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameInput: "",
      passwordInput: ""
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    console.log(event.target.userNameInput);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    // const body = {
    // }
    fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.userNameInput,
          password: this.state.passwordInput
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        // debugger
      });
  };

  render() {
    console.log(this.state.userNameInput);
    console.log(this.state.passwordInput);
    return (
      <div className="user-login-form">
        {" "}
        <Form onSubmit={this.handleSubmit}>
          {" "}
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder="Username"
            value={this.state.userNameInput}
            onChange={this.handleInputChange}
            name="userNameInput"
          />{" "}
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            type="password"
            value={this.state.passwordInput}
            onChange={this.handleInputChange}
            name="passwordInput"
          />{" "}
          <Button content="Login" primary />{" "}
        </Form>{" "}
      </div>
    );
  }
}

export default UserLoginForm;
