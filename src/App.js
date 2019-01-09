import React, { Component } from 'react';
import Homepage from './containers/Homepage'
import LandingPage from './containers/LandingPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Homepage />
      </div>
    );
  }
}

export default App;
