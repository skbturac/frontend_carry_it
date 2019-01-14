import React, { Component } from "react";
import LandingMenuBar from "../components/LandingMenuBar";
// import ActivityContainer from "./ActivityContainer"
import Login from "./Login"

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="landing-page">
          <LandingMenuBar />
          <Login handleAuth={this.props.handleAuth} />
      </div>
    );
  }
}

export default LandingPage;
// <ActivityContainer />
