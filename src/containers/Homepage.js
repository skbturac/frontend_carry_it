import React, { Component } from 'react';
import MenuBar from '../components/MenuBar'

class Homepage extends Component {

  render() {
    return (
      <div className="homepage-container">
        <div className="Menu-bar">
        <MenuBar />
        </div>
        <div className="post-container">

        </div>
      </div>
    );
  }
}

export default Homepage;
