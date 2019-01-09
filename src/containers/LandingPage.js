import React, { Component } from 'react';
import LandingMenuBar from '../components/LandingMenuBar'
import UserSignUpForm from '../components/UserSignUpForm'
import UserLoginForm from '../components/UserLoginForm'

class LandingPage extends Component {

  render() {
    return (
      <div className="landing-page">
        <div className="landing-page-container">
          <LandingMenuBar />
          <div className="user-login-signup-container">
            <div className="user-login-container">
            <UserLoginForm />
            </div>
            <div className="user-signup-container">
            <UserSignUpForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
