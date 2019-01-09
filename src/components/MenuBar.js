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
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item content='Carry It'
          />
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}
          position="right"/>
          <Menu.Item
            name='Messages'
            active={activeItem === 'Messages'}              onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Activity'
            active={activeItem === 'Activity'}              onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Settings'
            active={activeItem === 'Settings'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
     </div>
    );
  }
}

export default MenuBar;
