import React, { Component } from "react";
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import PostContainer from "../containers/PostContainer";
import BagContainer from "../containers/BagContainer";
import { Header } from "semantic-ui-react";

URL = `http://localhost:4000/api/v1/profile`

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:""
    };
  }

  componentDidMount(){
    fetch(URL, {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(profileData => {
        console.log('Before fetch --', profileData);
        this.setState({userInfo: profileData})
        console.log('After fetch --', profileData);
      })
  }

  handleDisplay = () => {
    
  }

  render() {
    console.log(this.state.activeItem);
    return (
      <div className="homepage-container">
        <div className="Menu-bar">
          <MenuBar
            handleItemClick={this.props.handleItemClick}
            handleMenuBarChange={this.props.handleMenuBarChange}
          />
        </div>
        <div className="profile-container">
          <Profile handleItemClick={this.props.handleItemClick} />
        </div>
        <div className="bags-container">
          <Header as="h2" icon="boxes" content="Packages to deliver" />
          <BagContainer handleItemClick={this.props.handleItemClick} />
        </div>
        <div className="post-package-container">
          <Header as="h2" icon="shipping fast" content="Shiping Order" />
          <PostContainer handleItemClick={this.props.handleItemClick} />
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
