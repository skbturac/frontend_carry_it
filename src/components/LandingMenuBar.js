import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

class LandingMenuBar extends Component {
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
          <Menu.Item
            content='Login / SignUp'
            active={activeItem === 'Login / SignUp'}
            onClick={this.handleItemClick}
            position="right"
          />
        </Menu>
      </Segment>
     </div>
    );
  }
}

export default LandingMenuBar;
