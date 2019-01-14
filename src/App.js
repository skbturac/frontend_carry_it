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

  handleAuth = () => {
    this.setState({
      loggedIn: true
    });
  };

  // {this.state.loggedIn ? true : false }
  whatToRender = () => {
    if (this.state.loggedIn === false) {
      return <LandingPage handleAuth={this.handleAuth}  />;
    } else {
      return <Homepage handleAuth={this.handleAuth} />;
    }
  };

  render() {
    return <div className="App">{this.whatToRender()}</div>;
  }
}

export default App;
