import React, { Component } from "react";
import LandingMenuBar from "../components/LandingMenuBar";
// import ActivityContainer from "./ActivityContainer"
import Login from "./Login"

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
          <LandingMenuBar />
          <Login />
      </div>
    );
  }
}

export default LandingPage;
// <ActivityContainer />
