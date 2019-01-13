import React, { Component } from "react";
import UserSignUpForm from "../components/UserSignUpForm";
import UserLoginForm from "../components/UserLoginForm";
import { Divider, Grid, Segment, Button, Popup } from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fkjsn: "",
      passwordInput: ""
    };
  }
  render() {
    return (
      <div className="user-login-signup-container">
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <div className="user-login-container">
                <UserLoginForm />
              </div>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Popup
                trigger={<Button content='Sign up' icon='signup' size='big' />}
                flowing
                hoverable
              >
                <div className="user-signup-container">
                  <UserSignUpForm />
                </div>
              </Popup>
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    );
  }
}

export default Login;

// <Button content="Sign up" icon="signup" size="big" />

// <Grid.Column verticalAlign="middle">
// <div className="user-signup-container">
// <UserSignUpForm />
// </div>
// </Grid.Column>
