import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

class MenuBar extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state

    return (
     <div className="menu-container">
      <Segment inverted >
        <Menu inverted secondary>
          <Menu.Item as='h1' content='Carry It'
          />
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}
          position="right"/>
          <Menu.Item
            name='Message'
            active={activeItem === 'Message'}              onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Activity'
            active={activeItem === 'Activity'}              onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Log Out'
            active={activeItem === 'Log Out'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
     </div>
    );
  }
}

export default MenuBar;
