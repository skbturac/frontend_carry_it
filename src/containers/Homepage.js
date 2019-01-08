import React, { Component } from 'react';
import MenuBar from '../components/MenuBar'
import {
  Menu,
  Segment,
  Header,
  Container,
  Button,
  Icon
  } from 'semantic-ui-react'

class Homepage extends Component {

  render() {
    return (
      <div className="homepage-container">
        <div className="header-container">
          <Header size='huge'>Carry It</Header>
        </div>
        <div className="Menu-bar">
          <Menu />
        </div>
        <div className="post-container">
          <Header size='medium'>posts</Header>
        </div>

      </div>
    );
  }
}

export default Homepage;
