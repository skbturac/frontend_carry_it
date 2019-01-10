import React, { Component } from "react";
import LandingMenuBar from "../components/LandingMenuBar";
import UserSignUpForm from "../components/UserSignUpForm";
import UserLoginForm from "../components/UserLoginForm";
import { Divider, Grid, Segment } from "semantic-ui-react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-page-container">
          <LandingMenuBar />
          <div className="user-login-signup-container">
            <Segment placeholder>
              <Grid columns={2} relaxed="very" stackable>
                <Grid.Column>
                  <div className="user-login-container">
                    <UserLoginForm />
                  </div>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <div className="user-signup-container">
                    <UserSignUpForm />
                  </div>
                </Grid.Column>
              </Grid>
              <Divider vertical>Or</Divider>
            </Segment>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
