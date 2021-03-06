import React, { Component } from "react";
import Homepage from "./containers/Homepage";
import LandingPage from "./containers/LandingPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleLogIn = () => {
    this.whatToRender()
  }

  handleAuth = () => {
    this.setState({
      loggedIn: true
    });
  };

  handleLogOut = () => {
    this.setState({
      loggedIn: false
    });
    // this.whatToRender()
  };

  // {this.state.loggedIn ? true : false }
  whatToRender = () => {
    if (this.state.loggedIn === false) {
      return <LandingPage handleAuth={this.handleAuth} handleLogIn={this.handleLogIn}  />;
    } else {
      return <Homepage handleAuth={this.handleAuth} handleLogOut={this.handleLogOut}/>;
    }
  };

  render() {
    return <div className="App">{this.whatToRender()}</div>;
  }
}

export default App;
