import { Button, Form } from "semantic-ui-react";
import React, { Component } from "react";

class UserEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURLInput: this.props.userInfo.userInfo.avatar,
      firstNameInput: this.props.userInfo.userInfo.first_name,
      lastNameInput: this.props.userInfo.userInfo.last_name,
      userNameInput: this.props.userInfo.userInfo.username,
      bioInput: this.props.userInfo.userInfo.bio,
      email_addressInput: this.props.userInfo.userInfo.email_address,
      phone_numberInput: this.props.userInfo.userInfo.phone_number,
      home_addressInput: this.props.userInfo.userInfo.home_address
    };
  }

  handleInputChange = event => {
    // console.log(event.target.value);
    // console.log(event.target.userNameInput);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    fetch(`http://localhost:4000/api/v1/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.firstNameInput,
          last_name: this.state.lastNameInput,
          username: this.state.userNameInput,
          bio: this.state.bioInput,
          avatar: this.state.imageURLInput,
          email_address: this.state.email_addressInput,
          phone_number: this.state.phone_numberInput,
          home_address: this.state.home_addressInput
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        this.props.handleEdit(json)
      })
  };

  render() {
    return (
      <div className="user-signup-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Profile Image"
            placeholder="Copy & Past URL"
            value={this.state.imageURLInput}
            onChange={this.handleInputChange}
            name="imageURLInput"
          />
          <Form.Input
            label="First Name"
            placeholder="First Name"
            value={this.state.firstNameInput}
            onChange={this.handleInputChange}
            name="firstNameInput"
          />
          <Form.Input
            label="Last Name"
            placeholder="Last Name"
            value={this.state.lastNameInput}
            onChange={this.handleInputChange}
            name="lastNameInput"
          />
          <Form.Input
            label="Username"
            placeholder="Username"
            value={this.state.userNameInput}
            onChange={this.handleInputChange}
            name="userNameInput"
          />
          <Form.TextArea
            label="Bio"
            placeholder="Bio"
            value={this.state.bioInput}
            onChange={this.handleInputChange}
            name="bioInput"
          />
          <Form.Input
            label="Email Address"
            placeholder="Email Address"
            value={this.state.email_addressInput}
            onChange={this.handleInputChange}
            name="email_addressInput"
          />
          <Form.Input
            label="Home Address"
            placeholder="Home Address"
            value={this.state.home_addressInput}
            onChange={this.handleInputChange}
            name="home_addressInput"
          />
          <Form.Input
            label="Phone Number"
            placeholder="Phone Number"
            value={this.state.phone_numberInput}
            onChange={this.handleInputChange}
            name="phone_numberInput"
          />

          <Button content="Save" icon="save" size="medium" primary />
        </Form>
      </div>
    );
  }
}

export default UserEditForm;
