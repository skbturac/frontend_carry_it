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
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}              onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
     </div>
    );
  }
}

export default MenuBar;
